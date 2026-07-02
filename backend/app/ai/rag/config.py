"""
=========================================
RAG Configuration
=========================================
"""

from pathlib import Path

# =====================================================
# Base Directories
# =====================================================

BASE_DIR = Path(__file__).resolve().parents[3]

KNOWLEDGE_BASE = BASE_DIR / "knowledge_base"

VECTOR_STORE_DIR = Path(__file__).resolve().parent / "vector_store"

VECTOR_STORE_DIR.mkdir(exist_ok=True)

# =====================================================
# Chunking Configuration
# =====================================================

CHUNK_SIZE = 500

CHUNK_OVERLAP = 100

SUPPORTED_EXTENSIONS = [
    ".md",
]

# =====================================================
# Embedding Configuration
# =====================================================

EMBEDDING_MODEL = "sentence-transformers/all-MiniLM-L6-v2"

# =====================================================
# Vector Store Files
# =====================================================

FAISS_INDEX_PATH = VECTOR_STORE_DIR / "faiss_index.bin"

METADATA_PATH = VECTOR_STORE_DIR / "metadata.json"

STATISTICS_PATH = VECTOR_STORE_DIR / "statistics.json"