# GSAP (GreenSock Animation Platform)

La skill **GSAP** (GreenSock Animation Platform) es la guía oficial de la gente de GreenSock para que tu agente de IA implemente animaciones profesionales, fluidas y de alto rendimiento usando la biblioteca de animación más potente y usada del ecosistema web.

## 🌟 ¿Qué hace?
Enseña al agente la forma correcta de usar GSAP: su API central (`gsap.to()`, `from()`, `fromTo()`), líneas de tiempo (timelines), el plugin **ScrollTrigger** para animaciones controladas por el scroll, y plugins especializados para prácticamente cualquier necesidad de animación moderna.

## ⚙️ ¿Cómo funciona?
La skill está estructurada en módulos que el agente consulta según la necesidad:
1. **gsap-core**: API central, funciones de tweening, *easing* (facilidades), duración, *stagger* y valores por defecto.
2. **gsap-timeline**: Secuenciación de animaciones, parámetros de posición, etiquetas, anidación y control de reproducción.
3. **gsap-scrolltrigger**: Animaciones vinculadas al scroll de la página, *pinning* (fijación), *scrub*, y gestión del ciclo de vida.
4. **gsap-plugins**: Plugins especializados incluyendo ScrollToPlugin, ScrollSmoother, Flip, Draggable, Inertia, Observer, SplitText, ScrambleText, y plugins de SVG.
5. **gsap-react**: El hook `useGSAP`, referencias, `gsap.context()`, cleanup y compatibilidad con SSR.
6. **gsap-performance**: Optimización de rendimiento usando *transforms* en lugar de propiedades de layout, `will-change`, *batching* y consejos para ScrollTrigger.

## 🚀 ¿En qué puede mejorar tu proyecto?
- **Animaciones Fluidas y Declarativas**: En lugar de generar animacionales CSS crudas o mal calculadas, el agente creará secuencias animadas controladas por una línea de tiempo declarativa y precisa con GSAP.
- **Scroll-Driven Animations**: Podrás implementar animaciones que se ejecutan a medida que el usuario hace scroll (efecto "reveal", elementos que se fijan o se mueven según la posición), una tendencia clave en el diseño web moderno.
- **100% Gratis**: GSAP incluyendo plugins como **SplitText** y **MorphSVG** son completamente gratuitos tras la adquisición de Webflow. No necesitas membresía de Club GSAP ni tokens de autenticación privados.
- **Rendimiento Profesional**: La skill enfatiza el uso de transformaciones (`x`, `y`, `rotation`) sobre propiedades que causan *reflow* (como `margin`, `left`, `top`), garantizando 60fps suaves.

## 🛠️ Instalación y Enlaces Oficiales

Para instalar esta skill en tu proyecto a través de `skills.sh`, utiliza el siguiente comando:

```bash
npx skills add https://github.com/greensock/gsap-skills
```

- **Repositorio de GitHub:** [greensock/gsap-skills](https://github.com/greensock/gsap-skills)
- **Web Oficial:** [gsap.com](https://gsap.com)