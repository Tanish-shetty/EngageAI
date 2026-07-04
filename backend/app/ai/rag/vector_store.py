import json
from datetime import datetime

import faiss
import numpy as np

from .config import (
    EMBEDDING_MODEL,
    FAISS_INDEX_PATH,
    METADATA_PATH,
    STATISTICS_PATH,
)


class VectorStore:

    def __init__(self, dimension: int):
        self.dimension = dimension
        self.index = faiss.IndexFlatIP(dimension)
        self.metadata = []

    def add(self, embeddings: np.ndarray, metadata: list):
        self.index.add(embeddings)
        self.metadata.extend(metadata)

    def save(self):

        faiss.write_index(self.index, str(FAISS_INDEX_PATH))

        with open(METADATA_PATH, "w", encoding="utf-8") as f:
            json.dump(
                self.metadata,
                f,
                indent=4,
                ensure_ascii=False,
            )

        stats = {
            "embedding_model": EMBEDDING_MODEL,
            "dimension": self.dimension,
            "chunks": len(self.metadata),
            "last_updated": datetime.utcnow().isoformat(),
        }

        with open(STATISTICS_PATH, "w", encoding="utf-8") as f:
            json.dump(stats, f, indent=4)

    def load(self):

        self.index = faiss.read_index(str(FAISS_INDEX_PATH))

        with open(METADATA_PATH, "r", encoding="utf-8") as f:
            self.metadata = json.load(f)

    def search(self, query_embedding, top_k=5):

        scores, indices = self.index.search(query_embedding, top_k)

        results = []

        for score, idx in zip(scores[0], indices[0]):

            if idx == -1:
                continue

            item = self.metadata[idx].copy()

            item["similarity"] = round(float(score), 4)

            results.append(item)

        return results