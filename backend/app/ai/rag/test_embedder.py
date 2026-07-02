from .chunker import DocumentChunker
from .embedder import EmbeddingService

chunks = DocumentChunker.build_chunks()

texts = [chunk["content"] for chunk in chunks]

embeddings = EmbeddingService.encode(texts)

print("Embedding shape:", embeddings.shape)
print("First vector length:", len(embeddings[0]))