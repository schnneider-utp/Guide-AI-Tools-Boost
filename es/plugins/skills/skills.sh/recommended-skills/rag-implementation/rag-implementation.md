# RAG Implementation Skill

La skill **RAG Implementation** (Retrieval-Augmented Generation) convierte a tu agente IA en un experto en la arquitectura y construcción de aplicaciones de LLM que necesitan responder preguntas basándose en fuentes de conocimiento externas (documentos propios, bases de datos vectoriales).

## 🌟 ¿Qué hace?
Proporciona estrategias arquitectónicas, patrones de búsqueda avanzados, configuraciones de bases de datos vectoriales (como Pinecone, Weaviate o Chroma) y ejemplos prácticos utilizando LangGraph y LangChain para evitar alucinaciones en tus aplicaciones de IA.

## ⚙️ ¿Cómo funciona?
Introduce a la IA un abanico de las mejores herramientas y técnicas actuales para implementar RAG:
1. **Bases de Datos y Embeddings**: Define cuáles son los mejores modelos de *embeddings* (como `voyage-3-large` o `text-embedding-3-large`) y cómo conectarse a bases como Pinecone o pgvector.
2. **Patrones de Recuperación Avanzados**: Enseña patrones como la Búsqueda Híbrida (Sparse + Dense), Multi-Query, Contextual Compression, y HyDE (Hypothetical Document Embeddings).
3. **Estrategias de Fragmentación (Chunking)**: Instruye a la IA sobre cómo separar correctamente los documentos largos en fragmentos semánticos, usando divisores basados en tokens, encabezados Markdown o recursividad, garantizando la retención del contexto.

## 🚀 ¿En qué puede mejorar tu proyecto?
- **Respuestas Más Precisas y Verificables**: Al construir un chatbot de servicio al cliente o un asistente de documentación documental, la IA implementará técnicas donde obligatoriamente debe citar la fuente del conocimiento (ej. `[1]`, `[2]`).
- **Mejor Calidad en los Resultados de Búsqueda**: Tu agente usará estrategias como *Reranking* (reordenamiento) con *Cross-Encoders* para asegurarse de que los fragmentos de texto devueltos a la IA sean siempre los más relevantes.
- **Código Robusto y Escalable**: Te proveerá de código Python listo para producción usando flujos asíncronos en LangGraph, facilitando el despliegue de sistemas IA altamente performantes.

## 🛠️ Instalación y Enlaces Oficiales

Para instalar esta skill en tu proyecto a través de `skills.sh`, utiliza el siguiente comando:

```bash
npx skills add https://github.com/wshobson/agents --skill rag-implementation
```

- **Repositorio de GitHub:** [wshobson/agents](https://github.com/wshobson/agents)