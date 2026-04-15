# 💻 Terminal AI Agents

> Los agentes de IA en la terminal son herramientas diseñadas para traer el contexto y el poder analítico de los grandes modelos de lenguaje (LLMs) directamente a tu consola. 

Entender qué son estos mecanismos es sencillo: en lugar de copiar errores de tu terminal y pegarlos en ChatGPT (o en el navegador), o escribir manualmente comandos abstractos, los Agentes de Terminal viven en tu shell de comandos. *Escuchan, leen logs, pueden ejecutar herramientas analíticas y sugieren o ejecutan comandos correctos en milisegundos.*

---

## 🛠️ Requisitos (Node.js)

Para que la gran mayoría de estos agentes de terminal funcionen, el requisito fundamental es tener instalado **Node.js** en tu sistema. Al instalar Node, también obtienes automáticamente **NPM** (Node Package Manager). NPM es el gestor de paquetes desde donde descargaremos e instalaremos las utilidades de consola (CLI) de estas herramientas de IA.

💡 **Pro Tip: Instala Node usando [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm)**

El método tradicional es descargar el instalador oficial desde la página de Node.js, pero **no te lo recomendamos**. Instalar Node directamente a nivel del sistema suele causar dolores de cabeza con los permisos, especialmente cuando intentamos instalar agentes o herramientas de forma global (usando la bandera `-g` en npm), arrojando bloqueos o errores de "Acceso Denegado".

Para una instalación profesional, limpia y sin fricciones, lo ideal es usar **[NVM](https://github.com/nvm-sh/nvm)** (o `nvm-windows` si estás en Windows):

1. **¿Qué es exactamente?** NVM es un administrador que encapsula e instala Node.js exclusivamente en el espacio de trabajo de tu usuario.
2. **Cero problemas de permisos:** Como todo vive en tu entorno de usuario, podrás ejecutar instalaciones globales (ej. `npm install -g @google/gemini-cli`) sin requerir permisos de administrador.
3. **Control total de versiones:** NVM te permite instalar varias versiones de Node en tu misma PC y saltar de una a otra en cuestión de segundos con un simple comando (por ejemplo, `nvm use 20` a `nvm use 22`).

*Asegúrate de tener NVM configurado y usa una versión estable de Node (LTS) antes de instalar los agentes que te mostramos a continuación.*

---

## 🗺️ Índice de Agentes por Terminal

Hemos separado la documentación de cada herramienta en su propio módulo y archivo de instrucciones. Ingresa a la que desees configurar:

### 1. [🤖 GitHub Copilot CLI / SDK](./copilot-sdk/copilot-cli-docs.md)
Herramienta oficial desarrollada por **GitHub (Microsoft)** desde su laboratorio de innovación *GitHub Next*. Es un cliente de consola impulsado por los modelos de OpenAI que traslada la arquitectura de su popular asistente directamente a la shell nativa del sistema operativo.

### 2. [✨ Gemini CLI](./gemini-cli/gemini-setup.md)
Un cliente de línea de comandos desarrollado y respaldado por **Google**. Funciona mediante un entorno de paquetes de Node.js (vía NPM) para interconectar la terminal directamente con la API fundacional de infraestructura de sus potentes modelos Gemini (Pro/Flash).

### 3. [🚀 OpenCode (Open-Source AI Agent)](./opencode/opencode-guide.md)
Proyecto de software libre (**Open-Source**) impulsado por la comunidad de desarrolladores y construido sobre ecosistemas de **Python**. Es un framework de agente autónomo que, en lugar de actuar como un simple generador de texto, integra un sistema cognitivo que procesa, edita archivos y ejecuta rutinas emulando a soluciones corporativas privativas (como Devin).
