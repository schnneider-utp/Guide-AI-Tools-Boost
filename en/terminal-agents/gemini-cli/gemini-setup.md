# ✨ Gemini CLI

An official command-line client developed by Google to connect your terminal directly with the Gemini model family. Since it leverages the enormous context windows of its infrastructure (like the 1.5 Pro/Flash model with over 1 million tokens), it is ideal for analyzing massive amounts of logs, reading huge error outputs, or finding patterns in heavy files.

> 💰 **Free Tier and Costs:** Although interacting with the base APIs of large language models usually has a price, Gemini offers a **highly generous Free Tier** through Google AI Studio, which is more than enough for the daily needs and tasks of most local developers.

**Official Resources:**
- 📘 [Project Main Page](https://geminicli.com)
- 💻 [Official GitHub Repository](https://github.com/google-gemini/gemini-cli)
- 🎥 [Educational Video on Gemini CLI (in Spanish)](https://www.youtube.com/watch?v=Ib9f811Z5zg)
- 🎥 [Educational Video on Gemini CLI (in English)](https://www.youtube.com/watch?v=WxXUbiz6RQE)

### **Installation (via npm and NVM):**
Because it uses global dependencies, we recommend using NVM for installation on Windows avoiding access issues.

```bash
# Global installation via NPM
npm install -g @google/gemini-cli
```

### **Authentication (Personal Account):**
To use the tool, instead of manually handling environment variables, you can quickly authenticate with your own Google account associated with the developer service:

```bash
# Start authentication flow in the browser
gemini login
```
*(Running this will open a window in your browser for you to securely log into Google and authorize the CLI on your workstation).*

---

## **How to Start the Agent?**

Depending on your needs and workflow, the Gemini CLI allows you to interact in two ways without leaving your console:

1. **Interactive / Conversational Environment:** If you prefer to keep a history or chat about a long problem in a complete environment anchored to your project:
   ```bash
   gemini 
   ```
2. **Single Quick Calls:** Ideal for automations, looking for a quick command, or chaining results (*pipes*). It does not require starting an environment but telling it what to do directly in bash:
   ```bash
   gemini ask "How do I search for a specific error in my Linux logs?"
   ```

---

## **Benefits and Key Features**

Currently, this client operates in a fairly direct and imperative manner and, unlike others on the list, for now, it does not have complex autonomous planning modes (Autopilot). However, it shines in the following scenarios:

- **Huge Context:** Its main strength is "ingesting" tons of text (chaotic logs, memory dumps, full database reads).
- **UNIX Interoperability:** It is designed to be an active link chained with other terminal outputs through virtual pipes.

### **Interactive Sessions and Quick Model Switching (/)**
As explained in the initialization, if you open a continuous conversation terminal by simply typing `gemini`, the agent gives you access to configuration commands using the forward slash `/`.

If you want to put the model in **its fastest state**, you can explicitly switch to the *Flash* version (which consumes fewer tokens, resolves in milliseconds, and is usually the most recommended for the shell):
```
/model gemini-1.5-flash
````

