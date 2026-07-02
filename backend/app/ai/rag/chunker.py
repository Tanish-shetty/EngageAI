"""
==========================================
Document Chunker
==========================================

Splits markdown/text documents into
overlapping chunks for embedding.
"""

from pathlib import Path

from .config import (
    KNOWLEDGE_BASE,
    CHUNK_SIZE,
    CHUNK_OVERLAP,
)


class DocumentChunker:

    @staticmethod
    def load_documents():
        """
        Load every markdown file.
        """

        documents = []

        for file in KNOWLEDGE_BASE.rglob("*.md"):

            with open(
                file,
                "r",
                encoding="utf-8",
            ) as f:

                documents.append(
                    {
                        "path": str(file),
                        "text": f.read(),
                    }
                )

        return documents

    @staticmethod
    def chunk_text(text: str):

        chunks = []

        start = 0

        while start < len(text):

            end = start + CHUNK_SIZE

            chunks.append(text[start:end])

            start += CHUNK_SIZE - CHUNK_OVERLAP

        return chunks

    @classmethod
    def build_chunks(cls):

        all_chunks = []

        documents = cls.load_documents()

        for document in documents:

            chunks = cls.chunk_text(
                document["text"]
            )

            for index, chunk in enumerate(chunks):

                all_chunks.append(
                    {
                        "source": document["path"],
                        "chunk_id": index,
                        "content": chunk,
                    }
                )

        return all_chunks