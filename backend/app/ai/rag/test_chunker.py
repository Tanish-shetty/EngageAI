from .chunker import DocumentChunker

chunks = DocumentChunker.build_chunks()

print(f"Total Chunks: {len(chunks)}")

print()

print(chunks[0])