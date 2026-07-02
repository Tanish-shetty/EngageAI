"""
=========================================
Embedding Service
=========================================

Creates vector embeddings using
SentenceTransformers.

The embedding model is loaded only once
(singleton pattern).
"""

from sentence_transformers import SentenceTransformer
import numpy as np

from .config import EMBEDDING_MODEL


class EmbeddingService:
    _model = None

    @classmethod
    def get_model(cls):
        """
        Load embedding model only once.
        """
        if cls._model is None:
            print(f"Loading embedding model: {EMBEDDING_MODEL}")
            cls._model = SentenceTransformer(EMBEDDING_MODEL)

        return cls._model

    @classmethod
    def encode(cls, texts):
        """
        Generate embeddings for a list of texts.
        """
        model = cls.get_model()

        embeddings = model.encode(
            texts,
            convert_to_numpy=True,
            normalize_embeddings=True,
            show_progress_bar=True,
        )

        return embeddings.astype(np.float32)