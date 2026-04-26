# PDF Skill

The **PDF** skill is an exhaustive processing and manipulation guide designed to give the AI all the necessary knowledge to operate with PDF files, from basic tasks to complex extractions.

## 🌟 What does it do?
Provides tested instructions and code examples (primarily in Python, but also with command-line tools) to extract text and tables, merge documents, split pages, rotate, add watermarks, and even perform OCR (Optical Character Recognition) on scanned PDF files.

## ⚙️ How does it work?
The skill works as a quick reference manual that the agent automatically resorts to when you mention or need to work with a `.pdf`. Instead of trying to "guess" how to use a library, the AI will consult:
1. **Python Libraries**: Correct usage of `pypdf` for basic operations, `pdfplumber` for extracting text and tables while maintaining layout, or `reportlab` for creating PDFs from scratch.
2. **CLI Terminal Tools**: Instructions for useful commands using `poppler-utils` (pdftotext), `qpdf`, and `pdftk`.
3. **Advanced Cases**: Ready solutions for password protection, extracting internal images, or performing OCR with `pytesseract`.

## 🚀 How can it improve your project?
- **Prevents hallucination errors**: Many agents fail when trying to parse or extract complex tables from a PDF. This skill gives the optimal approach (e.g., using `pdfplumber` or a specific `pandas` script).
- **Speeds up document manipulation**: Generating, cutting, or protecting PDFs takes seconds when the AI already has the exact code and best practices in its context.
- **Accurate Document Creation**: When generating reports, the agent will know exactly how to handle styles, paragraph formatting, and multi-page structures using `reportlab`.

## 🛠️ Installation & Official Links

To install this skill in your project through `skills.sh`, use the following command:

```bash
npx skills add https://github.com/anthropics/skills --skill pdf
```

- **GitHub Repository:** [anthropics/skills](https://github.com/anthropics/skills)