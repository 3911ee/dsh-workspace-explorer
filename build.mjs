/**
 * Zero-dependency build for dsh-workspace-explorer:
 *  1. `node --check` every src file (syntax gate),
 *  2. copies src/*.js to lib/ (sources are authored in their final form).
 * Run: npm run build
 */
import { readdirSync, copyFileSync, mkdirSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, "src");
const lib = join(root, "lib");

if (!existsSync(src)) {
	console.error("src/ not found");
	process.exit(1);
}
mkdirSync(lib, { recursive: true });

let failed = false;
for (const file of readdirSync(src).filter((name) => name.endsWith(".js"))) {
	const source = join(src, file);
	const check = spawnSync(process.execPath, ["--check", source], { stdio: "inherit" });
	if (check.status !== 0) {
		failed = true;
		console.error(`syntax check failed: ${source}`);
		continue;
	}
	copyFileSync(source, join(lib, file));
	console.log(`built: lib/${file}`);
}
if (failed) process.exit(1);
console.log("dsh-workspace-explorer build OK");
