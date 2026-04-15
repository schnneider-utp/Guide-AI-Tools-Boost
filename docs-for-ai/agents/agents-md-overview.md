# 📝 Reglas de Proyecto: `.agents.md` e `.instructions.md`

Mientras que `llms.txt` se ocupa de facilitar la lectura de la documentación pública en la web, surge otra necesidad internamente en los equipos de desarrollo: **alinear la inteligencia artificial embebida en el editor (IDE) a la arquitectura de su proyecto privado.**

Para ello, nace el estándar de archivos de configuración local como `.agents.md` (y su variante `.instructions.md`), una solución unificada para que cualquier agente lea el contexto.

---

## 🏛️ ¿Quién lo propuso y por qué?

Esta metodología no fue propuesta mediante un estándar web universal, sino impulsada "de facto" por los propios fabricantes de IDEs impulsados por IA (como **GitHub Copilot, Cursor, Windsurf y Devin**).

### El Problema
Por defecto, si le pides a una IA en el editor *"crea un controlador de autenticación"*, generará código basándose en el estándar genérico que aprendió de sus datos de entrenamiento. Sin embargo, en tu empresa quizás exijan el uso de un framework en particular (ej. *NestJS con inyección de dependencias*), el uso exclusivo de `fetch` y no `axios`, o una jerarquía de carpetas atípica.

### La Solución
Se estandarizó la práctica de crear "notas ancladas" o archivos de "System Prompt" guardados junto con el código (en el repositorio), de forma que cualquier programador del equipo, al abrir el proyecto con su IA, fuerce al agente a leer las reglas de la casa y acatar dichas convenciones.

---

## ⚙️ Uso a nivel de Arquitectura

Su implementación es sumamente sencilla. La regla principal es que el archivo `.agents.md` (o `.instructions.md`) debe vivir directamente en la **raíz de tu repositorio**, asegurando que se suba al control de versiones (Git) y rija para todos los que clonen el proyecto.

Al estar en la raíz, sirve como un único punto de verdad agnóstico a la herramienta, evitando configurar múltiples archivos por cada IDE que use tu equipo.

### Ejemplo de Árbol de Directorios:

```text
/mi-proyecto
├── src/
│   ├── index.js
│   └── app.js
├── .agents.md                     <-- (Reglas y directrices unificadas para el agente IA)
├── .gitignore
├── package.json
└── README.md
```

**Flujo de funcionamiento:**
Cuando un desarrollador abre el proyecto y hace la primera pregunta en su chat, el agente escanea la raíz buscando el archivo `.agents.md`. El contenido del archivo entra invisiblemente al encabezado (*System Prompt*) de la conversación, afectando desde ese momento el código generado.