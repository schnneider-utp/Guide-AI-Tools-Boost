# Introducción a los Plugins para Agentes de Inteligencia Artificial

Los plugins o complementos son extensiones que permiten a los agentes de Inteligencia Artificial (IA) interactuar con herramientas, bases de datos y sistemas externos. Por defecto, los modelos de lenguaje grandes (LLMs) operan en un entorno aislado, lo que significa que su conocimiento está limitado a la información con la que fueron entrenados y no pueden realizar acciones directas en el mundo real o en el entorno local del usuario. 

La integración de plugins resuelve esta limitación proporcionando un puente entre la lógica del de la IA y los recursos externos, permitiendo que el agente:
- **Ejecute acciones:** Leer o modificar archivos locales, hacer consultas a una base de datos o interactuar con APIs externas (como GitHub, Slack o servicios en la nube).
- **Consuma contexto dinámico:** Acceder a información en tiempo real, proporcionando respuestas más precisas y adaptadas al entorno de trabajo actual.
- **Especialice su comportamiento:** Adoptar roles específicos y seguir metodologías de codificación predefinidas mediante instrucciones personalizadas.

Al estructurar estas integraciones, se logra que la IA actúe no solo como un asistente conversacional, sino como una herramienta práctica e integrada en el flujo de desarrollo.

---

## Índice Temático

A continuación, se exploran las dos categorías principales de integración de funcionalidades adicionales para agentes de desarrollo:

### 1. [Model Context Protocol (MCP)](mcp-server/)
El MCP (Model Context Protocol) es una tecnología estandarizada ideada para establecer comunicaciones seguras entre los modelos de IA y las fuentes de datos locales o herramientas externas. En esta sección se aborda cómo funcionan los servidores MCP, su arquitectura y cómo permiten a la IA interactuar directamente con el entorno local o plataformas de terceros (bases de datos, repositorios, etc.).

### 2. [Skills (Habilidades Personalizadas)](skills/)
Las "Skills" son conjuntos de instrucciones estructuradas que especializan el comportamiento de un agente para tareas concretas y repetitivas. En lugar de establecer conexiones con sistemas externos, las Skills definen reglas, estándares y mejores prácticas de programación que el agente debe seguir al generar u optimizar código. En esta sección se explora su estructura, su funcionamiento y cómo implementarlas.
