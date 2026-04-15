# 🗃️ El Estándar Web: `llms.txt`

A la hora de integrar IAs con plataformas que están documentadas en sitios web, los ingenieros se encontraron con una pared: el HTML moderno está lleno de componentes innecesarios, estilos (`CSS`), barras laterales de navegación e interactividad masiva (`JavaScript`). Todo esto confunde a un modelo de texto y gasta su ventana de tokens inútilmente intentando "leer" la página.

Aquí es donde entra en juego la estandarización mediante el uso de archivos **`llms.txt`**.

---

## 🏛️ ¿Qué es, quién lo propuso y por qué?

El concepto fue propuesto y popularizado a lo largo del año 2024 por comunidades enfocadas en IA Open Source, destacándose fuertemente la organización **Answer.AI** y teóricos defensores del acceso universal de la IA.

### El Propósito
Inspirándose en el histórico `robots.txt` (que le decía a los buscadores de Google de los años 90 qué carpetas no debía indexar), el `llms.txt` hace algo equivalente para la época de los LLMs.

En esencia, la propuesta sugiere que cualquier sitio web (por ejemplo, la documentación de *React* o *Tailwind*), deje expuesto en su ruta principal un archivo llamado `llms.txt`. 
Este archivo debe contener texto plano formateado estrictamente en **Markdown**, resumiendo al máximo todas las API, esquemas básicos de uso y conceptos, removiendo todo el "ruido visual" de la web tradicional.

De este modo, cuando un desarrollador le pide a la IA: *"Léete la documentación actualizada de Tailwind en tailwindcss.com e impleméntalo"*, la IA, en vez de leer todo el sitio web HTML, va directamente a descargar `https://tailwindcss.com/llms.txt` e ingiere los conocimientos en una fracción de segundo.

---

## ⚙️ Uso a nivel de Arquitectura

El paradigma establece que este archivo se consolida y despacha estáticamente, debiendo estar obligatoriamente alojado y ser servido desde la **raíz del dominio público** de un sitio web.

No contiene lógica de aplicación de back-end; se expone al cliente final y principalmente a constructores de bots (*Agent web scrapers*).

### Ejemplo de Árbol de Directorios del Servidor Web:

```text
/tu-proyecto-documentacion
├── public/
│   ├── css/
│   │   └── estilos-del-sitio.css
│   ├── index.html                 <-- (Para lectura humana)
│   ├── favicon.ico
│   ├── robots.txt                 <-- (Para scrapers clásicos como GoogleBot)
│   └── llms.txt                   <-- (Para consumo automatizado de asistentes de IA)
├── src/
└── package.json
```

**Flujo de funcionamiento:**
Un "Crawler" de IA que navega hasta tu sitio web o servicio lo primero que hace es ejecutar una simple petición `GET /llms.txt`. Si existe, ignora el parseo del formato HTML (`index.html`) y simplemente absorbe el Markdown ultracondensado, ahorrando tiempo de cómputo y mejorando radicalmente la eficacia de las respuestas que brinda a los usuarios que usen tu API o librería.