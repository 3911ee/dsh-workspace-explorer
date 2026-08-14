/**
 * dsh-workspace-explorer — host half.
 *
 * VS Code-style workspace file explorer for the DeepSeek Harness Web GUI.
 * Registers a self-contained JSON API under `/workspace-files-api` so the
 * client half never depends on the directory-picker seam composition (which
 * may serve the `native` backend and expose no browse primitives).
 *
 * The GUI binds to loopback by default (`dsh web`), so this API is only
 * reachable from the operator's own browser. All paths must be fully
 * qualified; listings are capped at 1000 rows, reads at 256 KiB (8 MiB hard
 * cap), writes at 8 MiB.
 */

import { mkdir, open, opendir, rename, stat, writeFile } from "node:fs/promises";
import { basename, dirname, isAbsolute, join, resolve } from "node:path";
import { homedir } from "node:os";

const name = "workspace-explorer";
const inject = ["webServer"];

const MAX_ENTRIES = 1000;
const DEFAULT_READ_BYTES = 256 * 1024;
const MAX_READ_BYTES = 8 * 1024 * 1024;
const MAX_WRITE_BYTES = 8 * 1024 * 1024;
const MAX_BODY_BYTES = 64 * 1024;

/** Business failure with a stable wire code. */
class ExplorerError extends Error {
	constructor(code, message) {
		super(message);
		this.code = code;
		this.name = "ExplorerError";
	}
}

const errorText = (error) => error instanceof Error ? error.message : String(error);

/** Fully qualified absolute path (drive-qualified on Windows, POSIX-absolute elsewhere). */
function fullyQualified(path) {
	if (typeof path !== "string" || path === "") return false;
	if (!isAbsolute(path)) return false;
	if (process.platform === "win32" && !/^[A-Za-z]:[\\/]/.test(path) && !/^[\\/]{2}[^\\/]+[\\/]+[^\\/]+/.test(path)) return false;
	return true;
}

/** Single path segment, not blank, not `.`/`..`, no separators. */
function validSegment(name) {
	return typeof name === "string" && name.trim() !== "" && name !== "." && name !== ".." && !/[/\\]/.test(name);
}

function requireQualified(path) {
	if (!fullyQualified(path)) throw new ExplorerError("path-invalid", `"${path}" is not a fully qualified path`);
	return resolve(path);
}

function requireSegment(name) {
	if (!validSegment(name)) throw new ExplorerError("name-invalid", `"${name}" is not a single path segment`);
	return name.trim();
}

/** Ancestor chain from the filesystem root to `target` inclusive. */
function ancestryCrumbs(target) {
	const crumbs = [];
	let current = target;
	for (;;) {
		const parent = dirname(current);
		crumbs.unshift({
			name: parent === current ? current : basename(current),
			path: current,
			hidden: false
		});
		if (parent === current) return crumbs;
		current = parent;
	}
}

/** One listing level: directories always, files/symlink-files when `includeFiles`. */
async function listDirectory(path, includeFiles) {
	const home = homedir();
	const target = requireQualified(path ?? home);
	const entries = [];
	let truncated = false;
	let directory;
	try {
		directory = await opendir(target);
	} catch (error) {
		throw new ExplorerError("directory-unreadable", `cannot list ${target}: ${errorText(error)}`);
	}
	try {
		for (;;) {
			const dirent = await directory.read();
			if (dirent === null) break;
			if (entries.length >= MAX_ENTRIES) {
				truncated = true;
				break;
			}
			const full = join(target, dirent.name);
			const hidden = dirent.name.startsWith(".");
			if (dirent.isDirectory()) {
				entries.push({ name: dirent.name, path: full, hidden, isDirectory: true });
				continue;
			}
			if (dirent.isSymbolicLink()) {
				let kind = null;
				try {
					const info = await stat(full);
					kind = info.isDirectory() ? "dir" : info.isFile() ? "file" : null;
				} catch {
					kind = null;
				}
				if (kind === "dir") entries.push({ name: dirent.name, path: full, hidden, isDirectory: true });
				else if (kind === "file" && includeFiles) {
					try {
						const info = await stat(full);
						entries.push({ name: dirent.name, path: full, hidden, isDirectory: false, size: info.size });
					} catch {
						entries.push({ name: dirent.name, path: full, hidden, isDirectory: false });
					}
				}
				continue;
			}
			if (includeFiles) {
				try {
					const info = await stat(full);
					entries.push({ name: dirent.name, path: full, hidden, isDirectory: false, size: info.size });
				} catch {
					entries.push({ name: dirent.name, path: full, hidden, isDirectory: false });
				}
			}
		}
	} finally {
		await directory.close().catch(() => {});
	}
	entries.sort((left, right) => left.name.localeCompare(right.name));
	return { path: target, home, crumbs: ancestryCrumbs(target), entries, truncated };
}

