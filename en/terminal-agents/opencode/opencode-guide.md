# 🚀 OpenCode (Open-Source AI Agent)

OpenCode es una aproximación de código abierto orientada a equiparar o seguir los pasos de agentes de ingeniería autónomos (como Devin). A diferencia de una simple CLI que solo procesa texto, OpenCode es un **agente completo de resolución de problemas**, capaz de ver tu editor, crear carpetas, instalar dependencias, ejecutar scripts y corregir sus propios errores corriendo directamente desde tu terminal.

> 💰 **Capa Gratuita y Libertad de Modelos:** El mayor diferencial de este proyecto es que no te restringe a un modelo único de pago. OpenCode ofrece una **capa gratuita enormemente generosa** donde puedes elegir entre múltiples modelos de vanguardia (LLMs) para que actúen como el cerebro de tu agente. **Recomendación Principal:** Utiliza el modelo **MiniMax**, ya que otorga el mejor balance coste-rendimiento en su capa gratuita para operaciones de código complejas.

**Recursos Oficiales:**
- 📘 [Página Principal del Proyecto](https://opencode.ai)
- 💻 [Repositorio Oficial en GitHub](https://github.com/anomalyco/opencode)
- 🎥 [Video Educativo sobre OpenCode (en Español)](https://www.youtube.com/watch?v=2gO8WyctqMk)
- 🎥 [Video Educativo sobre OpenCode (en Inglés)](https://www.youtube.com/watch?v=e9j2iEwJru0)

---

### **Requisitos e Instalación (vía npm y NVM):**
Al igual que la gran mayoría del ecosistema actual de agentes, está construido en Node.js. Como buena práctica, instalarlo a nivel global usando NPM debe hacerse mediante NVM para evitar fallos de permisos raíz:

```bash
# Instalación global a través de NPM
npm i -g opencode-ai
```

---

## **¿Cómo Iniciar el Agente?**

A diferencia de llamadas de un solo uso, con OpenCode habitualmente levantarás una terminal completa dedicada a él. Únicamente debes correr este comando en la raíz de tu proyecto:

```bash
opencode
```
*(Iniciará el entorno principal donde puedes empezar a hablarle natural, darle indicaciones de tu proyecto y transicionar entre los diferentes modos).*

---

## **Modos de Operación**

Al igual que otros agentes avanzados, OpenCode divide sus capacidades en diferentes modos cognitivos para asegurar procesos más controlables:

1. **Modo Plan (Arquitectura):** Su objetivo es trazar una hoja de ruta antes de tocar una sola línea de código. En este modo, el agente lee el estado actual de tu proyecto, analiza el problema y te presenta un esquema de pasos. Es ideal para que tú valides la arquitectura antes de que comience a trabajar.
2. **Modo Builder (Ejecución):** Una vez validado el plan (o si saltas directamente a construir), el agente asume el rol de ejecutor. En esta etapa posee total autonomía para ejecutar comandos de bash, escribir/borrar archivos, instalar dependencias por NPM y autocorregirse leyendo los errores (`stderr`) de la consola en tiempo real.

---

## **Comandos Interactivos y Configuración (/)**

Dentro de la sesión interactiva, tienes control total sobre la IA a través de comandos directos usando la barra diagonal `/`:

- `/model`: Cambia al vuelo el motor de lenguaje que estás utilizando (ej. `/model minimax` o `/model gpt-4o`).
- `/session`: Administra, crea, lista o cambia el contexto o historial temporal en caso de manejar diferentes tareas en paralelo en tu repositorio.
- `/skills`: Aplica habilidades personalizadas (fragmentos con reglas e instrucciones de código expertas) para tareas muy de nicho.
- `/mcp`: Interactúa de forma directa con servidores de contexto (Model Context Protocol), brindando herramientas para leer bases de datos, APIs de tickets u otros entornos locales en un entorno seguro.

### **Facilidad de Integración de Skills y MCPs**
Una de las mayores ventajas arquitectónicas de OpenCode frente a alternativas de terminal más herméticas (como herramientas al estilo de Claude Code) es su **facilidad para escalar capacidades**. Gracias a que su diseño de sistema de archivos establece rutas o carpetas generalizadas estándar predecibles, basta con arrojar tus instrucciones (`.md`) o configuraciones MCP para que el entorno interactivo las absorba globalmente, evitando tener que configurar dependencias pesadas manualmente para personalizar al agente.

> **Consejo de Seguridad 💡**: Debido a la altísima autonomía del agente (especialmente en Modo Builder, donde puede sobrescribir archivos del disco), asegúrate siempre de tener tu control de versiones limpio y actualizado (`git commit`) en la ruta raíz. Esto te permitirá hacer un simple `git revert` sin dolor de cabeza si llega a ocurrir un accidente de código masivo.
