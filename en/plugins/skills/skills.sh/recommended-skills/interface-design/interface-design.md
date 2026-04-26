# Interface Design Skill

The **Interface Design** skill is a detailed and structured guide for AI agents focused on creating high-quality interfaces, avoiding generic "defaults".

## 🌟 What does it do?
This skill guides the AI to design components and interfaces by thinking from the product's intent and domain, achieving more personalized designs with better usability. It's especially aimed at **dashboards, admin panels, SaaS applications, tools, and settings pages**.

It's not focused on marketing or landing pages.

## ⚙️ How does it work?
The skill imposes a framework that the AI must follow before and during coding:
1. **Intent before code**: Forces the AI to define who the user is, what they need to do, and how the platform should feel, before suggesting designs.
2. **Domain Exploration**: Generates vocabularies, color palettes associated with the product's physical world, and unique visual signatures.
3. **Visual Hierarchy and "Craft"**: Establishes strict rules on typography, surface elevation (depth/borders), spacing, and preventing random colors without semantic meaning.
4. **System Saving**: When finishing a task, the AI can save these design patterns to a `.interface-design/system.md` file to ensure future consistency throughout the entire project.

## 🚀 How can it improve your project?
- **Avoids boring or repetitive interfaces**: Instead of the typical template, the AI will create designs that breathe the identity of your specific product.
- **Complete Microinteractions and States**: Ensures the presence of `hover`, `focus`, `active`, `disabled`, `loading`, etc. states.
- **Total Consistency**: By defining and iterating on specific color and typography tokens, all your components will fit perfectly together, achieving high-quality professional ("craft") finishes.
- **Better Light/Dark Modes**: Establishes precise rules on how to handle visual hierarchy in different modes (e.g., subtle borders vs. shadows).

## 🛠️ Installation & Official Links

To install this skill in your project through `skills.sh`, use the following command:

```bash
npx skills add https://github.com/dammyjay93/interface-design --skill interface-design
```

- **GitHub Repository:** [dammyjay93/interface-design](https://github.com/dammyjay93/interface-design)
- **Official Documentation:** [interface-design.dev](https://interface-design.dev/index.html)