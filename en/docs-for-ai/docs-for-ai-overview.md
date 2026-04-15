# 📄 Documentación Optimizada para IA (DOP)

> Las IA leen los proyectos y la web de forma diferente a los humanos. Facilitarles la tarea de "leer" es la clave para no bloquear al agente con información irrelevante, *Web Scraping* lento o gasto inútil de *tokens*.

A medida que los agentes de IA se vuelven una parte fundamental del desarrollo de software, nos enfrentamos a un nuevo desafío: **el consumo de contexto.**

Navegar e indexar páginas web o repositorios hechos para humanos (con toneladas de jerarquía, estilos CSS, scripts o archivos irrelevantes) hace que los procesos de la IA se vuelvan lentos, caros y propensos a alucinaciones. Para mitigar esto, la comunidad técnica ha introducido nuevos estándares de "Documentación Optimizada para IA", donde el contenido es simplificado al extremo (usualmente en texto plano o Markdown).

---

## 📑 Clasificación de Estándares DOP

Esta sección explora las dos metodologías más importantes en la actualidad para proveer contexto optimizado a nuestras herramientas de Inteligencia Artificial dependiendo del entorno, ya sea en la web o dentro de nuestro repositorio local de código.

### 1. [El Estándar `llms.txt` (Para la Web)](llms-txt/)
Un archivo de texto plano ubicado en la raíz de los dominios, de manera idéntica a como funciona el `robots.txt` para Googlebot. Su función principal es darle un resumen estructurado, en Markdown, de lo que trata la página o la librería, evitando que el LLM intente renderizar toda la interfaz de la documentación.

### 2. [Reglas Locales con `.agents.md` / `.instructions.md`](agents/)
Archivos ocultos en las raíces de nuestros repositorios de código. Funcionan como *pre-prompts* o manuales de estilo que herramientas como Cursor, GitHub Copilot o Windsurf leen automáticamente antes de interactuar con el código, forzando a la IA a obedecer la arquitectura específica aprobada por tu equipo.