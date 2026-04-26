# Chrome DevTools MCP Server

**Chrome DevTools** es un servidor MCP (Model Context Protocol) desarrollado por el equipo oficial de Chrome DevTools de Google. Permite que tu agente de IA controle e inspeccione un navegador Chrome en vivo, actuajabdo como un puente entre la IA y el poder completo de las Chrome Developer Tools para automatización confiable, debugging en profundidad y análisis de rendimiento.

## 🌟 ¿Qué hace?

Chrome DevTools MCP le otorga a tu agente de IA control total sobre un navegador Chrome:

- **Automatización de navegador**: Clickear, escribir texto, navegar entre páginas, manejar diálogos, subir archivos de forma programática.
- **Debugging avanzado**: Analizar solicitudes de red, tomar capturas de pantalla, revisar mensajes de consola con stack traces source-mapped.
- **Análisis de rendimiento**: Grabar traces de rendimiento y extraer insights accionables usando Chrome DevTools.
- **Gestión de extensiones**: Instalar, listar, recargar y desinstalar extensiones de Chrome.
- **Screencast y memoria**: Tomar instantáneas de memoria y usar herramientas experimentales de screencast.

## ⚙️ ¿Cómo funciona?

1. **Instalación via npx**: El servidor se instala como un paquete npm que controla el navegador usando **Puppeteer**.
2. **Inicio automático de Chrome**: Por defecto, el servidor inicia una instancia de Chrome con un perfil dedicado.
3. **Exposición de herramientas MCP**: El servidor expone más de 30 herramientas organizadas en categorías (input, navegación, red, rendimiento, debugging, extensiones, memoria).
4. **Conexión a Chrome existente**: También puede conectarse a una instancia de Chrome ya ejecutándose via debugging port o WebSocket.

## 📋 Compatibilidad con Editores

Chrome DevTools MCP es compatible con una amplia lista de agentes y editores:

| Editor/Agente | Método de Instalación |
|---------------|---------------------|
| **Claude Code** | `claude mcp add chrome-devtools --scope user npx chrome-devtools-mcp@latest` |
| **Cursor** | Botón de instalación o Settings → MCP → New MCP Server |
| **VS Code / Copilot** | Command Palette → MCP: Add Server o plugin |
| **Gemini CLI** | `gemini mcp add chrome-devtools npx chrome-devtools-mcp@latest` |
| **Windsurf** | Configuración MCP en `.windsurf/config.mcp.json` |
| **OpenCode** | Configuración en `~/.config/opencode/opencode.json` |
| **Codex** | `codex mcp add chrome-devtools -- npx chrome-devtools-mcp@latest` |
| **Antigravity** | Configuración en `mcp_config.json` |

(Consulta la documentación oficial para más opciones de instalación)

## 🚀 ¿En qué puede mejorar tu proyecto?

- **Automatización de pruebas E2E**: Tu agente puede automatizar flujos de usuario en el navegador sin herramientas externas adicionales.
- **Debugging visual**: puede tomar capturas de pantalla, analizar console logs y revisar solicitudes de red para entender errores.
- **Análisis de rendimiento web**: Puede grabar performance traces y analizar métricas como LCP, FID, CLS directamente desde el navegador real.
- **Depuración sin salir del IDE**: El agente puede hacer debugging remoto directamente desde tu editor de código, sin necesidad de abrir DevTools manualmente.

## 🛠️ Requisitos e Instalación

### Requisitos Previos

1. **Node.js v20.19+**: [Descarga Node.js](https://nodejs.org/)
2. **Chrome estable**: Versión actual de Google Chrome o Chrome for Testing.
3. **npm**: Gestor de paquetes de Node.js.

### Instalación General

Agrega esta configuración a los ajustes MCP de tu editor:

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest"]
    }
  }
}
```

### Modo Slim (B��sico)

Si solo necesitas tareas básicas de navegador:

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest", "--slim", "--headless"]
    }
  }
}
```

### Opciones Avanzadas

- `--headless`: Ejecutar sin interfaz gráfica.
- `--channel=canary|dev|beta|stable`: Canal de Chrome a usar.
- `--browser-url`: Conectar a una instancia de Chrome existente.
- `--isolated`: Usar un directorio de usuario temporal que se limpia automáticamente.

### Verificación

Pregunta a tu asistente: *"Check the performance of https://developers.chrome.com"*

El servidor debería abrir el navegador y grabar un trace de rendimiento.

## ⚠️ Limitaciones Conocidas

- Solo soporta Google Chrome y Chrome for Testing oficialmente.
- Las herramientas de rendimiento envían URLs a la API de Google CrUX para datos de experiencia de usuario (puede desactivarse con `--no-performance-crux`).
- Recopila estadísticas de uso anónimas para mejorar la herramienta (puede desactivarse con `--no-usage-statistics`).

## 🔗 Recursos Oficiales

- **Documentación Oficial:** [github.com/ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)
- **Referencia de Herramientas:** [docs/tool-reference.md](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/tool-reference.md)
- **Chrome DevTools Frontend:** [github.com/ChromeDevTools/devtools-frontend](https://github.com/ChromeDevTools/devtools-frontend)