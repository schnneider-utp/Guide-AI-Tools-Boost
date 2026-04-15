# Introduction to Plugins for Artificial Intelligence Agents

Plugins or add-ons are extensions that allow Artificial Intelligence (AI) agents to interact with external tools, databases, and systems. By default, large language models (LLMs) operate in an isolated environment, meaning their knowledge is limited to the information they were trained on, and they cannot perform direct actions in the real world or the user's local environment.

The integration of plugins solves this limitation by providing a bridge between the AI's logic and external resources, allowing the agent to:
- **Execute actions:** Read or modify local files, query a database, or interact with external APIs (like GitHub, Slack, or cloud services).
- **Consume dynamic context:** Access real-time information, providing more accurate responses adapted to the current work environment.
- **Specialize its behavior:** Adopt specific roles and follow predefined coding methodologies through custom instructions.

By structuring these integrations, the AI acts not just as a conversational assistant, but as a practical tool integrated into the development workflow.

---

## Thematic Index

Below, we explore the two main categories of integrating additional functionalities for development agents:

### 1. [Model Context Protocol (MCP)](mcp-server/mcp-overview.md)
MCP (Model Context Protocol) is a standardized technology designed to establish secure communications between AI models and local data sources or external tools. This section covers how MCP servers work, their architecture, and how they allow the AI to interact directly with the local environment or third-party platforms (databases, repositories, etc.).

### 2. [Skills (Custom Abilities)](skills/skills-overview.md)
"Skills" are sets of structured instructions that specialize an agent's behavior for specific, repetitive tasks. Instead of establishing connections with external systems, Skills define rules, standards, and programming best practices that the agent must follow when generating or optimizing code. This section explores their structure, how they work, and how to implement them.
