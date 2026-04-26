# Chrome DevTools MCP Server

**Chrome DevTools** is an MCP (Model Context Protocol) server developed by the official Chrome DevTools team at Google. It allows your AI agent to control and inspect a live Chrome browser, acting as a bridge between the AI and the full power of Chrome Developer Tools for reliable automation, in-depth debugging, and performance analysis.

## 🌟 What does it do?

Chrome DevTools MCP gives your AI agent complete control over a Chrome browser:

- **Browser automation**: Click, type text, navigate between pages, handle dialogs, upload files programmatically.
- **Advanced debugging**: Analyze network requests, take screenshots, check console messages with source-mapped stack traces.
- **Performance analysis**: Record performance traces and extract actionable insights using Chrome DevTools.
- **Extension management**: Install, list, reload, and uninstall Chrome extensions.
- **Screencast and memory**: Take memory snapshots and use experimental screencast tools.

## ⚙️ How does it work?

1. **Installation via npx**: The server is installed as an npm package that controls the browser using **Puppeteer**.
2. **Automatic Chrome startup**: By default, the server starts a Chrome instance with a dedicated profile.
3. **MCP tool exposure**: The server exposes 30+ tools organized by category (input, navigation, network, performance, debugging, extensions, memory).
4. **Connection to existing Chrome**: It can also connect to a running Chrome instance via debugging port or WebSocket.

## 📋 Editor Compatibility

Chrome DevTools MCP is compatible with a wide range of agents and editors:

| Editor/Agent | Installation Method |
|-------------|---------------------|
| **Claude Code** | `claude mcp add chrome-devtools --scope user npx chrome-devtools-mcp@latest` |
| **Cursor** | Install button or Settings → MCP → New MCP Server |
| **VS Code / Copilot** | Command Palette → MCP: Add Server or plugin |
| **Gemini CLI** | `gemini mcp add chrome-devtools npx chrome-devtools-mcp@latest` |
| **Windsurf** | MCP configuration in `.windsurf/config.mcp.json` |
| **OpenCode** | Configuration in `~/.config/opencode/opencode.json` |
| **Codex** | `codex mcp add chrome-devtools -- npx chrome-devtools-mcp@latest` |
| **Antigravity** | Configuration in `mcp_config.json` |

(Check official documentation for more installation options)

## 🚀 How can it improve your project?

- **E2E test automation**: Your agent can automate user flows in the browser without additional external tools.
- **Visual debugging**: It can take screenshots, analyze console logs, and inspect network requests to understand errors.
- **Web performance analysis**: It can record performance traces and analyze metrics like LCP, FID, CLS directly from the real browser.
- **IDE-based debugging**: Your agent can do remote debugging directly from your code editor, without manually opening DevTools.

## 🛠️ Requirements & Installation

### Prerequisites

1. **Node.js v20.19+**: [Download Node.js](https://nodejs.org/)
2. **Stable Chrome**: Current version of Google Chrome or Chrome for Testing.
3. **npm**: Node.js package manager.

### General Installation

Add this configuration to your editor's MCP settings:

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest"]
    }
  }
}
```

### Slim Mode (Basic)

If you only need basic browser tasks:

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest", "--slim", "--headless"]
    }
  }
}
```

### Advanced Options

- `--headless`: Run without GUI.
- `--channel=canary|dev|beta|stable`: Chrome channel to use.
- `--browser-url`: Connect to an existing Chrome instance.
- `--isolated`: Use a temporary user directory that is automatically cleaned up.

### Verification

Ask your assistant: *"Check the performance of https://developers.chrome.com"*

The server should open the browser and record a performance trace.

## ⚠️ Known Limitations

- Only officially supports Google Chrome and Chrome for Testing.
- Performance tools send URLs to Google CrUX API for user experience data (can be disabled with `--no-performance-crux`).
- Collects anonymous usage statistics to improve the tool (can be disabled with `--no-usage-statistics`).

## 🔗 Official Resources

- **Official Documentation:** [github.com/ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)
- **Tool Reference:** [docs/tool-reference.md](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/tool-reference.md)
- **Chrome DevTools Frontend:** [github.com/ChromeDevTools/devtools-frontend](https://github.com/ChromeDevTools/devtools-frontend)