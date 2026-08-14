# dsh-workspace-explorer

为 DeepSeek Harness 打造的「工作区文件」插件，在侧边栏底部一键开启 VS Code 风格的双栏面板：左侧是项目全目录文件树，右侧是支持多标签页的代码编辑器。它不仅让你像操作本地 IDE 一样浏览、打开和编辑文件，更能让 AI Agent 实时“看见”项目结构并直接修改代码——从查看源码到批量重构，Agent 都能在面板中同步操作，实现真正的结对编程。无论是快速定位文件、预览 Markdown 或图片，还是与对话中的 @文件 引用联动，这个插件都将 AI 助手从“聊天机器人”升级为“能动手写代码的智能伙伴”，让每一次指令都落地为可执行的代码变动。

[English](#english)

---

# 一、部署简介

## 1.1 软件要求

| 项 | 要求 |
| --- | --- |
| DeepSeek Harness | 0.1.0-rc.6 及以上（实测版本 0.1.0-rc.6） |
| Profile 类型 | 必须是带 Web 界面的 profile（标准 `web` profile） |
| Node.js | DSH 自带的运行环境即可，无额外要求 |
| pnpm | 安装插件时需要（`dsh plugin` 的官方机制） |
| 操作系统 | Windows 实测通过；macOS/Linux 理论支持（代码已做跨平台路径处理，未实测） |

## 1.2 安装步骤

```bash
# 当前唯一方式：直接从 GitHub 安装（lib/ 已提交，无需构建）
dsh plugin --profile web add github:3911ee/dsh-workspace-explorer
```

> npm 方式在发布后才可用：`dsh plugin --profile web add dsh-workspace-explorer`。

一条命令完成：`dsh plugin` 会自动执行 pnpm 安装，并因插件包声明了
`dsh.bundle.patch` 自动把它加入 profile 的 bundle 层，无需手改任何配置。
```bash
手动安装方式：
# 1) 把插件源码复制进 web profile 的 node_modules

# 2) 编辑.dsh\profiles\web\package.json：
#    dependencies 里加一行
#      "dsh-workspace-explorer": "file:./node_modules/dsh-workspace-explorer"
#    dsh.profile.bundles 数组里加一项
#      "dsh-workspace-explorer"
```
## 1.3 启用与验证

1. 重启服务：在运行 `dsh web` 的终端按 `Ctrl+C`，重新执行 `dsh web`
2. 刷新浏览器
3. 验证：侧边栏**底部**出现文件夹图标按钮（悬停提示「工作区文件」）；点击后弹出双栏面板（左侧文件树、右侧编辑器）

## 1.4 升级 / 卸载

```bash
# 升级：重新 add 或 pnpm update（由 dsh plugin 转交）
dsh plugin --profile web add github:3911ee/dsh-workspace-explorer

# 卸载：从 profile 依赖中移除后重启
dsh plugin --profile web remove dsh-workspace-explorer
```

卸载后重启 `dsh web` 即完全移除（插件不修改任何 DSH 内置文件，不留残留）。

## 1.5 常见问题

- **装完没有按钮** → 未重启服务（宿主插件启动时载入）或浏览器未刷新；按 F12 查看控制台报错
- **点击文件报错** → 服务重启过但插件 API 未就绪，确认重启时控制台无启动报错
- **提示 pnpm 不存在** → 先安装 pnpm

# 二、功能介绍

## 2.1 一句话

在 DeepSeek Harness Web GUI 侧边栏底部添加「工作区文件」入口，打开一个
**VS Code 资源管理器风格** 的双栏面板：左侧浏览全部工作区目录的文件树，
右侧查看和编辑文件。

## 2.2 功能清单

### 📂 文件树

- 自动列出所有已注册的工作区目录（每个工作区一个根节点）
- 懒加载逐层展开，目录在前、按名称排序，带缩进引导线
- 每个工作区根目录提供「新建文件 / 新建文件夹」按钮（行内输入，Enter 创建 / Esc 取消）

### 🎨 文件图标

- 14px 描边 SVG 图标，按语言着色（Material 主题色系）
- 覆盖 60+ 扩展名：Python/JS/TS/JSON/HTML/CSS/Markdown/SQL/Shell/YAML/图片/压缩包/可执行文件等

### ✏️ 文件操作

- **行内重命名**：悬停出现铅笔按钮；默认选中主名（不含后缀）、可继续编辑后缀；Enter 提交 / Esc 取消 / 失焦提交；支持中文输入法
- **新建文件 / 新建文件夹**；重名时内联报错

### 📝 编辑器（VS Code 风格）

- 行号槽（与内容实时同步）+ 路径栏 + 状态栏（大小 · 编码 · 未保存标记）
- 右下角手柄自由拖拽缩放（最小 380×280）
- 「用系统应用打开」按钮调起本机默认程序

### 🌈 语法高亮（VS Code Dark+ 配色）

- 函数名黄、关键字紫/蓝、字符串橙、注释绿、数字浅绿、类型青、属性亮蓝
- 支持：Python、JavaScript/TypeScript/JSX、JSON、HTML/XML、CSS/SCSS/LESS、Markdown、SQL、Shell、YAML/TOML/INI
- 200 KB 以上自动退回纯文本；中文输入法组合期间自动切换可见文字

### 💾 窗口内编辑保存

- 直接输入修改，**Ctrl+S** 或「保存」按钮落盘；保存后自动刷新文件大小
- 大文件保护：>256 KB 读取上限的文件只读预览，防止截断内容覆盖原文件

### 🌐 界面语言

- 中英文界面，跟随 DSH 语言设置

# 三、安全声明

## 3.1 信任边界

- 本插件**完全在本地运行**，不发起任何出站网络连接，不上传任何文件内容
- 文件读写全部通过插件自建的本地 HTTP API（`/workspace-files-api/*`）完成，仅由 DSH 进程内的宿主插件提供

## 3.2 访问范围

- **暴露面 = DSH Web GUI 的绑定地址**：`dsh web` 默认仅绑定回环地址 127.0.0.1，此时插件 API 只有本机浏览器可访问，**这是推荐且默认的安全配置**
- ⚠️ 若用户自行将 `dsh web` 绑定到非回环地址（如 `0.0.0.0` 或公网），插件 API 将**无独立鉴权**地与 DSH 一起暴露 —— 这与 DSH 自身的安全模型一致，但属于使用者须自行评估的配置风险；**切勿将带本插件的 DSH 直接暴露到公网**

## 3.3 路径与操作防护

| 防护 | 实现 |
| --- | --- |
| 路径校验 | 所有操作要求**绝对路径**（Windows 要求盘符限定或完整 UNC），拒绝相对路径与空路径 |
| 名称校验 | 新建/重命名仅接受单一路径段，拒绝空名、`.`/`..` 与含 `/\` 分隔符的名称 |
| 目录列举 | 单层封顶 1000 条目，防止巨型目录拖垮服务 |
| 文件读取 | 默认 256 KiB、硬顶 8 MiB；只读文件头，不会把大文件整体载入内存 |
| 文件写入 | 8 MiB 上限；请求体 64 KiB 上限 |
| 资源释放 | 所有文件句柄 `try/finally` 关闭；无缓存、无后台任务、无内存累积 |

## 3.4 数据与隐私

- 不收集、不记录、不传输任何文件内容或操作日志（错误信息仅返回给本机调用方）
- 前端语法高亮对文件内容做 HTML 转义后渲染，文件内容无法注入脚本

## 3.5 漏洞报告

发现安全问题请通过 GitHub Issues 私密渠道（或邮件）联系维护者，建议附上：
影响版本、复现步骤、危害评估。修复后将通过新版本发布并在 Release Notes 中披露。

## 3.6 版本支持

- 安全修复仅保证最新发布版本；建议保持升级
- 插件依赖 DSH 官方公开接口（slot / service / webServer），DSH 大版本升级后如接口变化，本插件需相应跟进

# 四、开发 / 构建 / 发布

CI（`.github/workflows/ci.yml`）：每次推送跑构建校验；推送 `v*` 标签自动 `npm publish`。

## 架构说明

- **宿主面**（`src/index.js`）：注册自有 HTTP 前缀 `/workspace-files-api`（list/read/write/rename/mkdir/newfile），**不依赖**目录选择器后端组合（native/browse 均可），也不修改 DSH 内置包
- **客户端面**（`src/client.js`）：占用侧边栏底部 `sidebar.footer.action` 列表槽（多插件共存），通过 `ctx.workspaces` 读取工作区列表，UI 全部自包含（组件 + 高亮器 + 样式）

## 已知限制

- 子目录内新建文件/文件夹入口未提供（仅各工作区根目录）
- 预览仅支持 UTF-8 文本；二进制文件显示为替换字符
- 语法高亮为轻量正则实现（非 shiki 全量语法树），复杂嵌套场景偶有偏差

## License

MIT

---

## English

A workspace file-explorer plugin for the DeepSeek Harness Web GUI: adds a
"Workspace files" button at the sidebar footer that opens a VS Code-style
explorer panel — file trees of all registered workspace directories on the
left, an editor on the right. Features: lazy file tree with language-colored
SVG icons, inline rename, new file/folder, freely resizable editor with line
numbers, VS Code Dark+ syntax highlighting, in-window edit & save (Ctrl+S),
zh/en UI.

**Install**: `dsh plugin --profile <name> add github:<user>/dsh-workspace-explorer`
(npm install becomes available after publishing). The package declares
`dsh.bundle.patch`, so `dsh plugin` composes it automatically; the committed
`lib/` needs no build step. See the Chinese section above for deployment,
security, and limits.
