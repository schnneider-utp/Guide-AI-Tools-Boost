# Model Context Protocol (MCP) and MCP Servers

The **Model Context Protocol (MCP)** is an open-source standard designed to connect Artificial Intelligence (AI) applications with external systems in a secure and structured way.

Figuratively speaking, **MCP acts as a "USB-C" port for AI applications**. Just as a USB-C port provides a standardized way to connect various electronic devices without worrying about manufacturer-specific connectors, MCP offers a standardized way for AI models to access data sources, tools, and external workflows.

---

## 🏛️ Who created it and why?

The protocol was initially driven by **Anthropic** (the creators of Claude) and was later released as an open-source standard, backed by a broad coalition of the tech industry.

### The problem: Fragmentation
Before MCP, every time a developer or company wanted to connect a large language model (LLM) to an external tool (e.g., a local database, Slack, GitHub, or a calendar), they had to write custom integrations specific to that particular LLM. If you wanted ChatGPT, Claude, and a local open-source model to connect to your database, you had to maintain three different integrations. This resulted in a fragmented ecosystem, difficult to scale and complex to maintain.

### The solution: Standardization
The main goal of creating MCP was to solve this fragmentation through the premise of **"write once, integrate everywhere"**.
By using a standard protocol:
1. **Tool developers** only need to build a single "MCP Server" for their service.
2. **AI applications** only need to implement the "MCP Client" once.
3. Immediately, any compatible AI application can communicate with any tool that has an MCP server.

---

## ⚙️ Architecture: MCP Client vs. MCP Server

MCP's architecture is based on a very simple but powerful client-server model:

### 1. The MCP Client (The AI Application)
It is the application or environment where the user interacts with the AI. Examples of MCP clients are **Claude**, **ChatGPT**, development tools like **Visual Studio Code (via Copilot)**, **Cursor**, among others. The client is the one that "requests" the information or the execution of an action.

### 2. The MCP Server (The Bridge to Data)
The **MCP Server** is a lightweight program that runs locally or remotely. Its sole function is to securely expose specific resources of a tool or database to the MCP Client.

**What can an MCP Server expose?**
- **Data sources:** Local files, PostgreSQL/SQLite databases, internal corporate wikis.
- **Tools (Actions):** Execute web searches, compile code, interact with the GitHub API (approve PRs, read issues), calculators.
- **Specialized Prompts:** Prompt templates designed for complex tasks.

For example, if you have a Google Calendar MCP Server running, the MCP Client (your AI in the code editor) can ask the server: *"What meetings does the user have today?"*, and the MCP server will query the Google API and return the answer to the model in a standard format.

---

## 💡 Why is it important?

* **For developers:** Greatly reduces the time and complexity of building AI agents connected to the real world.
* **For end users:** Eliminates the "copy and paste" barrier. AIs can read context directly from their tools (Jira, Notion, Figma) and perform actions on their behalf with controlled permissions.
* **Privacy and Control:** MCP servers allow the user to control exactly what data is exposed to the language model, a critical aspect in corporate environments.

---

## 📚 Official Resources and Documentation

To dive deeper into the development and technical implementation of MCP, you can consult the following official sources:

* **Official Documentation (Website):** [Model Context Protocol - Introduction](https://modelcontextprotocol.io/docs/getting-started/intro)
* **GitHub Repository:** [Model Context Protocol Organization](https://github.com/modelcontextprotocol) - Here, progress, official SDKs (in TypeScript, Python, etc.), and community open-source servers are published.

### 💡 Recommended MCP Servers

Below, we present **MCP servers** you can integrate into your AI agent to expand its capabilities:

* [**TestSprite**](./recommended-mcp-servers/testsprite/testsprite.md): MCP server specialized in **automated software testing** (unit, integration, and E2E), allowing your agent to autonomously run and generate tests.
* [**Chrome DevTools**](./recommended-mcp-servers/chrome-devtools/chrome-devtools.md): Official Google MCP server to **control a live Chrome browser**, enabling browser automation, advanced debugging, and performance analysis.

---

### 🎥 Recommended Videos

If you prefer to learn visually or reinforce concepts, we recommend the following videos:

* **[Explanation of MCP and how to use it (In Spanish)](https://www.youtube.com/watch?v=wnHczxwukYY&t=3311s):** A quite detailed educational resource, in our language, to understand the context and its practical implementation.
* **[Introduction to the Model Context Protocol (In English)](https://www.youtube.com/watch?v=7j_NE6Pjv-E):** An overview that explores what MCP is about and why it is changing the way we connect AI agents.
