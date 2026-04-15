# 🤖 GitHub Copilot CLI / SDK

Esta herramienta es una utilidad de línea de comandos diseñada para ayudar a los desarrolladores a construir, aprender y recordar comandos complejos de shell directamente en su entorno de trabajo diario ("cmd", "PowerShell", "Bash", "Zsh"). Su objetivo es reducir el cambio de contexto, permitiendo consultar herramientas, traducir declaraciones naturales a comandos CLI y explicar errores de salida estándar directamente en la terminal.

> 💰 **Costo y Beneficios para Estudiantes:** Ten en cuenta que GitHub Copilot es una herramienta de pago. Sin embargo, si eres estudiante, puedes aplicar al [GitHub Student Developer Pack](https://education.github.com/pack) para obtener acceso gratuito a Copilot y a muchas otras herramientas de desarrollo esenciales.

**Recursos Oficiales:**
- 📘 [Documentación Oficial y Guías de Uso](https://github.com/features/copilot/cli?locale=es-419)
- 💻 [Repositorio del SDK (GitHub)](https://github.com/github/copilot-sdk)
- 🎥 [Video Educativo sobre Copilot CLI (en Español)](https://www.youtube.com/watch?v=XpQ7uUXuPHg)
- 🎥 [Video Educativo sobre Copilot CLI (en Inglés)](https://www.youtube.com/watch?v=v8dr7QcIiLU)

### **Instalación:**
Para instalar el paquete distribuido en Node, es aconsejable evitar conflictos de permisos de administrador con instalaciones globales. La mejor práctica es contar con `nvm`:

```bash
# Instalación global a través de NPM (versión > 16.x)
npm install -g @github/copilot
```

### **Autenticación en la Terminal:**
```bash
github-copilot-cli auth
```

---

## **¿Cómo Iniciar el Agente?**

Una vez autenticado, para levantar la interfaz y comenzar a interactuar con el asistente en la ruta actual de tu proyecto, simplemente ejecuta:

```bash
copilot
```

---

## **Modos de Operación**

Al ejecutar el SDK del agente en tu terminal, puedes transicionar entre diferentes niveles de autonomía para controlar cómo la IA interviene en tu proyecto:

1. **Modo Inicial / Interactivo (Default):** Es el modo con el que la herramienta arranca por defecto. En este nivel, el agente mantiene un diálogo tipo chat paso a paso contigo, esperando instrucciones directas y confirmaciones manuales antes de alterar scripts o ejecutar código.
2. **Modo PLAN:** En este modo de diseño, el agente evalúa tu petición, analiza tu entorno (archivos, logs) y genera una estrategia detallada paso a paso sobre cómo resolverá el problema. Es crucial para auditar cognitivamente a la IA antes de darle luz verde a modificar tu arquitectura.
3. **Modo Autopilot (Autopiloto):** El nivel de mayor autonomía. Una vez que se confía en el contexto provisto, el agente toma las riendas para ejecutar comandos, saltar entre carpetas, crear archivos o instalar dependencias de manera continua, limitando la necesidad de que apruebes cada acción por separado.

---

## **Comandos Interactivos y Skills**

Lo fundamental en el uso del SDK y de las sesiones de agente no es fijarse en ejecutar banderas de comandos en solitario, sino en comprender cómo invocar herramientas de contexto dentro de la sesión interactiva del modelo, usando barras diagonales (`/`):

- `/skills`: Permite listar o invocar las "habilidades" (skills) disponibles que tiene el agente (por ejemplo, buscar en Github, leer archivos del Workspace, consultar documentación, etc.).
- `/help`: Muestra la ayuda general del entorno y qué otras intenciones de barra diagonal están habilitadas en tu versión actual del CLI.

> **Nota de Aprendizaje 💡**: Antes de confirmar y ejecutar un comando generado en modo *Suggest*, acostumbra a pedirle al CLI que explique la propuesta. Comprender qué hace cada parámetro evitará que corras instrucciones destructivas en tu sistema anfitrión por accidente.
