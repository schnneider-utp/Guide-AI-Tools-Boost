# UI/UX Pro Max Skill

The **UI/UX Pro Max** skill acts as a comprehensive design intelligence system for web and mobile applications, providing a vast catalog of usability guidelines, styles, and accessibility.

## 🌟 What does it do?
Provides your AI with instant access to over 50 visual styles, 97 color palettes, 57 font pairings, and 99 UX guidelines across 9 different technology stacks (like React, Tailwind, Next.js, Vue, SwiftUI, etc.). It serves as an exhaustive reference so the AI makes robust and accessible design decisions.

## ⚙️ How does it work?
Unlike other skills that only dictate "how to act", this skill works in a modular way based on hierarchical rules:
1. **Design System Generation**: Through searches (or using internal rules) in different domains (product, style, color, typography), the AI extracts and implements the best combination for the user's needs.
2. **Priority-Based Rules**: Validates work against a rigorous set of priorities, where **Accessibility** and **Touch/Interaction** are critical, followed by performance, responsiveness, and other details.
3. **Design Persistence**: Generates and obeys `MASTER.md` and individual page files within a design system folder in the project, so the AI maintains continuous tracking and knows exactly which rules to apply at all times.

## 🚀 How can it improve your project?
- **Immediate Accessibility**: Directly applies correct contrasts, focus rings, keyboard navigation, and `aria-labels`, achieving inclusive, standard products.
- **Touch Interactions and UX**: Considers specific but vital things like minimum touch target sizes (44x44px), visual error feedbacks, and interactive cursors.
- **Visual Performance**: Improves loading by considering WebP usage, loading states (skeletons), and motion restrictions when necessary.
- **Multi-Stack Versatility**: Whether you're working on Web with Tailwind, or on mobile with Flutter or SwiftUI, the AI will know the best UX practices for that specific environment.
- **Pre-Delivery Automatic Check**: Promotes the use of exhaustive checklists (Pre-Delivery Checklist) before considering any UI code fragment complete.

## 🛠️ Installation & Official Links

To install this skill in your project through `skills.sh`, use the following command:

```bash
npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max
```

- **GitHub Repository:** [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)