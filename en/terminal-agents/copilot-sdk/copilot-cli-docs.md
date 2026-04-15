# 🤖 GitHub Copilot CLI / SDK

This tool is a command-line utility designed to help developers build, learn, and remember complex shell commands directly in their daily workspace ("cmd", "PowerShell", "Bash", "Zsh"). Its goal is to reduce context switching, allowing you to query tools, translate natural statements to CLI commands, and explain standard output errors directly in the terminal.

> 💰 **Cost and Benefits for Students:** Note that GitHub Copilot is a paid tool. However, if you are a student, you can apply to the [GitHub Student Developer Pack](https://education.github.com/pack) to get free access to Copilot and many other essential development tools.

**Official Resources:**
- 📘 [Official Documentation and Usage Guides](https://github.com/features/copilot/cli?locale=en)
- 💻 [SDK Repository (GitHub)](https://github.com/github/copilot-sdk)
- 🎥 [Educational Video on Copilot CLI (in Spanish)](https://www.youtube.com/watch?v=XpQ7uUXuPHg)
- 🎥 [Educational Video on Copilot CLI (in English)](https://www.youtube.com/watch?v=v8dr7QcIiLU)

### **Installation:**
To install the package distributed on Node, it is advisable to avoid administrator permission conflicts with global installations. The best practice is to use `nvm`:

```bash
# Global installation via NPM (version > 16.x)
npm install -g @github/copilot
```

### **Terminal Authentication:**
```bash
github-copilot-cli auth
```

---

## **How to Start the Agent?**

Once authenticated, to launch the interface and start interacting with the assistant in the current path of your project, simply run:

```bash
copilot
```

---

## **Operation Modes**

By running the agent's SDK in your terminal, you can transition between different levels of autonomy to control how the AI intervenes in your project:

1. **Initial / Interactive Mode (Default):** This is the mode the tool starts with by default. At this level, the agent maintains a step-by-step chat-like dialogue with you, waiting for direct instructions and manual confirmations before altering scripts or executing code.
2. **PLAN Mode:** In this design mode, the agent evaluates your request, analyzes your environment (files, logs), and generates a detailed step-by-step strategy on how it will solve the problem. It is crucial for cognitively auditing the AI before giving it the green light to modify your architecture.
3. **Autopilot Mode:** The level of greatest autonomy. Once the provided context is trusted, the agent takes the reins to execute commands, jump between folders, create files, or install dependencies continuously, limiting the need for you to approve each action separately.

---

## **Interactive Commands and Skills**

The fundamental thing when using the SDK and agent sessions is not to focus on executing command flags alone, but on understanding how to invoke context tools within the model's interactive session, using forward slashes (`/`):

- `/skills`: Allows you to list or invoke available "skills" that the agent has (for example, search GitHub, read Workspace files, consult documentation, etc.).
- `/help`: Shows the general help of the environment and what other slash intentions are enabled in your current CLI version.

> **Learning Note 💡**: Before confirming and executing a command generated in *Suggest* mode, make it a habit to ask the CLI to explain the proposal. Understanding what each parameter does will prevent you from running destructive instructions on your host system by accident.
