# 📝 Project Rules: `.agents.md` and `.instructions.md`

While `llms.txt` focuses on facilitating the reading of public documentation on the web, another need arises internally within development teams: **aligning the artificial intelligence embedded in the editor (IDE) with the architecture of their private project.**

For this, the standard of local configuration files like `.agents.md` (and its variant `.instructions.md`) was born, a unified solution for any agent to read context.

---

## 🏛️ Who proposed it and why?

This methodology was not proposed through a universal web standard, but driven "de facto" by the creators of AI-powered IDEs themselves (like **GitHub Copilot, Cursor, Windsurf, and Devin**).

### The Problem
By default, if you ask an AI in the editor to *"create an authentication controller"*, it will generate code based on the generic standard it learned from its training data. However, your company might require the use of a particular framework (e.g., *NestJS with dependency injection*), the exclusive use of `fetch` instead of `axios`, or an atypical folder hierarchy.

### The Solution
The practice of creating "pinned notes" or "System Prompt" files saved alongside the code (in the repository) was standardized so that any programmer on the team, upon opening the project with their AI, forces the agent to read the in-house rules and abide by those conventions.

---

## ⚙️ Use at the Architecture Level

Its implementation is extremely simple. The main rule is that the `.agents.md` (or `.instructions.md`) file must live directly in the **root of your repository**, ensuring it is uploaded to version control (Git) and applies to everyone who clones the project.

Being in the root serves as a single, tool-agnostic source of truth, avoiding the need to configure multiple files for each IDE your team uses.

### Directory Tree Example:

```text
/my-project
├── src/
│   ├── index.js
│   └── app.js
├── .agents.md                     <-- (Unified rules and guidelines for the AI agent)
├── .gitignore
├── package.json
└── README.md
```

**Operating Flow:**
When a developer opens the project and asks the first question in their chat, the agent scans the root looking for the `.agents.md` file. The content of the file invisibly enters the header (*System Prompt*) of the conversation, affecting the generated code from that moment on.