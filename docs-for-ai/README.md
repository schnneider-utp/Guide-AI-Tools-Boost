# 📄 Documentación Optimizada para IA (DOP)

> Las IA leen de forma diferente que los humanos. Facilitarles la tarea de "leer" es la clave para no bloquear el agente con Web Scraping lento o tokens inútiles.

A medida que más agentes operan en nuestras máquinas, navegar e indexar páginas web hechas en HTML complejo (con toneladas de CSS y JS) hace que los procesos tarden minutos en lugar de segundos. Aquí entra la optimización.

---

## 🗃️ El Estándar `llms.txt`

Basado en el mismo principio de `robots.txt`, `llms.txt` es un archivo Markdown ultra simplificado que se coloca en la raíz de un dominio web o proyecto (ej. `https://midominio.com/llms.txt`).

### Ventajas:
1. **Velocidad de Lectura Absoluta:** Al estar en Markdown puro, la IA no necesita parsear el DOM (etiquetas HTML/CSS).
2. **Contexto Limpio:** Cero scripts, cero ruido de la interfaz; solo información sustancial (ej. reglas de la API de una librería recién lanzada).
3. **Reducción de Costos:** Menos tokens basura significa tokens más valiosos ahorrados en cada query.

---

## 📝 Configuración Local (`.agents.md` e `.instructions.md`)

Del lado del repositorio/proyecto, también puedes dejar "notas ancladas" usando ficheros para proveer reglas base.

- **`.instructions.md`**: Archivos que se cargan como pre-prompts cuando la IA abre el proyecto en VS Code o en la terminal, recordando al agente qué estándares de código seguir.
- **`.agents.md` / `copilot-instructions.md`**: Sitios donde el equipo de desarrollo anota *reglas de negocio* (ej. *"nunca borrar usuarios de la tabla, siempre poner is_active en false"* o *"usar axios en lugar de fetch"*). 

Las herramientas como *Cursor*, *GitHub Copilot* o *Devin* leen automáticamente estos ficheros antes de siquiera escribir la primera línea de código sugerida.# 📄 Documentación Optimizada para IA (DOP)

> Las IA leen de forma diferente que los humanos. Facilitarles la tarea de "leer" es la clave para no bloquear el agente con Web Scraping lento o tokens inútiles.

A medida que más agentes operan en nuestras máquinas, navegar e indexar páginas web hechas en HTML complejo (con toneladas de CSS y JS) hace que los procesos tarden minutos en lugar de segundos. Aquí entra la optimización.

---

## 🗃️ El Estándar \llms.txt\

Basado en el mismo principio de \
obots.txt\, \llms.txt\ es un archivo Markdown ultra simplificado que se coloca en la raíz de un dominio web o proyecto (ej. \https://midominio.com/llms.txt\).

### Ventajas:
1. **Velocidad de Lectura Absoluta:** Al estar en Markdown puro, la IA no necesita parsear el DOM (etiquetas HTML/CSS).
2. **Contexto Limpio:** Cero scripts, cero ruido de la interfaz; solo información sustancial (ej. reglas de la API de una librería recién lanzada).
3. **Reducción de Costos:** Menos tokens basura significa tokens más valiosos ahorrados en cada query.

---

## 📝 Configuración Local (\.agents.md\ e \.instructions.md\)

Del lado del repositorio/proyecto, también puedes dejar "notas ancladas" usando archivos ocultos.

- **\.instructions.md\**: Archivos que se cargan como pre-prompts cuando la IA abre el proyecto en VS Code o en la terminal, recordando al agente qué estándares de código seguir.
- **\.agents.md\ / \copilot-instructions.md\**: Sitios donde el equipo de desarrollo anota *reglas de negocio* (ej. *"nunca borrar usuarios de la tabla, siempre poner is_active en false"* o *"usar axios en lugar de fetch"*). 

Las herramientas como *Cursor*, *GitHub Copilot* o *Devin* leen automáticamente estos ficheros antes de siquiera escribir la primera línea de código sugerida.
