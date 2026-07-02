from .chunker import DocumentChunker
from .embedder import EmbeddingService
from .vector_store import VectorStore


def main():

    chunks = DocumentChunker.build_chunks()

    print(f"Loaded {len(chunks)} chunks")

    texts = [c["content"] for c in chunks]

    embeddings = EmbeddingService.encode(texts)

    store = VectorStore(
        dimension=embeddings.shape[1]
    )

    store.add(
        embeddings,
        chunks,
    )

    store.save()

    print("Vector store created successfully.")


if __name__ == "__main__":
    main()