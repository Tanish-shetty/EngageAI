import logging
import os
import sys
from pathlib import Path

# Create logs directory


LOG_DIR = Path("logs")
LOG_DIR.mkdir(exist_ok=True)

LOG_FILE = LOG_DIR / "engageai.log"

# Configure Logger
logger = logging.getLogger("EngageAI")

logger.setLevel(logging.INFO)

# Prevent duplicate handlers during uvicorn reload
if not logger.handlers:

    formatter = logging.Formatter(
        "%(asctime)s | %(levelname)-8s | %(name)s | %(message)s"
    )

    # Console Handler
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setFormatter(formatter)

    # File Handler
    file_handler = logging.FileHandler(
        LOG_FILE,
        encoding="utf-8",
    )
    file_handler.setFormatter(formatter)

    logger.addHandler(console_handler)
    logger.addHandler(file_handler)

# Prevent duplicate logging from parent loggers
logger.propagate = False