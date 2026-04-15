# 📄 AI-Optimized Documentation (AOD)

> AIs read projects and the web differently than humans. Making it easier for them to "read" is the key to not blocking the agent with irrelevant information, slow *Web Scraping*, or useless *token* spending.

As AI agents become a fundamental part of software development, we face a new challenge: **context consumption.**

Navigating and indexing web pages or repositories made for humans (with tons of hierarchy, CSS styles, scripts, or irrelevant files) makes AI processes slow, expensive, and prone to hallucinations. To mitigate this, the technical community has introduced new standards for "AI-Optimized Documentation", where content is strictly simplified (usually in plain text or Markdown).

---

## 📑 Classification of AOD Standards

This section explores the two most important methodologies today for providing optimized context to our Artificial Intelligence tools depending on the environment, whether on the web or within our local code repository.

### 1. [The `llms.txt` Standard (For the Web)](llms-txt/llms-txt-overview.md)
A plain text file located at the root of domains, functioning identically to how `robots.txt` works for Googlebot. Its main function is to give a structured summary, in Markdown, of what the page or library is about, preventing the LLM from trying to render the entire documentation interface.

### 2. [Local Rules with `.agents.md` / `.instructions.md`](agents/agents-md-overview.md)
Hidden files in the roots of our code repositories. They function as *pre-prompts* or style manuals that tools like Cursor, GitHub Copilot, or Windsurf read automatically before interacting with the code, forcing the AI to obey the specific architecture approved by your team.