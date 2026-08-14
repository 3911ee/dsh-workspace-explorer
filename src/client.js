window.__ModuleLoader__.load({
	id: "dsh-workspace-explorer",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");

		/** Tiny clsx substitute (string/boolean args only). */
		function clsx(...args) {
			return args.filter((value) => typeof value === "string" && value !== "").join(" ");
		}

		// ---- styles -----------------------------------------------------
		const cssText = ".we_footerButton{cursor:pointer;width:28px;height:28px;color:var(--dsw-alias-label-secondary);background:0 0;border:none;border-radius:50%;flex:none;justify-content:center;align-items:center;padding:0;display:inline-flex}.we_footerButton:hover{background:var(--dsw-alias-interactive-bg-hover)}.we_panelDialog{width:auto;max-width:96vw;overflow:visible}.we_panel{box-sizing:border-box;display:flex;gap:12px;width:min(1080px,90vw);height:64vh;min-width:560px;min-height:360px;resize:both;overflow:hidden}.we_panelTree{box-sizing:border-box;width:300px;min-width:200px;flex:none;overflow:auto;padding-right:8px;border-right:1px solid var(--dsw-alias-interactive-bg-hover)}.we_panelEditor{box-sizing:border-box;flex:1;min-width:0;display:flex;flex-direction:column}.we_panelEmpty{color:var(--dsw-alias-label-tertiary);font-size:13px;flex:1;justify-content:center;align-items:center;display:flex}.we_rootHeader{box-sizing:border-box;cursor:pointer;width:100%;height:28px;color:var(--dsw-alias-label-secondary);background:0 0;border:none;border-radius:8px;align-items:center;gap:6px;padding:0 8px;display:flex;font-size:13px;text-align:left}.we_rootHeader:hover{background:var(--dsw-alias-interactive-bg-hover)}.we_rootName{text-overflow:ellipsis;white-space:nowrap;min-width:0;flex:1;overflow:hidden}.we_filesHeaderRow{align-items:center;gap:2px;display:flex}.we_filesToggle{width:auto;flex:1;min-width:0}.we_filesHeaderAction{cursor:pointer;width:22px;height:22px;color:var(--dsw-alias-label-tertiary);background:0 0;border:none;border-radius:6px;flex:none;justify-content:center;align-items:center;padding:0;display:inline-flex}.we_filesHeaderAction:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.we_filesChevron{color:var(--dsw-alias-label-tertiary);flex:none;transition:transform .15s var(--ds-ease-in-out)}.we_filesChevronOpen{transform:rotate(90deg)}.we_filesList{box-sizing:border-box;border-left:1px solid var(--dsw-alias-interactive-bg-hover);margin:2px 0 4px 16px;padding-left:6px}.we_fileRow,.we_dirRow{cursor:pointer;box-sizing:border-box;width:100%;height:24px;color:var(--dsw-alias-label-secondary);background:0 0;border:none;border-radius:6px;align-items:center;gap:6px;padding:0 6px;display:flex;font-size:12px;text-align:left;overflow:hidden}.we_fileRow:hover,.we_dirRow:hover{background:var(--dsw-alias-interactive-bg-hover)}.we_fileRowActive{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary);font-weight:600}.we_fileRow span,.we_dirRow span{text-overflow:ellipsis;white-space:nowrap;min-width:0;flex:1;overflow:hidden}.we_fileSize{color:var(--dsw-alias-label-tertiary);font-size:11px;flex:none}.we_filesEmpty,.we_filesLoading{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px;padding:2px 6px}.we_filesError{color:var(--dsw-alias-state-error-primary);font-size:12px;line-height:18px;padding:2px 6px}.we_createRow{align-items:center;gap:6px;margin:0 0 4px 14px;padding:0 2px 0 8px;display:flex}.we_inlineInput{box-sizing:border-box;min-width:0;height:22px;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-interactive-bg-hover);border:1px solid var(--dsw-alias-interactive-bg-hover);border-radius:6px;flex:1;padding:0 6px;font-size:12px;line-height:20px;outline:0}.we_inlineInput:focus{border-color:var(--dsw-alias-label-tertiary)}.we_rowWrap{align-items:center;gap:2px;display:flex}.we_rowWrap .we_fileRow,.we_rowWrap .we_dirRow{width:auto;flex:1;min-width:0}.we_rowWrap:hover .we_fileRow,.we_rowWrap:hover .we_dirRow{background:var(--dsw-alias-interactive-bg-hover)}.we_rowAction{cursor:pointer;width:18px;height:18px;color:var(--dsw-alias-label-tertiary);background:0 0;border:none;border-radius:4px;flex:none;justify-content:center;align-items:center;padding:0;display:inline-flex;opacity:0}.we_rowWrap:hover .we_rowAction{opacity:1}.we_rowAction:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.we_fileGlyph{width:14px;height:14px;flex:none;display:inline-flex}.we_editorResize{box-sizing:border-box;flex:1;min-width:0;min-height:200px;flex-direction:column;gap:8px;display:flex;resize:both;overflow:hidden}.we_editorPath{text-overflow:ellipsis;white-space:nowrap;color:var(--dsw-alias-label-tertiary);margin-bottom:0;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:11px;line-height:16px;overflow:hidden}.we_editorScroll{box-sizing:border-box;flex:1;min-height:0;max-height:none;background:var(--dsw-alias-interactive-bg-hover);border-radius:8px;display:flex;overflow:hidden}.we_editorGutter{position:static;box-sizing:border-box;min-width:42px;color:var(--dsw-alias-label-tertiary);background:var(--dsw-alias-interactive-bg-hover);flex:none;overflow:hidden;padding:12px 8px 12px 14px;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:12px;line-height:1.6;text-align:right;white-space:pre;user-select:none}.we_editorTextarea{box-sizing:border-box;min-width:0;height:100%;color:var(--dsw-alias-label-primary);background:0 0;border:none;flex:1;padding:12px 16px;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:12px;line-height:1.6;white-space:pre;tab-size:4;resize:none;outline:0;overflow:auto}.we_editorOverlay{box-sizing:border-box;position:relative;min-width:0;min-height:0;flex:1;display:flex}.we_editorBackdrop{box-sizing:border-box;position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;pointer-events:none;margin:0;padding:12px 16px;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:12px;line-height:1.6;white-space:pre;tab-size:4;color:var(--dsw-alias-label-primary);z-index:0}.we_editorBackdrop .hl{white-space:pre;min-height:1.6em}.we_editorTextareaOn{position:relative;z-index:1;color:transparent;background:0 0;caret-color:var(--dsw-alias-label-primary)}.we_editorTextareaOn::selection{background:rgba(86,156,214,.35)}.we_editorStatus{color:var(--dsw-alias-label-tertiary);font-size:11px;line-height:16px}";
		const styleTagId = "dsh-workspace-explorer/styles";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(styleTagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-workspace-explorer";
			tag.dataset.pluginCss = styleTagId;
			tag.textContent = cssText;
			document.head.appendChild(tag);
		}
		const css = {
			"footerButton": "we_footerButton",
			"panelDialog": "we_panelDialog",
			"panel": "we_panel",
			"panelTree": "we_panelTree",
			"panelEditor": "we_panelEditor",
			"panelEmpty": "we_panelEmpty",
			"rootHeader": "we_rootHeader",
			"rootName": "we_rootName",
			"filesHeaderRow": "we_filesHeaderRow",
			"filesToggle": "we_filesToggle",
			"filesHeaderAction": "we_filesHeaderAction",
			"filesChevron": "we_filesChevron",
			"filesChevronOpen": "we_filesChevronOpen",
			"filesList": "we_filesList",
			"fileRow": "we_fileRow",
			"fileRowActive": "we_fileRowActive",
			"dirRow": "we_dirRow",
			"rowWrap": "we_rowWrap",
			"rowAction": "we_rowAction",
			"fileSize": "we_fileSize",
			"fileGlyph": "we_fileGlyph",
			"filesEmpty": "we_filesEmpty",
			"filesError": "we_filesError",
			"filesLoading": "we_filesLoading",
			"createRow": "we_createRow",
			"inlineInput": "we_inlineInput",
			"editorResize": "we_editorResize",
			"editorPath": "we_editorPath",
			"editorScroll": "we_editorScroll",
			"editorGutter": "we_editorGutter",
			"editorTextarea": "we_editorTextarea",
			"editorTextareaOn": "we_editorTextareaOn",
			"editorOverlay": "we_editorOverlay",
			"editorBackdrop": "we_editorBackdrop",
			"editorStatus": "we_editorStatus"
		};

		// ---- dictionaries ---------------------------------------------
		const NS = "workspace-explorer";
		const zh = {
			"action.title": "工作区文件",
			"panel.title": "工作区文件",
			"panel.empty": "在左侧选择文件进行查看或编辑",
			"files.newFile": "新建文件",
			"files.newFolder": "新建文件夹",
			"files.fileName": "文件名",
			"files.folderName": "文件夹名称",
			"files.rename.aria": "重命名 {name}",
			"files.loading": "正在加载文件…",
			"files.error": "无法读取目录",
			"files.empty": "此目录为空",
			"files.truncated": "文件过多，仅显示开头部分",
			"files.preview.title": "文件预览",
			"files.save": "保存",
			"files.saving": "正在保存…",
			"files.dirty": "● 未保存",
			"files.tooLargeToEdit": "文件过大，窗口内仅可预览",
			"files.openExternal": "用系统应用打开",
			"close": "关闭"
		};
		const en = {
			"action.title": "Workspace files",
			"panel.title": "Workspace files",
			"panel.empty": "Pick a file on the left to view or edit",
			"files.newFile": "New file",
			"files.newFolder": "New folder",
			"files.fileName": "File name",
			"files.folderName": "Folder name",
			"files.rename.aria": "Rename {name}",
			"files.loading": "Loading files…",
			"files.error": "Cannot read directory",
			"files.empty": "This directory is empty",
			"files.truncated": "Too many entries; only the beginning is shown",
			"files.preview.title": "File preview",
			"files.save": "Save",
			"files.saving": "Saving…",
			"files.dirty": "● Unsaved",
			"files.tooLargeToEdit": "Large file: preview only",
			"files.openExternal": "Open with system app",
			"close": "Close"
		};

		// ---- host API --------------------------------------------------
		async function apiCall(path, init) {
			const response = await fetch(path, init);
			let data = null;
			try {
				data = await response.json();
			} catch {
				data = null;
			}
			if (!response.ok) throw new Error(data !== null && typeof data.message === "string" ? data.message : `HTTP ${response.status}`);
			return data;
		}
		function apiList(path, signal, options) {
			const query = new URLSearchParams();
			if (path !== void 0) query.set("path", path);
			query.set("includeFiles", options?.includeFiles === true ? "1" : "0");
			return apiCall(`/workspace-files-api/list?${query.toString()}`, { signal });
		}
		function apiRead(path, options) {
			const query = new URLSearchParams({ path });
			if (options?.maxBytes !== void 0) query.set("maxBytes", String(options.maxBytes));
			return apiCall(`/workspace-files-api/read?${query.toString()}`);
		}
		function apiPost(path, payload) {
			return apiCall(path, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(payload)
			});
		}
		const apiWrite = (path, text) => apiPost("/workspace-files-api/write", { path, text });
		const apiRename = (path, name) => apiPost("/workspace-files-api/rename", { path, name });
		const apiMkdir = (path, name) => apiPost("/workspace-files-api/mkdir", { path, name });
		const apiNewFile = (path, name) => apiPost("/workspace-files-api/newfile", { path, name });

		// ---- syntax highlighting (VS Code Dark+) ----------------------
		function hlSpan(color, text) {
			return `<span style="color:${color}">${text}</span>`;
		}
		function hlEscape(text) {
			return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
		}
		const HL_COMMENT = "#6A9955";
		const HL_STRING = "#CE9178";
		const HL_NUMBER = "#B5CEA8";
		const HL_KEYWORD = "#C586C0";
		const HL_KEYWORD2 = "#569CD6";
		const HL_FUNCTION = "#DCDCAA";
		const HL_TYPE = "#4EC9B0";
		const HL_PROP = "#9CDCFE";
		const HL_DECORATOR = "#4EC9B0";
		const HL_TAG = "#569CD6";
		const HL_ATTR = "#9CDCFE";
		const HL_ENTITY = "#4EC9B0";
		const HL_LANGUAGES = {
			python: { rules: [
				{ re: /#[^\n]*/g, color: HL_COMMENT },
				{ re: /"""/g, color: HL_STRING, blockClose: '"""' },
				{ re: /'''/g, color: HL_STRING, blockClose: "'''" },
				{ re: /(?:[rbfu]{0,2})(?:"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')/g, color: HL_STRING },
				{ re: /@[A-Za-z_]\w*/g, color: HL_DECORATOR },
				{ re: /\b(def|class)\s+([A-Za-z_]\w*)/g, kind: "named", kwColor: HL_KEYWORD },
				{ re: /\b(?:if|elif|else|for|while|return|import|from|as|with|try|except|finally|raise|lambda|pass|break|continue|global|nonlocal|assert|yield|await|async|del|not|and|or|in|is|None|True|False)\b/g, color: HL_KEYWORD },
				{ re: /\b(?:self|cls)\b/g, color: HL_PROP },
				{ re: /\b\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?j?\b/g, color: HL_NUMBER }
			] },
			javascript: { rules: [
				{ re: /\/\/[^\n]*/g, color: HL_COMMENT },
				{ re: /\/\*/g, color: HL_COMMENT, blockClose: "*/" },
				{ re: /`(?:[^`\\\n]|\\.)*`/g, color: HL_STRING },
				{ re: /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, color: HL_STRING },
				{ re: /\b(function|class)\s+([A-Za-z_$][\w$]*)/g, kind: "named", kwColor: HL_KEYWORD2 },
				{ re: /\b(?:const|let|var|return|if|else|for|while|do|switch|case|default|break|continue|new|extends|import|export|from|try|catch|finally|throw|typeof|instanceof|in|of|async|await|yield|delete|void|this|super|null|undefined|true|false)\b/g, color: HL_KEYWORD2 },
				{ re: /\b[A-Za-z_$][\w$]*(?=\()/g, color: HL_FUNCTION },
				{ re: /\b\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?\b/g, color: HL_NUMBER }
			] },
			json: { rules: [
				{ re: /"(?:[^"\\\n]|\\.)*"(?=\s*:)/g, color: HL_PROP },
				{ re: /"(?:[^"\\\n]|\\.)*"/g, color: HL_STRING },
				{ re: /\b(?:true|false|null)\b/g, color: HL_KEYWORD2 },
				{ re: /-?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/g, color: HL_NUMBER }
			] },
			html: { rules: [
				{ re: /<!--/g, color: HL_COMMENT, blockClose: "-->" },
				{ re: /<\/?[A-Za-z][\w:-]*(?:\s+[^<>]*?)?\/?>/g, kind: "htmltag" },
				{ re: /&[a-zA-Z#0-9]+;/g, color: HL_ENTITY }
			] },
			css: { rules: [
				{ re: /\/\*/g, color: HL_COMMENT, blockClose: "*/" },
				{ re: /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, color: HL_STRING },
				{ re: /--?[A-Za-z_][\w-]*(?=\s*:)/g, color: HL_PROP },
				{ re: /@[\w-]+/g, color: HL_KEYWORD },
				{ re: /#[0-9a-fA-F]{3,8}\b/g, color: HL_NUMBER },
				{ re: /\b\d+(?:\.\d+)?(?:px|em|rem|vh|vw|vmin|vmax|%|s|ms|deg|fr|ch|ex|pt|cm|mm)?\b/g, color: HL_NUMBER }
			] },
			markdown: { rules: [
				{ re: /^#{1,6}\s+[^\n]*/g, color: HL_KEYWORD2 },
				{ re: /^>\s?[^\n]*/g, color: HL_COMMENT },
				{ re: /`[^`\n]+`/g, color: HL_STRING },
				{ re: /\*\*[^*\n]+\*\*/g, color: HL_KEYWORD2 },
				{ re: /\[[^\]\n]*\]\([^)\n]*\)/g, color: HL_ENTITY }
			] },
			sql: { rules: [
				{ re: /--[^\n]*/g, color: HL_COMMENT },
				{ re: /\/\*/g, color: HL_COMMENT, blockClose: "*/" },
				{ re: /'(?:[^'\\\n]|\\.)*'/g, color: HL_STRING },
				{ re: /\b(?:SELECT|FROM|WHERE|JOIN|LEFT|RIGHT|INNER|OUTER|FULL|ON|AS|AND|OR|NOT|NULL|IS|IN|LIKE|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|DROP|ALTER|ORDER|BY|GROUP|HAVING|LIMIT|OFFSET|DISTINCT|COUNT|SUM|AVG|MIN|MAX|UNION|CASE|WHEN|THEN|ELSE|END|PRIMARY|KEY|FOREIGN|REFERENCES)\b/gi, color: HL_KEYWORD2 },
				{ re: /\b\d+(?:\.\d+)?\b/g, color: HL_NUMBER }
			] },
			shell: { rules: [
				{ re: /#[^\n]*/g, color: HL_COMMENT },
				{ re: /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, color: HL_STRING },
				{ re: /\$\{[^}\n]*\}|\$[A-Za-z_][\w]*/g, color: HL_PROP },
				{ re: /\b(?:if|then|else|elif|fi|for|while|do|done|case|esac|in|function|return|exit|echo|local|export|source|cd)\b/g, color: HL_KEYWORD2 },
				{ re: /\b\d+(?:\.\d+)?\b/g, color: HL_NUMBER }
			] },
			yaml: { rules: [
				{ re: /#[^\n]*/g, color: HL_COMMENT },
				{ re: /^\s*[A-Za-z_][\w.-]*(?=\s*:)/g, color: HL_PROP },
				{ re: /^\s*\[[^\]]*\]\s*$/g, color: HL_KEYWORD2 },
				{ re: /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, color: HL_STRING },
				{ re: /\b(?:true|false|null|yes|no|on|off)\b/g, color: HL_KEYWORD2 },
				{ re: /-?\b\d+(?:\.\d+)?\b/g, color: HL_NUMBER }
			] }
		};
		const HL_LANG_BY_EXT = {
			py: "python",
			js: "javascript",
			mjs: "javascript",
			cjs: "javascript",
			jsx: "javascript",
			ts: "javascript",
			tsx: "javascript",
			json: "json",
			html: "html",
			htm: "html",
			xml: "html",
			css: "css",
			scss: "css",
			less: "css",
			md: "markdown",
			markdown: "markdown",
			sql: "sql",
			sh: "shell",
			bash: "shell",
			zsh: "shell",
			yml: "yaml",
			yaml: "yaml",
			toml: "yaml",
			ini: "yaml"
		};
		function hlLanguageOf(name) {
			const dot = name.lastIndexOf(".");
			if (dot <= 0) return null;
			return HL_LANG_BY_EXT[name.slice(dot + 1).toLowerCase()] ?? null;
		}
		function hlHtmlTag(text) {
			let out = "";
			let pos = 0;
			const re = /(<\/?)([A-Za-z][\w:-]*)|([\w:-]+)(?=\s*=)|("[^"]*"|'[^']*')/g;
			let m;
			while ((m = re.exec(text)) !== null) {
				if (m.index > pos) out += hlEscape(text.slice(pos, m.index));
				if (m[1] !== void 0) out += hlEscape(m[1]) + hlSpan(HL_TAG, hlEscape(m[2]));
				else if (m[3] !== void 0) out += hlSpan(HL_ATTR, hlEscape(m[3]));
				else out += hlSpan(HL_STRING, hlEscape(m[4]));
				pos = m.index + m[0].length;
			}
			out += hlEscape(text.slice(pos));
			return out;
		}
		function hlRender(rule, m) {
			if (rule.kind === "named") {
				const nameColor = m[1] === "class" ? HL_TYPE : HL_FUNCTION;
				return hlSpan(rule.kwColor, hlEscape(m[1])) + hlEscape(m[0].slice(m[1].length, m[0].length - m[2].length)) + hlSpan(nameColor, hlEscape(m[2]));
			}
			if (rule.kind === "htmltag") return hlHtmlTag(m[0]);
			return hlSpan(rule.color, hlEscape(m[0]));
		}
		function hlLine(line, lang, state) {
			let out = "";
			let pos = 0;
			let block = state.block;
			if (block !== null) {
				const at = line.indexOf(block.close, pos);
				if (at === -1) return [out + hlSpan(block.color, hlEscape(line)), state];
				out += hlSpan(block.color, hlEscape(line.slice(0, at + block.close.length)));
				pos = at + block.close.length;
				block = null;
			}
			while (pos < line.length) {
				let best = null;
				for (const rule of lang.rules) {
					rule.re.lastIndex = pos;
					const m = rule.re.exec(line);
					if (m === null || m.index < pos) continue;
					if (best === null || m.index < best.m.index || m.index === best.m.index && m[0].length > best.m[0].length) best = { rule, m };
				}
				if (best === null) break;
				if (best.m.index > pos) out += hlEscape(line.slice(pos, best.m.index));
				if (best.rule.blockClose !== void 0) {
					out += hlSpan(best.rule.color, hlEscape(best.m[0]));
					pos = best.m.index + best.m[0].length;
					const at = line.indexOf(best.rule.blockClose, pos);
					if (at === -1) {
						out += hlSpan(best.rule.color, hlEscape(line.slice(pos)));
						return [out, { block: { close: best.rule.blockClose, color: best.rule.color } }];
					}
					out += hlSpan(best.rule.color, hlEscape(line.slice(pos, at + best.rule.blockClose.length)));
					pos = at + best.rule.blockClose.length;
					continue;
				}
				out += hlRender(best.rule, best.m);
				pos = best.m.index + best.m[0].length;
				if (best.m[0].length === 0) pos++;
			}
			out += hlEscape(line.slice(pos));
			return [out, { block }];
		}
		function highlightCode(code, lang) {
			if (lang === null || lang === void 0) return null;
			const lines = code.split("\n");
			const parts = [];
			let state = { block: null };
			for (const line of lines) {
				const [html, next] = hlLine(line, lang, state);
				state = next;
				parts.push(`<div class="hl">${html}</div>`);
			}
			return parts.join("");
		}
		const HL_MAX_BYTES = 200 * 1024;

		// ---- file glyphs ----------------------------------------------
		const FILE_GLYPHS = {
			py: ["code", "#3572A5"],
			js: ["code", "#F1E05A"],
			mjs: ["code", "#F1E05A"],
			cjs: ["code", "#F1E05A"],
			jsx: ["code", "#61DAFB"],
			ts: ["code", "#3178C6"],
			tsx: ["code", "#3178C6"],
			vue: ["code", "#42B883"],
			go: ["code", "#00ADD8"],
			rs: ["code", "#DEA584"],
			c: ["code", "#555"],
			h: ["code", "#555"],
			cpp: ["code", "#F34B7D"],
			cc: ["code", "#F34B7D"],
			cxx: ["code", "#F34B7D"],
			java: ["code", "#B07219"],
			php: ["code", "#4F5D95"],
			rb: ["code", "#701516"],
			swift: ["code", "#F05138"],
			kt: ["code", "#A97BFF"],
			html: ["code", "#E34C26"],
			htm: ["code", "#E34C26"],
			xml: ["code", "#F1662A"],
			json: ["braces", "#CBCB41"],
			yml: ["gear", "#CB171E"],
			yaml: ["gear", "#CB171E"],
			toml: ["gear", "#9C4221"],
			ini: ["gear", "#6D8086"],
			env: ["gear", "#F0DB4F"],
			md: ["doc", "#519ABA"],
			markdown: ["doc", "#519ABA"],
			txt: ["doc", "#6D8086"],
			csv: ["doc", "#237346"],
			pdf: ["doc", "#D93025"],
			css: ["hash", "#563D7C"],
			scss: ["hash", "#CD6799"],
			less: ["hash", "#1D365D"],
			sh: ["terminal", "#89E051"],
			bash: ["terminal", "#89E051"],
			zsh: ["terminal", "#89E051"],
			ps1: ["terminal", "#012456"],
			bat: ["terminal", "#C1C12B"],
			cmd: ["terminal", "#C1C12B"],
			sql: ["db", "#E38C00"],
			png: ["image", "#A074C4"],
			jpg: ["image", "#A074C4"],
			jpeg: ["image", "#A074C4"],
			gif: ["image", "#A074C4"],
			webp: ["image", "#A074C4"],
			bmp: ["image", "#A074C4"],
			ico: ["image", "#A074C4"],
			svg: ["image", "#A074C4"],
			zip: ["archive", "#8B8B00"],
			"7z": ["archive", "#8B8B00"],
			rar: ["archive", "#8B8B00"],
			tar: ["archive", "#8B8B00"],
			gz: ["archive", "#8B8B00"],
			exe: ["binary", "#7F7F7F"],
			dll: ["binary", "#7F7F7F"],
			lock: ["lock", "#6D8086"]
		};
		const FILE_GLYPH_PATHS = {
			code: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("polyline", { points: "16 18 22 12 16 6" }), react_jsx_runtime.jsx("polyline", { points: "8 6 2 12 8 18" })] })],
			braces: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("path", { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" }), react_jsx_runtime.jsx("path", { d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" })] })],
			doc: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }), react_jsx_runtime.jsx("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }), react_jsx_runtime.jsx("path", { d: "M10 9H8" }), react_jsx_runtime.jsx("path", { d: "M16 13H8" }), react_jsx_runtime.jsx("path", { d: "M16 17H8" })] })],
			gear: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }), react_jsx_runtime.jsx("circle", { cx: 12, cy: 12, r: 3 })] })],
			hash: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("line", { x1: 4, y1: 9, x2: 20, y2: 9 }), react_jsx_runtime.jsx("line", { x1: 4, y1: 15, x2: 20, y2: 15 }), react_jsx_runtime.jsx("line", { x1: 10, y1: 3, x2: 8, y2: 21 }), react_jsx_runtime.jsx("line", { x1: 16, y1: 3, x2: 14, y2: 21 })] })],
			terminal: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("polyline", { points: "4 17 10 11 4 5" }), react_jsx_runtime.jsx("line", { x1: 12, y1: 19, x2: 20, y2: 19 })] })],
			db: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("ellipse", { cx: 12, cy: 5, rx: 9, ry: 3 }), react_jsx_runtime.jsx("path", { d: "M3 5V19A9 3 0 0 0 21 19V5" }), react_jsx_runtime.jsx("path", { d: "M3 12A9 3 0 0 0 21 12" })] })],
			image: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("rect", { x: 3, y: 3, width: 18, height: 18, rx: 2 }), react_jsx_runtime.jsx("circle", { cx: 9, cy: 9, r: 2 }), react_jsx_runtime.jsx("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })] })],
			archive: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("path", { d: "M10 12v-1" }), react_jsx_runtime.jsx("path", { d: "M10 18v-2" }), react_jsx_runtime.jsx("path", { d: "M10 7V6" }), react_jsx_runtime.jsx("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }), react_jsx_runtime.jsx("path", { d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" }), react_jsx_runtime.jsx("circle", { cx: 10, cy: 20, r: 2 })] })],
			binary: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("rect", { x: 14, y: 14, width: 4, height: 6, rx: 1 }), react_jsx_runtime.jsx("rect", { x: 6, y: 4, width: 4, height: 6, rx: 1 }), react_jsx_runtime.jsx("path", { d: "M6 20h4" }), react_jsx_runtime.jsx("path", { d: "M14 10h4" }), react_jsx_runtime.jsx("path", { d: "M6 14h2v6" }), react_jsx_runtime.jsx("path", { d: "M14 4h2v6" })] })],
			lock: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("rect", { x: 3, y: 11, width: 18, height: 11, rx: 2 }), react_jsx_runtime.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })] })],
			branch: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("line", { x1: 6, y1: 3, x2: 6, y2: 15 }), react_jsx_runtime.jsx("circle", { cx: 18, cy: 6, r: 3 }), react_jsx_runtime.jsx("circle", { cx: 6, cy: 18, r: 3 }), react_jsx_runtime.jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })] })]
		};
		function fileGlyph(name) {
			const lower = name.toLowerCase();
			if (lower === "dockerfile" || lower === "makefile") return { kind: "gear", color: "#384D54" };
			if (lower === ".gitignore" || lower === ".gitattributes") return { kind: "branch", color: "#F05133" };
			const dot = lower.lastIndexOf(".");
			if (dot > 0) {
				const glyph = FILE_GLYPHS[lower.slice(dot + 1)];
				if (glyph !== void 0) return { kind: glyph[0], color: glyph[1] };
			}
			return { kind: "doc", color: "#6D8086" };
		}
		function FileGlyph({ name }) {
			const glyph = fileGlyph(name);
			return react_jsx_runtime.jsx("svg", {
				className: css.fileGlyph,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: glyph.color,
				strokeWidth: 1.6,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": "true",
				children: FILE_GLYPH_PATHS[glyph.kind] ?? FILE_GLYPH_PATHS.doc
			});
		}

		// ---- shared helpers -------------------------------------------
		function formatBytes(size) {
			if (size < 1024) return `${size} B`;
			if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
			return `${(size / (1024 * 1024)).toFixed(1)} MB`;
		}
		function errorMessage(reason) {
			return reason instanceof Error ? reason.message : String(reason);
		}

		// ---- editor ----------------------------------------------------
		function FilePreviewBody({ preview, t, draft, dirty, saving, error, savedSize, editable, onChange, onSave }) {
			const gutterRef = react.useRef(null);
			const backdropRef = react.useRef(null);
			const [hl, setHl] = react.useState(null);
			const [composing, setComposing] = react.useState(false);
			const lang = hlLanguageOf(preview.name);
			const hlEnabled = lang !== null && draft.length <= HL_MAX_BYTES;
			react.useEffect(() => {
				if (!hlEnabled) {
					setHl(null);
					return;
				}
				const timer = window.setTimeout(() => {
					setHl(highlightCode(draft, HL_LANGUAGES[lang]));
				}, 80);
				return () => {
					window.clearTimeout(timer);
				};
			}, [draft, lang, hlEnabled]);
			const numbers = react.useMemo(() => draft === "" ? "1" : draft.split("\n").map((_, index) => String(index + 1)).join("\n"), [draft]);
			const highlighted = hl !== null && !composing;
			return react_jsx_runtime.jsxs("div", {
				className: css.editorResize,
				children: [
					react_jsx_runtime.jsx("div", {
						className: css.editorPath,
						title: preview.path,
						children: preview.path
					}),
					react_jsx_runtime.jsxs("div", {
						className: css.editorScroll,
						children: [
							react_jsx_runtime.jsx("div", {
								ref: gutterRef,
								className: css.editorGutter,
								"aria-hidden": "true",
								children: numbers
							}),
							react_jsx_runtime.jsxs("div", {
								className: css.editorOverlay,
								children: [
									highlighted && react_jsx_runtime.jsx("pre", {
										ref: backdropRef,
										className: css.editorBackdrop,
										"aria-hidden": "true",
										dangerouslySetInnerHTML: { __html: hl }
									}),
									react_jsx_runtime.jsx("textarea", {
										className: clsx(css.editorTextarea, highlighted && css.editorTextareaOn),
										value: draft,
										readOnly: !editable,
										spellCheck: false,
										wrap: "off",
										"aria-label": preview.path,
										onChange: (event) => {
											onChange(event.target.value);
										},
										onScroll: (event) => {
											if (gutterRef.current !== null) gutterRef.current.scrollTop = event.target.scrollTop;
											if (backdropRef.current !== null) {
												backdropRef.current.scrollTop = event.target.scrollTop;
												backdropRef.current.scrollLeft = event.target.scrollLeft;
											}
										},
										onCompositionStart: () => {
											setComposing(true);
										},
										onCompositionEnd: () => {
											setComposing(false);
										},
										onKeyDown: (event) => {
											if ((event.ctrlKey || event.metaKey) && (event.key === "s" || event.key === "S")) {
												event.preventDefault();
												onSave();
											}
										}
									})
								]
							})
						]
					}),
					error !== null && react_jsx_runtime.jsx("div", {
						className: css.filesError,
						role: "alert",
						children: error
					}),
					react_jsx_runtime.jsx("div", {
						className: css.editorStatus,
						children: `${formatBytes(savedSize ?? preview.size)} · UTF-8${dirty ? ` · ${t("files.dirty")}` : ""}${preview.truncated === true ? ` · ${t("files.tooLargeToEdit")}` : ""}`
					})
				]
			});
		}

		// ---- directory tree -------------------------------------------
		function FileDirectory({ path, t, listDirectory, openPreview, renameFile, activePath, refreshToken }) {
			const [state, setState] = react.useState({ status: "loading", entries: [], truncated: false, message: null });
			const [openDirs, setOpenDirs] = react.useState({});
			const [renaming, setRenaming] = react.useState(null);
			const renameCancelRef = react.useRef(false);
			const load = react.useCallback((signal) => {
				setState({ status: "loading", entries: [], truncated: false, message: null });
				return listDirectory(path, signal, { includeFiles: true }).then((listing) => {
					if (signal !== void 0 && signal.aborted) return;
					setState({ status: "ready", entries: listing.entries ?? [], truncated: listing.truncated === true, message: null });
				}, (reason) => {
					if (signal !== void 0 && signal.aborted) return;
					setState({ status: "error", entries: [], truncated: false, message: errorMessage(reason) });
				});
			}, [path, listDirectory]);
			react.useEffect(() => {
				const controller = new AbortController();
				load(controller.signal);
				return () => {
					controller.abort();
				};
			}, [load, refreshToken]);
			const startRename = (entry) => {
				renameCancelRef.current = false;
				setRenaming({ path: entry.path, original: entry.name, draft: entry.name, busy: false, error: null });
			};
			const commitRename = () => {
				if (renaming === null || renaming.busy) return;
				const name = renaming.draft.trim();
				if (name === "" || name === renaming.original) {
					setRenaming(null);
					return;
				}
				setRenaming({ ...renaming, busy: true, error: null });
				renameFile(renaming.path, name).then(() => {
					setRenaming(null);
					load(void 0);
				}, (reason) => {
					setRenaming((current) => current === null ? current : { ...current, busy: false, error: errorMessage(reason) });
				});
			};
			const renameInput = (entry) => react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, {
				children: [
					react_jsx_runtime.jsxs("div", {
						className: css.rowWrap,
						children: [
							entry.isDirectory === false ? react_jsx_runtime.jsx(FileGlyph, { name: entry.name }) : react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.IconFolderClose16, { size: 14 }),
							react_jsx_runtime.jsx("input", {
								className: css.inlineInput,
								value: renaming.draft,
								autoFocus: true,
								disabled: renaming.busy,
								"aria-label": t("files.rename.aria", { name: entry.name }),
								onFocus: (event) => {
									const dot = event.target.value.lastIndexOf(".");
									if (dot > 0) event.target.setSelectionRange(0, dot);
									else event.target.select();
								},
								onChange: (event) => {
									setRenaming((current) => current === null ? current : { ...current, draft: event.target.value, error: null });
								},
								onKeyDown: (event) => {
									if (event.key === "Enter" && !event.nativeEvent.isComposing) {
										event.preventDefault();
										commitRename();
									} else if (event.key === "Escape") {
										event.preventDefault();
										renameCancelRef.current = true;
										setRenaming(null);
									}
								},
								onBlur: () => {
									if (renameCancelRef.current) {
										renameCancelRef.current = false;
										return;
									}
									commitRename();
								}
							})
						]
					}),
					renaming.error !== null && react_jsx_runtime.jsx("div", {
						className: css.filesError,
						role: "alert",
						children: renaming.error
					})
				]
			});
			const dirs = state.entries.filter((entry) => entry.isDirectory === true || entry.isDirectory === void 0).sort((left, right) => left.name.localeCompare(right.name));
			const files = state.entries.filter((entry) => entry.isDirectory === false).sort((left, right) => left.name.localeCompare(right.name));
			return react_jsx_runtime.jsxs("div", {
				className: css.filesList,
				role: "group",
				children: [
					state.status === "loading" && react_jsx_runtime.jsx("div", {
						className: css.filesLoading,
						role: "status",
						children: t("files.loading")
					}),
					state.status === "error" && react_jsx_runtime.jsx("div", {
						className: css.filesError,
						role: "alert",
						children: t("files.error")
					}),
					state.status === "ready" && state.entries.length === 0 && react_jsx_runtime.jsx("div", {
						className: css.filesEmpty,
						children: t("files.empty")
					}),
					dirs.map((entry) => {
						const open = openDirs[entry.path] === true;
						if (renaming !== null && renaming.path === entry.path) return react_jsx_runtime.jsx(react_jsx_runtime.Fragment, { children: renameInput(entry) }, entry.path);
						return react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, {
							children: [
								react_jsx_runtime.jsxs("div", {
									className: css.rowWrap,
									children: [
										react_jsx_runtime.jsxs("button", {
											type: "button",
											className: css.dirRow,
											"aria-expanded": open,
											onClick: () => {
												setOpenDirs((current) => ({ ...current, [entry.path]: !open }));
											},
											children: [
												react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.IconTriangleRightFill14, {
													size: 10,
													className: clsx(css.filesChevron, open && css.filesChevronOpen)
												}),
												react_jsx_runtime.jsx(open ? _deepseek_ai_dsh_client_ui_primitives.IconFolderOpen16 : _deepseek_ai_dsh_client_ui_primitives.IconFolderClose16, { size: 14 }),
												react_jsx_runtime.jsx("span", { children: entry.name })
											]
										}),
										react_jsx_runtime.jsx("button", {
											type: "button",
											className: css.rowAction,
											"aria-label": t("files.rename.aria", { name: entry.name }),
											onClick: (event) => {
												event.stopPropagation();
												startRename(entry);
											},
											children: react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.IconEditOutline16, { size: 12 })
										})
									]
								}),
								open && react_jsx_runtime.jsx(FileDirectory, {
									path: entry.path,
									t,
									listDirectory,
									openPreview,
									renameFile,
									activePath,
									refreshToken
								}, entry.path)
							]
						}, entry.path);
					}),
					files.map((entry) => {
						if (renaming !== null && renaming.path === entry.path) return react_jsx_runtime.jsx(react_jsx_runtime.Fragment, { children: renameInput(entry) }, entry.path);
						return react_jsx_runtime.jsxs("div", {
							className: css.rowWrap,
							children: [
								react_jsx_runtime.jsxs("button", {
									type: "button",
									className: clsx(css.fileRow, activePath === entry.path && css.fileRowActive),
									onClick: () => {
										openPreview(entry.name, entry.path);
									},
									children: [
										react_jsx_runtime.jsx(FileGlyph, { name: entry.name }),
										react_jsx_runtime.jsx("span", { children: entry.name }),
										typeof entry.size === "number" && react_jsx_runtime.jsx("span", {
											className: css.fileSize,
											children: formatBytes(entry.size)
										})
									]
								}),
								react_jsx_runtime.jsx("button", {
									type: "button",
									className: css.rowAction,
									"aria-label": t("files.rename.aria", { name: entry.name }),
									onClick: (event) => {
										event.stopPropagation();
										startRename(entry);
									},
									children: react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.IconEditOutline16, { size: 12 })
								})
							]
						}, entry.path);
					}),
					state.truncated && react_jsx_runtime.jsx("div", {
						className: css.filesEmpty,
						children: t("files.truncated")
					})
				]
			});
		}

		// ---- one workspace root ---------------------------------------
		function WorkspaceRoot({ workspace, t, listDirectory, renameFile, createFile, createDirectory, openPreview, activePath, refreshToken }) {
			const [expanded, setExpanded] = react.useState(false);
			const [create, setCreate] = react.useState(null);
			const [rootRefresh, setRootRefresh] = react.useState(0);
			const createCancelRef = react.useRef(false);
			const startCreate = (kind) => {
				setExpanded(true);
				createCancelRef.current = false;
				setCreate({ kind, draft: "", busy: false, error: null });
			};
			const commitCreate = () => {
				if (create === null || create.busy) return;
				const name = create.draft.trim();
				if (name === "") {
					setCreate(null);
					return;
				}
				setCreate({ ...create, busy: true, error: null });
				const operation = create.kind === "dir" ? createDirectory : createFile;
				operation(workspace.path, name).then(() => {
					setCreate(null);
					setRootRefresh((value) => value + 1);
				}, (reason) => {
					setCreate((current) => current === null ? current : { ...current, busy: false, error: errorMessage(reason) });
				});
			};
			return react_jsx_runtime.jsxs("div", {
				children: [
					react_jsx_runtime.jsxs("div", {
						className: css.filesHeaderRow,
						children: [
							react_jsx_runtime.jsxs("button", {
								type: "button",
								className: css.rootHeader,
								title: workspace.path,
								"aria-expanded": expanded,
								onClick: () => {
									setExpanded((value) => !value);
								},
								children: [
									react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.IconTriangleRightFill14, {
										size: 12,
										className: clsx(css.filesChevron, expanded && css.filesChevronOpen)
									}),
									react_jsx_runtime.jsx(expanded ? _deepseek_ai_dsh_client_ui_primitives.IconFolderOpen16 : _deepseek_ai_dsh_client_ui_primitives.IconFolderClose16, { size: 14 }),
									react_jsx_runtime.jsx("span", {
										className: css.rootName,
										children: workspace.title
									})
								]
							}),
							expanded && react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
								label: t("files.newFile"),
								side: "bottom",
								delayMs: 500,
								children: react_jsx_runtime.jsx("button", {
									type: "button",
									className: css.filesHeaderAction,
									"aria-label": t("files.newFile"),
									onClick: () => {
										startCreate("file");
									},
									children: react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.IconCodeOutline16, { size: 14 })
								})
							}),
							expanded && react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
								label: t("files.newFolder"),
								side: "bottom",
								delayMs: 500,
								children: react_jsx_runtime.jsx("button", {
									type: "button",
									className: css.filesHeaderAction,
									"aria-label": t("files.newFolder"),
									onClick: () => {
										startCreate("dir");
									},
									children: react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.IconFolderClose16, { size: 14 })
								})
							})
						]
					}),
					expanded && create !== null && react_jsx_runtime.jsxs("div", {
						className: css.createRow,
						children: [
							react_jsx_runtime.jsx(create.kind === "dir" ? _deepseek_ai_dsh_client_ui_primitives.IconFolderClose16 : _deepseek_ai_dsh_client_ui_primitives.IconCodeOutline16, { size: 14 }),
							react_jsx_runtime.jsx("input", {
								className: css.inlineInput,
								value: create.draft,
								autoFocus: true,
								"aria-label": create.kind === "dir" ? t("files.newFolder") : t("files.newFile"),
								placeholder: create.kind === "dir" ? t("files.folderName") : t("files.fileName"),
								disabled: create.busy,
								onChange: (event) => {
									setCreate((current) => current === null ? current : { ...current, draft: event.target.value, error: null });
								},
								onKeyDown: (event) => {
									if (event.key === "Enter" && !event.nativeEvent.isComposing) {
										event.preventDefault();
										commitCreate();
									} else if (event.key === "Escape") {
										event.preventDefault();
										createCancelRef.current = true;
										setCreate(null);
									}
								},
								onBlur: () => {
									if (createCancelRef.current) {
										createCancelRef.current = false;
										return;
									}
									commitCreate();
								}
							}),
							create.busy && react_jsx_runtime.jsx("span", {
								className: css.filesLoading,
								children: "…"
							})
						]
					}),
					expanded && create !== null && create.error !== null && react_jsx_runtime.jsx("div", {
						className: css.filesError,
						role: "alert",
						children: create.error
					}),
					expanded && react_jsx_runtime.jsx(FileDirectory, {
						path: workspace.path,
						t,
						listDirectory,
						openPreview,
						renameFile,
						activePath,
						refreshToken: rootRefresh + refreshToken
					})
				]
			});
		}

		// ---- explorer entry (sidebar footer action) -------------------
		function ExplorerAction({ wide, t, workspacesStore, openPath }) {
			const tx = typeof t === "function" ? t : ((key) => {
				const dict = typeof navigator !== "undefined" && (navigator.language ?? "").toLowerCase().startsWith("zh") ? zh : en;
				return dict[key] ?? key;
			});
			const items = react.useSyncExternalStore(
				(listener) => workspacesStore.subscribe(listener),
				() => {
					const snapshot = workspacesStore.getSnapshot();
					return Array.isArray(snapshot?.items) ? snapshot.items : [];
				}
			);
			const [open, setOpen] = react.useState(false);
			const [preview, setPreview] = react.useState(null);
			const [edit, setEdit] = react.useState({ path: null, draft: "", dirty: false, saving: false, error: null, savedSize: null });
			const [panelRefresh, setPanelRefresh] = react.useState(0);
			const openPreview = (name, path) => {
				setPreview({ name, path, status: "loading", text: "", error: null, truncated: false, size: 0 });
				setEdit({ path, draft: "", dirty: false, saving: false, error: null, savedSize: null });
				apiRead(path).then((value) => {
					setPreview((current) => current !== null && current.path === path ? {
						...current,
						status: "ready",
						text: value.text,
						truncated: value.truncated === true,
						size: typeof value.size === "number" ? value.size : 0
					} : current);
					setEdit((current) => current.path === path ? { ...current, draft: value.text } : current);
				}, (reason) => {
					setPreview((current) => current !== null && current.path === path ? {
						...current,
						status: "error",
						error: errorMessage(reason)
					} : current);
				});
			};
			const editable = preview !== null && preview.status === "ready" && preview.truncated !== true;
			const changeEdit = (text) => {
				setEdit((current) => ({ ...current, draft: text, dirty: true, error: null }));
			};
			const saveEdit = () => {
				if (preview === null || !editable || !edit.dirty || edit.saving) return;
				setEdit((current) => ({ ...current, saving: true, error: null }));
				apiWrite(preview.path, edit.draft).then((value) => {
					setEdit((current) => ({ ...current, saving: false, dirty: false, savedSize: typeof value.size === "number" ? value.size : current.savedSize }));
					setPanelRefresh((current) => current + 1);
				}, (reason) => {
					setEdit((current) => ({ ...current, saving: false, error: errorMessage(reason) }));
				});
			};
			const closePanel = () => {
				setOpen(false);
				setPreview(null);
				setEdit({ path: null, draft: "", dirty: false, saving: false, error: null, savedSize: null });
			};
			return react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, {
				children: [
					react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
						label: tx("action.title"),
						side: wide ? "bottom" : "right",
						delayMs: 500,
						children: react_jsx_runtime.jsx("button", {
							type: "button",
							className: css.footerButton,
							"aria-label": tx("action.title"),
							onClick: () => {
								setOpen(true);
							},
							children: react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.IconBrowseOutline16, { size: wide ? 16 : 18 })
						})
					}),
					react_jsx_runtime.jsxs(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open,
						onClose: closePanel,
						closeLabel: tx("close"),
						title: tx("panel.title"),
						className: css.panelDialog,
						footer: react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, {
							children: [
								editable && react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.Button, {
									variant: "primary",
									disabled: !edit.dirty || edit.saving,
									onClick: saveEdit,
									children: edit.saving ? tx("files.saving") : tx("files.save")
								}),
								preview !== null && preview.status === "ready" && react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.Button, {
									variant: "outline",
									onClick: () => {
										openPath(preview.path).catch((reason) => {
											console.warn("path open rejected:", reason);
										});
									},
									children: tx("files.openExternal")
								}),
								react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.Button, {
									variant: "outline",
									onClick: closePanel,
									children: tx("close")
								})
							]
						}),
						children: react_jsx_runtime.jsxs("div", {
							className: css.panel,
							children: [
								react_jsx_runtime.jsx("div", {
									className: css.panelTree,
									children: items.map((workspace) => react_jsx_runtime.jsx(WorkspaceRoot, {
										workspace,
										t: tx,
										listDirectory: apiList,
										renameFile: apiRename,
										createFile: apiNewFile,
										createDirectory: apiMkdir,
										openPreview,
										activePath: preview?.path,
										refreshToken: panelRefresh
									}, workspace.workspaceId))
								}),
								react_jsx_runtime.jsx("div", {
									className: css.panelEditor,
									children: preview === null ? react_jsx_runtime.jsx("div", {
										className: css.panelEmpty,
										children: tx("panel.empty")
									}) : preview.status === "loading" ? react_jsx_runtime.jsx("div", {
										className: css.filesLoading,
										role: "status",
										children: tx("files.loading")
									}) : preview.status === "error" ? react_jsx_runtime.jsx("div", {
										className: css.filesError,
										role: "alert",
										children: preview.error ?? tx("files.error")
									}) : react_jsx_runtime.jsx(FilePreviewBody, {
										preview,
										t: tx,
										draft: edit.draft,
										dirty: edit.dirty,
										saving: edit.saving,
										error: edit.error,
										savedSize: edit.savedSize,
										editable,
										onChange: changeEdit,
										onSave: saveEdit
									})
								})
							]
						})
					})
				]
			});
		}

		// ---- plugin body ----------------------------------------------
		function apply(ctx) {
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "workspace-explorer: dictionaries");
			ctx.slots.inject("sidebar.footer.action", () => ctx.slots.register({
				name: "sidebar.footer.action",
				id: "workspace-explorer",
				locale: NS,
				inject: () => ({
					workspacesStore: ctx.workspaces.list,
					openPath: (path) => ctx.workspaces.openPath(path)
				})
			}, ExplorerAction));
		}
		const inject = ["slots", "workspaces", "locale"];

		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
