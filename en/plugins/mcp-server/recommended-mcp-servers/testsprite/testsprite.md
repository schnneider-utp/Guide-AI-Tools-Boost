# TestSprite MCP Server

**TestSprite** is an MCP (Model Context Protocol) server that empowers your AI agent with **automated software testing capabilities**. Integrated as an MCP server, it allows your AI agent to run unit, integration, end-to-end (E2E), and regression tests autonomously, directly from your favorite code editor or IDE.

## 🌟 What does it do?

TestSprite acts as a "QA Engineer" integrated into your development workflow. It enables your AI agent to:

- **Run automated tests**: Execute unit, integration, and E2E tests without manual setup.
- **Generate test cases**: Create test cases based on code and observed behavior.
- **Intelligent debugging**: Identify and suggest fixes for bugs detected during test execution.
- **Regression testing**: Run test suites to ensure new changes don't break existing functionality.

## ⚙️ How does it work?

1. **Installation via npx**: The server is installed as an npm package that runs locally through `npx`.
2. **IDE configuration**: Configured in clients like Cursor, Claude Code, Trae, Windsurf, VS Code, or GitHub Copilot.
3. **Tool exposure**: Once connected, the server exposes a set of tools (MCP tools) that the agent can invoke to run tests.
4. **API Key access**: Requires a free API key generated from the TestSprite dashboard.

## 📋 Editor Compatibility

TestSprite MCP Server is compatible with the main IA agents and editors on the market:

| Editor/Agent | Installation Method |
|-------------|---------------------|
| **Trae** | AI Sidebar → AI Management → MCP → Add from Marketplace |
| **Cursor** | One-click install link or manual settings configuration |
| **Claude Code** | `claude mcp add` command in terminal |
| **Windsurf** | Manual configuration in MCP settings |
| **VS Code** | Command Palette → MCP: Add Server |
| **GitHub Copilot** | Manual configuration in MCP settings |
| **Antigravity** | Manage MCP Servers → View raw config |

## 🚀 How can it improve your project?

- **Guaranteed software quality**: Your AI agent can automatically run tests after writing code, detecting errors before they reach production.
- **Reduced manual workload**: Eliminates the need to manually write and execute test scripts.
- **Faster debugging**: The agent can run specific tests to identify exactly where code fails.
- **Smooth continuous integration**: Facilitates test integration into the AI-driven development workflow.

## 🛠️ Requirements & Installation

### Prerequisites

1. **Compatible Editor**: One mentioned above (Cursor, VS Code, Trae, etc.)
2. **TestSprite Account**: [Sign up for free](https://www.testsprite.com/auth/cognito/sign-up)
3. **Node.js >= 22**: [Download Node.js](https://nodejs.org/)
4. **API Key**: Generated from TestSprite dashboard in Settings → API Keys

### General Installation

Add this configuration to your editor's MCP settings:

```json
{
  "mcpServers": {
    "TestSprite": {
      "command": "npx",
      "args": ["@testsprite/testsprite-mcp@latest"],
      "env": {
        "API_KEY": "your-api-key-here"
      }
    }
  }
}
```

### Installation in Claude Code

```bash
cd /path/to/your/project
claude mcp add TestSprite --env API_KEY=your_api_key -- npx @testsprite/testsprite-mcp@latest
claude mcp list
```

### Verification

After installation, verify that a green dot appears on the MCP server icon in your editor. You can also ask your assistant: *"Help me test this project with TestSprite"*.

## 🔗 Official Resources

- **Official Documentation:** [docs.testsprite.com](https://docs.testsprite.com/mcp/getting-started/installation)
- **Website:** [testsprite.com](https://www.testsprite.com)
- **GitHub Repository:** [github.com/testspriteinc](https://github.com/testspriteinc)