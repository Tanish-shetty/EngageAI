from pathlib import Path

from app.core.logger import logger

from .chunker import DocumentChunker
from .embedder import EmbeddingService
from .registry import DocumentRegistry
from .vector_store import VectorStore


class IndexBuilder:
    def __init__(self):
        self.registry = DocumentRegistry()

    def needs_rebuild(self) -> bool:
        """
        Check whether any markdown file has changed.
        """

        files = KNOWLEDGE_BASE.rglob("*.md")

        for file in files:
            if self.registry.has_changed(file):
                return True

        return False

    def build(self) -> bool:
        """
        Rebuild the complete FAISS index.
        """

        try:
            logger.info("Starting vector store rebuild...")

            chunks = DocumentChunker.build_chunks()

            logger.info(f"Loaded {len(chunks)} chunks.")

            if not chunks:
                logger.warning("No chunks found. Skipping index creation.")
                return False

            texts = [chunk["content"] for chunk in chunks]

            embeddings = EmbeddingService.encode(texts)

            store = VectorStore(
                dimension=embeddings.shape[1]
            )

            store.add(
                embeddings=embeddings,
                metadata=chunks,
            )

            store.save()

            logger.info("FAISS index saved successfully.")

            files = KNOWLEDGE_BASE.rglob("*.md")

            for file in files:
                self.registry.update(file)

            self.registry.remove_deleted()
            self.registry.save()

            logger.info("Registry updated successfully.")
            logger.info("Vector store rebuilt successfully.")

            return True

        except Exception as e:
            logger.exception(f"Failed to rebuild vector store: {e}")
            return False