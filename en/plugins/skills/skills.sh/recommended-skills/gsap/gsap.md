# GSAP (GreenSock Animation Platform)

The **GSAP** (GreenSock Animation Platform) skill is the official guide from the GreenSock team for your AI agent to implement professional, fluid, high-performance animations using the most powerful and widely-used animation library in the web ecosystem.

## 🌟 What does it do?
Teaches the agent the correct way to use GSAP: its core API (`gsap.to()`, `from()`, `fromTo()`), timelines, the **ScrollTrigger** plugin for scroll-driven animations, and specialized plugins for practically any modern animation need.

## ⚙️ How does it work?
The skill is structured in modules that the agent consults as needed:
1. **gsap-core**: Core API, tweening functions, easing, duration, stagger, and defaults.
2. **gsap-timeline**: Animation sequencing, position parameters, labels, nesting, and playback control.
3. **gsap-scrolltrigger**: Scroll-linked animations, pinning, scrub, and lifecycle management.
4. **gsap-plugins**: Specialized plugins including ScrollToPlugin, ScrollSmoother, Flip, Draggable, Inertia, Observer, SplitText, ScrambleText, and SVG plugins.
5. **gsap-react**: The `useGSAP` hook, refs, `gsap.context()`, cleanup, and SSR compatibility.
6. **gsap-performance**: Performance optimization using transforms instead of layout properties, `will-change`, batching, and ScrollTrigger tips.

## 🚀 How can it improve your project?
- **Fluid and Declarative Animations**: Instead of generating raw or poorly calculated CSS animations, the agent will create declarative, precise animation sequences controlled by a GSAP timeline.
- **Scroll-Driven Animations**: You can implement animations that execute as the user scrolls (reveal effects, elements that fix or move based on position), a key trend in modern web design.
- **100% Free**: GSAP including plugins like **SplitText** and **MorphSVG** are completely free after the Webflow acquisition. You don't need Club GSAP membership or private authentication tokens.
- **Professional Performance**: The skill emphasizes the use of transforms (`x`, `y`, `rotation`) over properties that cause reflow (like `margin`, `left`, `top`), guaranteeing smooth 60fps.

## 🛠️ Installation & Official Links

To install this skill in your project through `skills.sh`, use the following command:

```bash
npx skills add https://github.com/greensock/gsap-skills
```

- **GitHub Repository:** [greensock/gsap-skills](https://github.com/greensock/gsap-skills)
- **Official Website:** [gsap.com](https://gsap.com)