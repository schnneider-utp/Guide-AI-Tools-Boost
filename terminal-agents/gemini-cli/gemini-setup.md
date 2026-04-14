# ✨ Gemini CLI

Un cliente de línea de comandos oficial desarrollado por Google para conectar tu terminal directamente con la familia de modelos Gemini. Dado que aprovecha las enormes ventanas de contexto de su infraestructura (como el modelo 1.5 Pro/Flash con más de 1 millón de tokens), es ideal para analizar masivas cantidades de logs, leer output de errores inmensos o buscar patrones en archivos pesados.

> 💰 **Capa Gratuita y Costos:** Aunque interactuar con las APIs base de los grandes modelos de lenguaje suele tener un precio, Gemini ofrece una **capa gratuita (Free Tier) sumamente generosa** mediante Google AI Studio, siendo más que suficiente para las necesidades y tareas diarias de la mayoría de los desarrolladores en local.

**Recursos Oficiales:**
- 📘 [Página Principal del Proyecto](https://geminicli.com)
- 💻 [Repositorio Oficial en GitHub](https://github.com/google-gemini/gemini-cli)
- 🎥 [Video Educativo sobre Gemini CLI (en Español)](https://www.youtube.com/watch?v=Ib9f811Z5zg)
- 🎥 [Video Educativo sobre Gemini CLI (en Inglés)](https://www.youtube.com/watch?v=WxXUbiz6RQE)

### **Instalación (vía npm y NVM):**
Debido a que utiliza dependencias globales, recomendamos usar NVM para la instalación en Windows evitando problemas de acceso.

```bash
# Instalación global a través de NPM
npm install -g @google/gemini-cli
```

### **Autenticación (Cuenta Personal):**
Para utilizar la herramienta, en lugar de manejar manualmente variables de entorno, puedes autenticarte rápidamente con tu propia cuenta de Google asociada al servicio de desarrollador:

```bash
# Iniciar flujo de autenticación en el navegador
gemini login
```
*(Al ejecutar esto, se abrirá una ventana en tu navegador para que inicies sesión en Google de forma segura y autorices la CLI en tu estación de trabajo).*

---

## **¿Cómo Iniciar el Agente?**

Dependiendo de tus necesidades y flujo de trabajo, la CLI de Gemini te permite interactuar en dos formas sin salir de tu consola:

1. **Entorno Interactivo / Conversacional:** Si prefieres mantener un historial o charlar sobre un problema extenso en un entorno completo anclado a tu proyecto:
   ```bash
   gemini 
   ```
2. **Llamadas Rápidas Únicas:** Ideal para automatizaciones, buscar algo rápido de comandos o encadenar resultados (*pipes*). No requiere iniciar un entorno sino decirle qué hacer directamente en el bash:
   ```bash
   gemini ask "¿Cómo busco un error específico en mis logs de Linux?"
   ```

---

## **Beneficios y Características Clave**

Actualmente este cliente opera de una manera bastante directa e imperativa y, a diferencia de otros de la lista, por el momento no cuenta con modos complejos de planeación autónoma (Autopilot). Sin embargo, brilla en los siguientes escenarios:

- **Contexto Inmenso:** Su principal fuerte es "ingerir" toneladas de texto (logs caóticos, volcados de memoria, lecturas de bases de datos completas).
- **Interoperabilidad UNIX:** Está diseñado para ser un eslabón activo encadenado con otras salidas de la terminal a través de cañerías virtuales (*pipes*).

### **Sesiones Interactivas y Cambio Rápido de Modelos (/)**
Como te explicamos en la inicialización, si abres una terminal de conversación continua tecleando tan solo `gemini`, el agente te da acceso a comandos de configuración usando la diagonal `/`.

Si quieres poner el modelo en **su estado más rápido**, puedes cambiar explícitamente hacia la versión *Flash* (que consume menos tokens, resuelve en milisegundos y suele ser la más recomendable para la shell):
```
/model gemini-1.5-flash
````

