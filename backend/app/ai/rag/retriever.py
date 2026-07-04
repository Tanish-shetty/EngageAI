"""
=========================================
Semantic Retriever
=========================================

Searches the FAISS vector store
for the most relevant chunks.
"""

from .embedder import EmbeddingService
from .vector_store import VectorStore


class Retriever:

    def __init__(self):

        self.store = VectorStore(dimension=384)
        self.store.load()

    def retrieve(
        self,
        query: str,
        top_k: int = 5,
    ):

        embedding = EmbeddingService.encode([query])

        return self.store.search(
            embedding,
            top_k=top_k,
        )