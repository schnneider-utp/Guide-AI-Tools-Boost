# TestSprite MCP Server

**TestSprite** es un servidor MCP (Model Context Protocol) que potencia a tu agente de IA con capacidades de **testing automatizado de software**. Integrado como un servidor MCP, permite que tu agente de IA ejecute pruebas unitarias, de integración, end-to-end (E2E) y de regresión de forma autónoma, directamente desde tu editor de código o IDE favorito.

## 🌟 ¿Qué hace?

TestSprite actúa como un "QA Engineer" integrado en tu flujo de desarrollo. Le permite a tu agente de IA:

- **Ejecutar pruebas automatizadas**: Ejecuta pruebas unitarias, de integración y E2E sin configuración manual.
- **Generar casos de prueba**: Crea casos de prueba basados en el código y el comportamiento observado.
- **Debugging inteligente**: Identifica y sugiere correcciones para bugs detectados durante la ejecución de pruebas.
- ** testing de regresión**: Ejecuta conjuntos de pruebas para garantizar que nuevos cambios no rompan funcionalidades existentes.

## ⚙️ ¿Cómo funciona?

1. **Instalación via npx**: El servidor se instala como un paquete npm que se ejecuta localmente a través de `npx`.
2. **Configuración en el IDE**: Se configura en clientes como Cursor, Claude Code, Trae, Windsurf, VS Code o GitHub Copilot.
3. **Exposición de herramientas**: Una vez conectado, el servidor expone un conjunto de herramientas (herramientas MCP) que el agente puede invocar para ejecutar pruebas.
4. **Acceso a API Key**: Requiere una clave API gratuita que se genera desde el dashboard de TestSprite.

## 📋 Compatibilidad con Editores

TestSprite MCP Server es compatible con los principales editores y agentes de IA del mercado:

| Editor/Agente | Método de Instalación |
|---------------|---------------------|
| **Trae** | AI Sidebar → AI Management → MCP → Add from Marketplace |
| **Cursor** | One-click install link o configuración manual en Settings |
| **Claude Code** | Comando `claude mcp add` en terminal |
| **Windsurf** | Configuración manual en MCP settings |
| **VS Code** | Command Palette → MCP: Add Server |
| **GitHub Copilot** | Configuración manual en MCP settings |
| **Antigravity** | Manage MCP Servers → View raw config |

## 🚀 ¿En qué puede mejorar tu proyecto?

- **Calidad de software garantizada**: Tu agente de IA puede ejecutar pruebas automáticamente después de escribir código, detectando errores antes de que llegen a producción.
- **Reducción de carga de trabajo manual**: Elimina la necesidad de писать y ejecutar manualmente scripts de prueba.
- **Debugging más rápido**: El agente puede ejecutar pruebas específicas para identificar exactamente dónde falla el código.
- **Integración continua fluida**: Facilita la integración de pruebas en el flujo de desarrollo dirigido por IA.

## 🛠️ Requisitos e Instalación

### Requisitos Previos

1. **Editor Compatible**: Uno de los mencionados anteriormente (Cursor, VS Code, Trae, etc.)
2. **Cuenta de TestSprite**: [Regístrate gratuitamente](https://www.testsprite.com/auth/cognito/sign-up)
3. **Node.js >= 22**: [Descarga Node.js](https://nodejs.org/)
4. **API Key**: Generada desde el dashboard de TestSprite en Settings → API Keys

### Instalación General

Agrega esta configuración a los ajustes MCP de tu editor:

```json
{
  "mcpServers": {
    "TestSprite": {
      "command": "npx",
      "args": ["@testsprite/testsprite-mcp@latest"],
      "env": {
        "API_KEY": "tu-api-key-aqui"
      }
    }
  }
}
```

### Instalación en Claude Code

```bash
cd /ruta/de/tu/proyecto
claude mcp add TestSprite --env API_KEY=tu_api_key -- npx @testsprite/testsprite-mcp@latest
claude mcp list
```

### Verificación

Después de instalado, verifica que aparece un punto verde en el ícono del servidor MCP en tu editor. También puedes preguntarle a tu asistente: *"Ayúdame a testear este proyecto con TestSprite"*.

## 🔗 Recursos Oficiales

- **Documentación Oficial:** [docs.testsprite.com](https://docs.testsprite.com/mcp/getting-started/installation)
- **Sitio Web:** [testsprite.com](https://www.testsprite.com)
- **Repositorio GitHub:** [github.com/testspriteinc](https://github.com/testspriteinc)