# RAG Implementation Skill

The **RAG Implementation** skill (Retrieval-Augmented Generation) turns your AI agent into an expert in the architecture and construction of LLM applications that need to answer questions based on external knowledge sources (own documents, vector databases).

## 🌟 What does it do?
Provides architectural strategies, advanced search patterns, vector database configurations (like Pinecone, Weaviate, or Chroma) and practical examples using LangGraph and LangChain to prevent hallucinations in your AI applications.

## ⚙️ How does it work?
Introduces the AI to a range of the best current tools and techniques for implementing RAG:
1. **Vector Databases & Embeddings**: Defines the best embedding models (like `voyage-3-large` or `text-embedding-3-large`) and how to connect to databases like Pinecone or pgvector.
2. **Advanced Retrieval Patterns**: Teaches patterns like Hybrid Search (Sparse + Dense), Multi-Query, Contextual Compression, and HyDE (Hypothetical Document Embeddings).
3. **Chunking Strategies (Fragmentation)**: Instructs the AI on how to correctly split long documents into semantic fragments, using token-based, Markdown headers, or recursive splitters, guaranteeing context retention.

## 🚀 How can it improve your project?
- **More Precise and Verifiable Answers**: When building a customer service chatbot or documentation assistant, the AI will implement techniques where it must necessarily cite the knowledge source (e.g., `[1]`, `[2]`).
- **Better Search Quality Results**: Your agent will use strategies like *Reranking* with *Cross-Encoders* to ensure the text fragments returned to the AI are always the most relevant.
- **Robust and Scalable Code**: It will provide production-ready Python code using asynchronous flows in LangGraph, facilitating the deployment of highly performant AI systems.

## 🛠️ Installation & Official Links

To install this skill in your project through `skills.sh`, use the following command:

```bash
npx skills add https://github.com/wshobson/agents --skill rag-implementation
```

- **GitHub Repository:** [wshobson/agents](https://github.com/wshobson/agents)