# MCP Config Generator para OpenCode

Una herramienta web minimalista con estética *dark terminal* diseñada para facilitar la adición de servidores **MCP (Model Context Protocol)** a tu entorno de [OpenCode](https://opencode.ai).

La plataforma toma cualquier bloque de código JSON extraído de documentaciones (como TestSprite, Chrome DevTools, o cualquier otro servidor MCP genérico) y lo convierte automáticamente al formato estricto que requiere OpenCode. 

Además, cuenta con una función de **guardado directo** que detecta tu sistema y modifica automáticamente el archivo `~/.config/opencode/opencode.json` de tu computadora sin que tengas que copiar y pegar manualmente.

## ✨ Características

- 🎨 Interfaz oscura y elegante con animaciones (GSAP).
- 🧠 Conversor inteligente (acepta JSON estricto o formatos relajados de JS).
- 🚀 Integración local: Edita directamente tu configuración local de OpenCode.
- ⚡ Construido con Astro, React y TypeScript para máxima velocidad.

---

## 🛠️ Instalación y Configuración

### Recomendación: Usar `pnpm`

Para este proyecto, recomendamos encarecidamente utilizar **`pnpm`** en lugar de `npm`. 
`pnpm` es mucho más rápido, eficiente con el espacio en disco (utiliza un sistema de enlaces simbólicos centralizado) y maneja las dependencias de manera más estricta, lo que evita errores comunes de módulos fantasmas.

Si no tienes `pnpm` instalado, puedes instalarlo globalmente ejecutando:
```bash
npm install -g pnpm
```

### Pasos para instalar

1. Abre tu terminal y dirígete a la carpeta del proyecto:
   ```bash
   cd web/mcp-config-generator
   ```

2. Instala las dependencias usando `pnpm`:
   ```bash
   pnpm install
   ```

---

## 🚀 Cómo ejecutarlo

Al ser una aplicación que interactúa directamente con el sistema de archivos de tu máquina (para poder modificar la configuración de OpenCode), **debe ejecutarse de manera local**.

Para iniciar el servidor de desarrollo, ejecuta:

```bash
pnpm run dev
```

1. Abre tu navegador y dirígete a la dirección que te indica la terminal (usualmente `http://localhost:4321`).
2. Pega el JSON de la documentación de algún servidor MCP.
3. Haz clic en **Convert to OpenCode**.
4. Ahora puedes hacer clic en **"🚀 Save directly to OpenCode"**. La aplicación ubicará tu carpeta de usuario local (`C:\Users\tu-usuario\.config\opencode\` en Windows o `~/.config/opencode/` en Mac/Linux) y actualizará el archivo `opencode.json` inyectando tu nuevo servidor de manera segura (fusionando, sin borrar lo que ya tenías).
