# 💻 Terminal AI Agents

> Terminal AI agents are tools designed to bring the context and analytical power of large language models (LLMs) directly to your console. 

Understanding what these mechanisms are is simple: instead of copying errors from your terminal and pasting them into ChatGPT (or a browser), or manually typing abstract commands, Terminal Agents live in your command shell. *They listen, read logs, can execute analytical tools, and suggest or execute correct commands in milliseconds.*

---

## 🛠️ Requirements (Node.js)

For the vast majority of these terminal agents to work, the fundamental requirement is to have **Node.js** installed on your system. By installing Node, you also automatically get **NPM** (Node Package Manager). NPM is the package manager from which we will download and install the command-line interface (CLI) utilities of these AI tools.

💡 **Pro Tip: Install Node using [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm)**

The traditional method is to download the official installer from the Node.js website, but **we do not recommend it**. Installing Node directly at the system level usually causes permission headaches, especially when trying to install agents or tools globally (using the `-g` flag in npm), throwing locks or "Access Denied" errors.

For a professional, clean, and frictionless installation, the ideal is to use **[NVM](https://github.com/nvm-sh/nvm)** (or `nvm-windows` if you are on Windows):

1. **What exactly is it?** NVM is a manager that encapsulates and installs Node.js exclusively in your user's workspace.
2. **Zero permission problems:** Since everything lives in your user environment, you can run global installations (e.g., `npm install -g @google/gemini-cli`) without requiring administrator privileges.
3. **Total version control:** NVM allows you to install several versions of Node on the same PC and jump from one to another in a matter of seconds with a simple command (for example, from `nvm use 20` to `nvm use 22`).

*Make sure you have NVM configured and use a stable version of Node (LTS) before installing the agents shown below.*

---

## 🗺️ Terminal Agents Index

We have separated the documentation for each tool into its own module and instruction file. Access the one you wish to configure:

### 1. [🤖 GitHub Copilot CLI / SDK](./copilot-sdk/copilot-cli-docs.md)
Official tool developed by **GitHub (Microsoft)** from its innovation lab *GitHub Next*. It is a console client powered by OpenAI models that brings the architecture of its popular assistant directly to the operating system's native shell.

### 2. [✨ Gemini CLI](./gemini-cli/gemini-setup.md)
A command-line client developed and backed by **Google**. It works through a Node.js package environment (via NPM) to interconnect the terminal directly with the foundational infrastructure API of its powerful Gemini models (Pro/Flash).

### 3. [🚀 OpenCode (Open-Source AI Agent)](./opencode/opencode-guide.md)
**Open-Source** software project driven by the developer community and built on **Python** ecosystems. It is an autonomous agent framework that, instead of acting as a simple text generator, integrates a cognitive system that processes, edits files, and executes routines, emulating proprietary enterprise solutions (like Devin).
