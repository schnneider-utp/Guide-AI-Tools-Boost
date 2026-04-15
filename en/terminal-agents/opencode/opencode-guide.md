# 🚀 OpenCode (Open-Source AI Agent)

OpenCode is an open-source approach aimed at matching or following in the footsteps of autonomous engineering agents (like Devin). Unlike a simple CLI that only processes text, OpenCode is a **complete problem-solving agent**, capable of seeing your editor, creating folders, installing dependencies, executing scripts, and correcting its own errors by running directly from your terminal.

> 💰 **Free Tier and Model Freedom:** The biggest differentiator of this project is that it does not restrict you to a single paid model. OpenCode offers an **enormously generous free tier** where you can choose between multiple cutting-edge models (LLMs) to act as your agent's brain. **Main Recommendation:** Use the **MiniMax** model, as it provides the best cost-performance balance in its free tier for complex coding operations.

**Official Resources:**
- 📘 [Project Main Page](https://opencode.ai)
- 💻 [Official GitHub Repository](https://github.com/anomalyco/opencode)
- 🎥 [Educational Video on OpenCode (in Spanish)](https://www.youtube.com/watch?v=2gO8WyctqMk)
- 🎥 [Educational Video on OpenCode (in English)](https://www.youtube.com/watch?v=e9j2iEwJru0)

---

### **Requirements and Installation (via npm and NVM):**
Like the vast majority of the current agent ecosystem, it is built on Node.js. As a best practice, installing it globally using NPM should be done via NVM to avoid root permission failures:

```bash
# Global installation via NPM
npm i -g opencode-ai
```

---

## **How to Start the Agent?**

Unlike one-off calls, with OpenCode you will usually bring up a complete terminal dedicated to it. You only need to run this command at the root of your project:

```bash
opencode
```
*(It will start the main environment where you can start speaking to it naturally, give it directions for your project, and transition between the different modes).*

---

## **Operation Modes**

Like other advanced agents, OpenCode divides its capabilities into different cognitive modes to ensure more controllable processes:

1. **Plan Mode (Architecture):** Its goal is to draw a roadmap before touching a single line of code. In this mode, the agent reads the current state of your project, analyzes the problem, and presents you with an outline of steps. It is ideal for you to validate the architecture before it starts working.
2. **Builder Mode (Execution):** Once the plan is validated (or if you jump straight to building), the agent assumes the role of executor. At this stage, it has full autonomy to execute bash commands, write/delete files, install dependencies via NPM, and auto-correct itself by reading console errors (`stderr`) in real-time.

---

## **Interactive Commands and Configuration (/)**

Within the interactive session, you have total control over the AI through direct commands using the forward slash `/`:

- `/model`: Change the language engine you are using on the fly (e.g., `/model minimax` or `/model gpt-4o`).
- `/session`: Manage, create, list, or swap the context or temporary history in case you are handling different tasks in parallel in your repository.
- `/skills`: Apply custom skills (snippets with expert code rules and instructions) for very niche tasks.
- `/mcp`: Interact directly with context servers (Model Context Protocol), providing tools to read databases, ticketing APIs, or other local environments in a secure setting.

### **Ease of Integration for Skills and MCPs**
One of the biggest architectural advantages of OpenCode compared to tighter terminal alternatives (like Claude Code style tools) is its **ease of scaling capabilities**. Because its file system design establishes predictable, generalized standard paths or folders, you simply drop your instructions (`.md`) or MCP configurations for the interactive environment to absorb them globally, avoiding having to manually configure heavy dependencies to customize the agent.

> **Security Tip 💡**: Due to the agent's extremely high autonomy (especially in Builder Mode, where it can overwrite files on the disk), always make sure to have your version control clean and updated (`git commit`) in the root path. This will allow you to do a simple `git revert` without a headache if a massive code accident happens.
