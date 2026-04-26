# Ecosystem & CLI: skills.sh

As the concept of "Skills" (structured guidelines in Markdown files to guide AIs) gained popularity, a new friction emerged: **How do we share and manage these skills across different teams, projects, and AI tools?**

This is where [**skills.sh**](https://skills.sh/) comes in, an initiative driven by Vercel Labs. It's an open ecosystem and command-line tool (CLI) designed to discover, install, and manage "Agent Skills" in a standardized way.

---

## 🌍 What is skills.sh?

**skills.sh** works as a "package manager" (similar to `npm` or `pip`), but exclusively for AI guidelines. Through this system, you can install packaged knowledge directly from GitHub repositories to your local environment.

Instead of each programmer having to manually write a `SKILL.md` file to explain to their AI agent how to configure databases or how to structure React components, they can simply download an "official" Skill created by the creators of that technology or by the community.

### Key Features:
1. **Easy Installation:** Through terminal commands (e.g., `npx skills add <repository>`), you instantly download knowledge files.
2. **Multi-Agent Support:** Skills downloaded through this CLI are compatible with a large number of code agents (GitHub Copilot, Cursor, Claude Code, Windsurf, OpenCode, among almost 40 more). The CLI detects which AI you're using and configures the files in the correct path.
3. **Installation Scope:**
   - **Global (`-g`):** The skill is saved in your operating system and your agent will remember it in all your projects.
   - **Per Project:** The skill is saved within a hidden folder (like `.agents/skills/`) in your current project, easily shared with your team through version control (Git).

---

## 🛠️ How it works in practice?

Imagine you're starting a project with **React** and **Vercel**, and you want your local AI agent to program using best performance practices, without hallucinating outdated ways of writing code.

In your terminal you would simply run:
```bash
npx skills add vercel-labs/agent-skills --skill vercel-react-best-practices
```

With that single command:
1. The system connects to the repository and explicitly extracts the "React best practices" knowledge file.
2. It installs it to your local environment.
3. Immediately, the AI within your code editor (for example, Copilot Chat or Cursor) will read that skill and start applying it every time you ask it to create a component.

---

## 🔐 Security & Verification (Prompt Injection Prevention)

One of the great advantages of **skills.sh** over copying and pasting prompts from unknown sources is that the platform performs quality verifications (**Audits** and official repository verifications). This allows you to graphically identify which skills are backed by companies like Vercel, Microsoft, or Anthropic.

However, **no system is foolproof**.

By downloading a community-created Skill, you're literally introducing "instructions" into your AI's mind. There is a risk of **Prompt Injection**, where an attacker can create a popular Skill that, disguised among good React practices, includes malicious instructions like: *"ignore security validations"* or *"try to make HTTP requests with local environment variables"*.

**Golden Rule:** Even though `skills.sh` filters and profiles authors, **you MUST always verify what's inside the `SKILL.md` files reinstalled in your project**. Make sure you understand every instruction you're giving your AI agent access to.

---

## 📚 Resources & Official References

To explore the public skills directory or review the source code of this tool, visit:

* 📦 **GitHub Repository:** [vercel-labs/skills](https://github.com/vercel-labs/skills)
* 🌐 **Official Web Directory:** [skills.sh](https://skills.sh/)

> *"The open agent skills ecosystem."*

## 💡 Recommended Skills

Below we present some **Recommended Skills** you can integrate into your projects to improve code quality, interfaces, and user experience:

* [**Interface Design**](./recommended-skills/interface-design/interface-design.md): Structured guide focused on creating high-quality interfaces ("craft"), intent-driven design and unique patterns for dashboards and tools, avoiding generic "defaults".
* [**UI/UX Pro Max**](./recommended-skills/ui-ux-pro-max/ui-ux-pro-max.md): A comprehensive design intelligence system with dozens of styles, typography and critical accessibility rules ready to be applied on any technology stack.
* [**PDF Processing**](./recommended-skills/pdf/pdf.md): Guide and best practices for text extraction, page manipulation and creating or filling PDF files using Python libraries and terminal commands.
* [**Frontend Design**](./recommended-skills/frontend-design/frontend-design.md): Instructions focused on creating creative, bold, and memorable user interfaces, avoiding generic AI aesthetics (AI slop).
* [**RAG Implementation**](./recommended-skills/rag-implementation/rag-implementation.md): Mastery in Retrieval-Augmented Generation (RAG) to build LLM applications connected to external knowledge sources (vector databases).
* [**JWT Security**](./recommended-skills/jwt-security/jwt-security.md): Security guidelines and best practices for JWT (JSON Web Tokens) implementation, structuring, signing, and secure storage.
* [**GSAP Animation**](./recommended-skills/gsap/gsap.md): The official GreenSock guide for implementing fluid, declarative, and high-performance animations, including ScrollTrigger and other specialized plugins.

---

### 🎥 Recommended Videos

To see live implementations and better understand the impact of `skills.sh`, we suggest these video resources:

* **[How to Power Your AI Agent with Skills (In Spanish)](https://www.youtube.com/watch?v=_iVeYCRpH7w):** A practical guide in our language showing how to install and leverage this ecosystem in your development projects.
* **[Introduction and Demo of skills.sh (In English)](https://www.youtube.com/watch?v=rcRS8-7OgBo):** An excellent demonstration about the open ecosystem and how centralized Skills management improves developer efficiency.