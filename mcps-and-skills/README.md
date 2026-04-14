# ⚡ Potenciadores: MCPs y Skills

> La inteligencia sin contexto son solo palabras; el contexto brinda precisión y resultados hiper-ajustados.

Esta sección se dedica a explorar cómo romper el aislamiento de los LLMs conectándolos con nuestras bases de datos locales, APIs o instrucciones arquitectónicas específicas mediante protocolos estándar y "Skills".

---

## 🎯 Model Context Protocol (MCP)

El **Model Context Protocol (MCP)** es un puente estándar impulsado por creadores de LLMs (como Anthropic) para exponer de forma segura datos locales (tu código, base de datos, JIRA, Slack, etc.) a la IA.

### ¿Por qué utilizar MCPs?
- **Desbloqueo de Datos Locales:** La IA puede ejecutar consultas en SQLite, PostgreSQL local, o leer logs sin salir de tu editor.
- **Flujos Multi-herramienta:** Un solo modelo puede estar conectado simultáneamente al MCP de tu AWS y al de Github.

**Ejemplo de uso de un MCP de GitHub en el agente local:**
> *"Agent, revisa la PR #45 de GitHub e implementa esos cambios en mi rama actual".*
> El agente llamará al servidor MCP local (GitHub server) para traer el diff y aplicarlo.

---

## 🧠 Skills (Habilidades Personalizadas)

Las **Skills** son paquetes de instrucciones detalladas ocultas en archivos `SKILL.md` que un agente (como GitHub Copilot Chat) puede leer cuando necesitas tareas de nicho (ej. diseño CSS experto, arquitecturas Docker avanzadas).

### ¿Cómo funcionan?
1. Creas un archivo (ej. `frontend-design.md`) con las reglas de estilo de tu empresa.
2. Invocas la Skill desde el chat (`@agent usa la skill frontend-design para esta tarjeta`).
3. El agente acatará tu stack tech, evitará errores clásicos ya mapeados allí, y generará un output súper preciso.# ⚡ Potenciadores: MCPs y Skills

> La inteligencia sin contexto son solo palabras; el contexto brinda precisión y resultados hiper-ajustados.

Esta sección se dedica a explorar cómo romper el aislamiento de los LLMs conectándolos con nuestras bases de datos locales, APIs o instrucciones arquitectónicas específicas mediante protocolos estándar y "Skills".

---

## 🎯 Model Context Protocol (MCP)

El **Model Context Protocol (MCP)** es un puente estándar impulsado por creadores de LLMs (como Anthropic) para exponer de forma segura datos locales (tu código, base de datos, JIRA, Slack, etc.) a la IA.

### ¿Por qué utilizar MCPs?
- **Desbloqueo de Datos Locales:** La IA puede ejecutar consultas en SQLite, PostgreSQL local, o leer logs sin salir de tu editor.
- **Flujos Multi-herramienta:** Un solo modelo puede estar conectado simultáneamente al MCP de tu AWS y al de Github.

**Ejemplo de uso de un MCP de GitHub en el agente local:**
> *"Agent, revisa la PR #45 de GitHub e implementa esos cambios en mi rama actual".*
> El agente llamará al servidor MCP local (GitHub server) para traer el dif y aplicarlo.

---

## 🧠 Skills (Habilidades Personalizadas)

Las **Skills** son paquetes de instrucciones detalladas `SKILL.md` que un agente (como GitHub Copilot Chat) puede leer cuando necesitas tareas de nicho (ej. diseño CSS experto, arquitecturas Docker avanzadas).

### ¿Cómo funcionan?
1. Creas un archivo (ej. `frontend-design.md`) con las reglas de estilo de tu empresa.
2. Invocas la Skill desde el chat (`@agent usa la skill frontend-design para esta tarjeta`).
3. El agente acatará tu stack tech, evitará errores clásicos ya mapeados allí, y generará un output súper preciso.