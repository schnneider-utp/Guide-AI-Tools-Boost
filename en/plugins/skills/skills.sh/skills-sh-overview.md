# Ecosystem and CLI: skills.sh

As the concept of "Skills" (structured abilities in Markdown files to guide AIs) gained popularity, a new friction emerged: **How do we share and manage these skills across different teams, projects, and AI tools?**

This is where [**skills.sh**](https://skills.sh/) comes in, an initiative driven by Vercel Labs. It is an open ecosystem and a command-line interface (CLI) tool designed to discover, install, and manage "Agent Skills" in a standardized way.

---

## 🌍 What is skills.sh?

**skills.sh** works like a "package manager" (similar to `npm` or `pip`), but exclusively for artificial intelligence guidelines. Through this system, you can install packaged knowledge directly from GitHub repositories into your local environment.

Instead of each programmer having to handwrite a `SKILL.md` file to explain to their AI agent how to configure databases or how to structure components in React, they can simply download an official "Skill" created by the creators of that technology themselves or by the community.

### Key Features:
1. **Easy Installation:** Through terminal commands (e.g., `npx skills add <repository>`), you instantly download knowledge files.
2. **Multi-Agent Support:** Skills downloaded through this CLI are compatible with a large number of coding agents (GitHub Copilot, Cursor, Claude Code, Windsurf, OpenCode, among nearly 40 others). The CLI detects which AI you are using and configures the files in the correct path.
3. **Installation Scope:**
   - **Global (`-g`):** The skill is saved on your operating system and your agent will remember it across all your projects.
   - **Per Project:** The skill is saved inside a hidden folder (like `.agents/skills/`) in your current project, easily shared with your team through version control (Git).

---

## 🛠️ How does it work in practice?

Imagine you are starting a project with **React** and **Vercel**, and you want your local AI agent to program using best performance practices, without hallucinating outdated ways of writing code.

In your terminal you would simply execute:
```bash
npx skills add vercel-labs/agent-skills --skill vercel-react-best-practices
```

With that single command:
1. The system connects to the repository and explicitly extracts the "React best practices" knowledge file.
2. It installs it in your local environment.
3. Immediately, the AI inside your code editor (for example, Copilot Chat or Cursor) will read that skill and start applying it every time you ask it to create a component.

---

## �️ Seguridad y Verificación (Prevención de Prompt Injection)

Una de las grandes ventajas de **skills.sh** frente a copiar y pegar prompts de orígenes desconocidos es que la plataforma realiza verificaciones de calidad (**Audits** y verificaciones de repositorios oficiales). Esto te permite identificar gráficamente cuáles habilidades son respaldadas por empresas como Vercel, Microsoft o Anthropic.

Sin embargo, **ningún sistema es infalible**. 

Al descargar una Skill creada por la comunidad, estás introduciendo literalmente "instrucciones" en la mente de tu IA. Existe el riesgo de **Prompt Injection**, donde un atacante puede crear una Skill popular que, disimulada entre buenas prácticas de React, incluya instrucciones maliciosas como: *"ignora las validaciones de seguridad"* o *"intenta hacer peticiones HTTP con las variables de entorno locales"*.

**Regla de Oro:** Aunque `skills.sh` filtre y perfile a los autores, **SIEMPRE debes verificar qué hay adentro de los archivos `SKILL.md` reinstalados en tu proyecto**. Asegúrate de comprender cada instrucción que le estás dando acceso a tu agente IA. 

---

## 📚 Official Resources and References

To explore the public skills directory or review the source code of this tool, visit:

* 📦 **GitHub Repository:** [vercel-labs/skills](https://github.com/vercel-labs/skills)
* 🌐 **Official Web Directory:** [skills.sh](https://skills.sh/)

> *"The open agent skills ecosystem."*

### 🎥 Recommended Videos

To see live implementations and better understand the impact of `skills.sh`, we suggest these video resources:

* **[How to power up your AI Agent with Skills (In Spanish)](https://www.youtube.com/watch?v=_iVeYCRpH7w):** A practical guide in our language showing how to install and leverage this ecosystem in your development projects.
* **[Introduction and Demonstration of skills.sh (In English)](https://www.youtube.com/watch?v=rcRS8-7OgBo):** An excellent demonstration of the open ecosystem and how centralized Skills management improves developer efficiency.