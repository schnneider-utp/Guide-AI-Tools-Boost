# Ecosistema y CLI: skills.sh

A medida que el concepto de "Skills" (habilidades estructuradas en archivos Markdown para guiar a las IAS) cobró popularidad, surgió una nueva fricción: **¿Cómo compartimos y gestionamos estas habilidades entre distintos equipos, proyectos y herramientas de IA?**

Aquí es donde entra [**skills.sh**](https://skills.sh/), una iniciativa impulsada por Vercel Labs. Se trata de un ecosistema abierto y una herramienta de línea de comandos (CLI) diseñada para descubrir, instalar y gestionar "Agent Skills" (Habilidades de Agente) de forma estandarizada.

---

## 🌍 ¿Qué es skills.sh?

**skills.sh** funciona como un "gestor de paquetes" (similar a `npm` o `pip`), pero exclusivo para directrices de inteligencia artificial. A través de este sistema, puedes instalar conocimientos empaquetados directamente desde repositorios de GitHub hacia tu entorno local.

En lugar de que cada programador tenga que redactar a mano un archivo `SKILL.md` para explicarle a su agente de IA cómo configurar bases de datos o cómo estructurar componentes en React, puede simplemente descargar una "Skill" oficial elaborada por los propios creadores de dicha tecnología o por la comunidad.

### Características Principales:
1. **Instalación Sencilla:** A través de comandos en la terminal (ej: `npx skills add <repositorio>`), descargas instantáneamente los archivos de conocimiento.
2. **Soporte Multi-Agente:** Las Skills descargadas a través de esta CLI son compatibles con una gran cantidad de agentes de código (GitHub Copilot, Cursor, Claude Code, Windsurf, OpenCode, entre casi 40 más). La CLI detecta qué IA estás usando y configura los archivos en la ruta correcta.
3. **Ámbito de Instalación:**
   - **Global (`-g`):** La habilidad se guarda en tu sistema operativo y tu agente la recordará en todos tus proyectos.
   - **Por Proyecto:** La habilidad se guarda dentro de una carpeta oculta (como `.agents/skills/`) en tu proyecto actual, compartiéndose fácilmente con tu equipo a través del control de versiones (Git).

---

## 🛠️ ¿Cómo funciona en la práctica?

Imagina que estás comenzando un proyecto con **React** y **Vercel**, y quieres que tu agente local de IA programe usando las mejores prácticas de rendimiento, sin alucinar con formas anticuadas de escribir código.

En tu terminal simplemente ejecutarías:
```bash
npx skills add vercel-labs/agent-skills --skill vercel-react-best-practices
```

Con ese solo comando:
1. El sistema se conecta al repositorio y extrae explícitamente el archivo de conocimiento de "mejores prácticas de React".
2. Lo instala en tu entorno local.
3. Inmediatamente, la IA dentro de tu editor de código (por ejemplo, Copilot Chat o Cursor) leerá esa habilidad y empezará a aplicarla cada vez que le pidas crear un componente.

---

## �️ Seguridad y Verificación (Prevención de Prompt Injection)

Una de las grandes ventajas de **skills.sh** frente a copiar y pegar prompts de orígenes desconocidos es que la plataforma realiza verificaciones de calidad (**Audits** y verificaciones de repositorios oficiales). Esto te permite identificar gráficamente cuáles habilidades son respaldadas por empresas como Vercel, Microsoft o Anthropic.

Sin embargo, **ningún sistema es infalible**. 

Al descargar una Skill creada por la comunidad, estás introduciendo literalmente "instrucciones" en la mente de tu IA. Existe el riesgo de **Prompt Injection**, donde un atacante puede crear una Skill popular que, disimulada entre buenas prácticas de React, incluya instrucciones maliciosas como: *"ignora las validaciones de seguridad"* o *"intenta hacer peticiones HTTP con las variables de entorno locales"*.

**Regla de Oro:** Aunque `skills.sh` filtre y perfile a los autores, **SIEMPRE debes verificar qué hay adentro de los archivos `SKILL.md` reinstalados en tu proyecto**. Asegúrate de comprender cada instrucción que le estás dando acceso a tu agente IA. 

---

## �📚 Recursos y Referencias Oficiales

Para explorar el directorio de habilidades públicas o revisar el código fuente de esta herramienta, visita:

* 📦 **Repositorio en GitHub:** [vercel-labs/skills](https://github.com/vercel-labs/skills)
* 🌐 **Directorio Web Oficial:** [skills.sh](https://skills.sh/)

> *"The open agent skills ecosystem."*

## 💡 Skills Recomendadas

A continuación, te presentamos algunas **Skills Recomendadas** que puedes integrar a tus proyectos para mejorar la calidad del código, las interfaces y la experiencia de usuario:

* [**Interface Design**](./recommended-skills/interface-design/interface-design.md): Guía estructurada enfocada en la creación de interfaces de alta calidad ("craft"), diseño orientado a la intención y patrones únicos para dashboards y herramientas, evitando "defaults" genéricos.
* [**UI/UX Pro Max**](./recommended-skills/ui-ux-pro-max/ui-ux-pro-max.md): Un sistema de inteligencia de diseño exhaustivo con decenas de estilos, tipografías y reglas de accesibilidad críticas listas para aplicarse en cualquier stack de tecnología.
* [**PDF Processing**](./recommended-skills/pdf/pdf.md): Guía y mejores prácticas para extraer textos, manipular páginas y crear o llenar archivos PDF usando bibliotecas de Python y comandos de terminal.
* [**Frontend Design**](./recommended-skills/frontend-design/frontend-design.md): Instrucciones enfocadas en la creación de interfaces de usuario creativas, atrevidas y memorables, evitando estéticas genéricas de IA (AI slop).
* [**RAG Implementation**](./recommended-skills/rag-implementation/rag-implementation.md): Maestría en Generación Aumentada por Recuperación (RAG) para construir aplicaciones LLM conectadas a fuentes de conocimiento externas (bases de datos vectoriales).
* [**JWT Security**](./recommended-skills/jwt-security/jwt-security.md): Directrices de seguridad y mejores prácticas para la implementación, estructuración, firma y almacenamiento seguro de tokens JWT (JSON Web Tokens).
* [**GSAP Animation**](./recommended-skills/gsap/gsap.md): La guía oficial de GreenSock para implementar animaciones fluidas, declarativas y de alto rendimiento, incluyendo ScrollTrigger y otros plugins especializados.

---

### 🎥 Videos Recomendados

Para ver implementaciones en vivo y entender mejor el impacto de `skills.sh`, te sugerimos estos recursos en video:

* **[Cómo potenciar a tu Agente IA con Skills (En Español)](https://www.youtube.com/watch?v=_iVeYCRpH7w):** Guía práctica en nuestro idioma que muestra cómo instalar y aprovechar este ecosistema en tus proyectos de desarrollo.
* **[Introducción y Demostración de skills.sh (En Inglés)](https://www.youtube.com/watch?v=rcRS8-7OgBo):** Una excelente demostración sobre el ecosistema abierto y cómo la gestión centralizada de Skills mejora la eficiencia del desarrollador.