# 🤖 Retrieval-Augmented Generation (RAG)

## Overview

EngageAI enhances AI recommendations using Retrieval-Augmented Generation (RAG).

Instead of relying solely on the language model, relevant context is retrieved from a curated knowledge base before generating responses.

---

# Workflow

```text
Knowledge Base
      │
      ▼
Markdown Documents
      │
      ▼
Chunking
      │
      ▼
Sentence Embeddings
      │
      ▼
FAISS Index
      │
      ▼
Similarity Search
      │
      ▼
Relevant Context
      │
      ▼
Groq LLM
      │
      ▼
Recommendation
```

---

# Components

- Markdown Knowledge Base
- Sentence Transformers
- FAISS Vector Store
- Groq LLM

---

# Benefits

- Domain-specific recommendations
- Reduced hallucinations
- Context-aware responses
- Faster retrieval