/** Head text of a UTF-8 file for preview/edit, capped at `maxBytes`. */
async function readFileHead(path, maxBytesOption) {
	const target = requireQualified(path);
	const maxBytes = typeof maxBytesOption === "number" && Number.isFinite(maxBytesOption) && maxBytesOption > 0
		? Math.min(Math.floor(maxBytesOption), MAX_READ_BYTES)
		: DEFAULT_READ_BYTES;
	let handle;
	try {
		const info = await stat(target);
		if (!info.isFile()) throw new ExplorerError("file-unreadable", `${target} is not a regular file`);
		handle = await open(target, "r");
		const buffer = Buffer.alloc(Math.min(info.size, maxBytes) + 1);
		const { bytesRead } = await handle.read(buffer, 0, buffer.length, 0);
		const truncated = info.size > maxBytes || bytesRead > maxBytes;
		return {
			path: target,
			size: info.size,
			truncated,
			text: buffer.subarray(0, Math.min(bytesRead, maxBytes)).toString("utf8")
		};
	} catch (error) {
		if (error instanceof ExplorerError) throw error;
		throw new ExplorerError("file-unreadable", `cannot read ${target}: ${errorText(error)}`);
	} finally {
		if (handle !== void 0) await handle.close().catch(() => {});
	}
}

/** Overwrite one text file with the edited content (UTF-8, 8 MiB cap). */
async function writeText(path, text) {
	const target = requireQualified(path);
	if (typeof text !== "string") throw new ExplorerError("payload-invalid", "write requires a text payload");
	const buffer = Buffer.from(text, "utf8");
	if (buffer.length > MAX_WRITE_BYTES) throw new ExplorerError("file-too-large", `content exceeds the ${MAX_WRITE_BYTES} byte cap`);
	try {
		await writeFile(target, buffer);
	} catch (error) {
		throw new ExplorerError("file-write-failed", `cannot write ${target}: ${errorText(error)}`);
	}
	return { path: target, size: buffer.length };
}

/** Rename one entry inside its directory (full name, extension included). */
async function renameEntry(path, name) {
	const target = requireQualified(path);
	const segment = requireSegment(name);
	const destination = join(dirname(target), segment);
	try {
		await rename(target, destination);
	} catch (error) {
		throw new ExplorerError("rename-failed", `cannot rename ${target}: ${errorText(error)}`);
	}
	return { path: destination, name: segment };
}

/** Create one child directory. */
async function mkdirAt(path, name) {
	const parent = requireQualified(path);
	const segment = requireSegment(name);
	const target = join(parent, segment);
	try {
		await mkdir(target);
	} catch (error) {
		if (typeof error === "object" && error !== null && error.code === "EEXIST") throw new ExplorerError("directory-exists", `${target} already exists`);
		throw new ExplorerError("directory-create-failed", `cannot create ${target}: ${errorText(error)}`);
	}
	return target;
}

/** Create one empty file (exclusive create). */
async function createFileAt(path, name) {
	const parent = requireQualified(path);
	const segment = requireSegment(name);
	const target = join(parent, segment);
	let handle;
	try {
		handle = await open(target, "wx");
	} catch (error) {
		if (typeof error === "object" && error !== null && error.code === "EEXIST") throw new ExplorerError("file-exists", `${target} already exists`);
		throw new ExplorerError("file-create-failed", `cannot create ${target}: ${errorText(error)}`);
	} finally {
		if (handle !== void 0) await handle.close().catch(() => {});
	}
	return target;
}

function json(res, status, value) {
	const body = JSON.stringify(value);
	res.writeHead(status, {
		"content-type": "application/json; charset=utf-8",
		"cache-control": "no-store",
		"content-length": Buffer.byteLength(body)
	});
	res.end(body);
}

async function readBody(req) {
	const chunks = [];
	let size = 0;
	for await (const chunk of req) {
		size += chunk.length;
		if (size > MAX_BODY_BYTES) throw new ExplorerError("payload-too-large", "request body exceeds 64 KiB");
		chunks.push(chunk);
	}
	return Buffer.concat(chunks).toString("utf8");
}

/** The plugin's API route handler (registered under the `/workspace-files-api` prefix). */
async function handle(req, res) {
	const url = new URL(req.url ?? "/", "http://x");
	const pathname = url.pathname;
	try {
		if (req.method === "GET" && pathname === "/workspace-files-api/list") {
			return json(res, 200, await listDirectory(url.searchParams.get("path"), url.searchParams.get("includeFiles") === "1"));
		}
		if (req.method === "GET" && pathname === "/workspace-files-api/read") {
			const maxBytes = Number(url.searchParams.get("maxBytes"));
			return json(res, 200, await readFileHead(url.searchParams.get("path"), Number.isFinite(maxBytes) && maxBytes > 0 ? maxBytes : void 0));
		}
		if (req.method === "POST" && pathname.startsWith("/workspace-files-api/")) {
			const payload = JSON.parse(await readBody(req));
			if (pathname.endsWith("/write")) return json(res, 200, await writeText(payload.path, payload.text));
			if (pathname.endsWith("/rename")) return json(res, 200, await renameEntry(payload.path, payload.name));
			if (pathname.endsWith("/mkdir")) return json(res, 200, { path: await mkdirAt(payload.path, payload.name) });
			if (pathname.endsWith("/newfile")) return json(res, 200, { path: await createFileAt(payload.path, payload.name) });
		}
		json(res, 404, { code: "not-found", message: "unknown explorer endpoint" });
	} catch (error) {
		if (error instanceof SyntaxError) return json(res, 400, { code: "bad-json", message: errorText(error) });
		if (error instanceof ExplorerError) return json(res, 400, { code: error.code, message: error.message });
		json(res, 500, { code: "internal", message: errorText(error) });
	}
}

async function apply(ctx) {
	ctx.effect(() => ctx.webServer.register({
		kind: "prefix",
		path: "/workspace-files-api",
		handler: handle
	}), "workspace-explorer: api routes");
}

export { apply, inject, name };
