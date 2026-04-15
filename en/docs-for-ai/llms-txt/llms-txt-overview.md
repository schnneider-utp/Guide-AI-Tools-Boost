# 🗃️ The Web Standard: `llms.txt`

When integrating AIs with platforms documented on websites, engineers hit a wall: modern HTML is full of unnecessary components, styles (`CSS`), navigation sidebars, and massive interactivity (`JavaScript`). All of this confuses a text model and wastes its token window uselessly trying to "read" the page.

This is where standardization via the use of **`llms.txt`** files comes into play.

---

## 🏛️ What is it, who proposed it, and why?

The concept was proposed and popularized throughout 2024 by communities focused on Open Source AI, strongly highlighting the **Answer.AI** organization and theoretical defenders of universal AI access.

### The Purpose
Inspired by the historic `robots.txt` (which told 90s Google search engines which folders not to index), the `llms.txt` does something equivalent for the LLM era.

In essence, the proposal suggests that any website (for example, the documentation for *React* or *Tailwind*), exposes at its main path a file named `llms.txt`. 
This file must contain plain text strictly formatted in **Markdown**, summarizing all APIs, basic usage schemas, and concepts to the maximum, removing all the "visual noise" of the traditional web.

In this way, when a developer asks the AI: *"Read the updated Tailwind documentation at tailwindcss.com and implement it"*, the AI, instead of reading the entire HTML website, goes directly to download `https://tailwindcss.com/llms.txt` and ingests the knowledge in a fraction of a second.

---

## ⚙️ Use at the Architecture Level

The paradigm establishes that this file is consolidated and dispatched statically, and must definitively be hosted and served from the **public domain root** of a website.

It does not contain back-end application logic; it is exposed to the end client and primarily to bot builders (*Agent web scrapers*).

### Web Server Directory Tree Example:

```text
/your-documentation-project
├── public/
│   ├── css/
│   │   └── site-styles.css
│   ├── index.html                 <-- (For human reading)
│   ├── favicon.ico
│   ├── robots.txt                 <-- (For classic scrapers like GoogleBot)
│   └── llms.txt                   <-- (For automated consumption by AI assistants)
├── src/
└── package.json
```

**Operating Flow:**
When an AI "Crawler" navigates to your website or service, the first thing it does is execute a simple `GET /llms.txt` request. If it exists, it ignores parsing the HTML format (`index.html`) and simply absorbs the ultra-condensed Markdown, saving compute time and radically improving the effectiveness of the answers it provides to users using your API or library.