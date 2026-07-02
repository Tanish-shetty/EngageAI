from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[3]

KNOWLEDGE_BASE = BASE_DIR / "knowledge_base"

VECTOR_STORE = BASE_DIR / "vector_store"

EMBEDDING_MODEL = "sentence-transformers/all-MiniLM-L6-v2"

CHUNK_SIZE = 500

CHUNK_OVERLAP = 100

TOP_K = 5