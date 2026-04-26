# PDF Skill

La skill **PDF** es una guía de procesamiento y manipulación exhaustiva diseñada para dotar a la IA de todo el conocimiento necesario para operar con archivos PDF, desde tareas básicas hasta extracciones complejas.

## 🌟 ¿Qué hace?
Proporciona instrucciones y ejemplos de código probados (principalmente en Python, pero también con herramientas de línea de comandos) para extraer texto y tablas, fusionar documentos, dividir páginas, rotar, agregar marcas de agua, y hasta realizar OCR (Reconocimiento Óptico de Caracteres) sobre archivos PDF escaneados.

## ⚙️ ¿Cómo funciona?
La skill funciona como un manual de referencia rápido al que el agente recurre automáticamente cuando mencionas o necesitas trabajar con un `.pdf`. En lugar de intentar "adivinar" cómo usar una biblioteca, la IA consultará:
1. **Bibliotecas de Python**: Uso correcto de `pypdf` para operaciones básicas, `pdfplumber` para extraer texto y tablas manteniendo el diseño, o `reportlab` para crear PDFs desde cero.
2. **Herramientas de Terminal CLI**: Instrucciones para comandos útiles usando `poppler-utils` (pdftotext), `qpdf`, y `pdftk`.
3. **Casos Avanzados**: Soluciones preparadas para proteger con contraseña, extraer imágenes internas o hacer OCR con `pytesseract`.

## 🚀 ¿En qué puede mejorar tu proyecto?
- **Evita errores de alucinación**: Muchos agentes fallan al tratar de parsear o extraer tablas complejas de un PDF. Esta skill le da el enfoque óptimo (ej. usar `pdfplumber` o un script `pandas` específico).
- **Acelera la manipulación documental**: Generar, cortar o proteger PDFs lleva segundos cuando la IA ya tiene en su contexto el código exacto y las mejores prácticas.
- **Creación de documentos precisa**: Al generar reportes, el agente sabrá exactamente cómo lidiar con estilos, formato de párrafos y estructuras multi-página utilizando `reportlab`.

## 🛠️ Instalación y Enlaces Oficiales

Para instalar esta skill en tu proyecto a través de `skills.sh`, utiliza el siguiente comando:

```bash
npx skills add https://github.com/anthropics/skills --skill pdf
```

- **Repositorio de GitHub:** [anthropics/skills](https://github.com/anthropics/skills)