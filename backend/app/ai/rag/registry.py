import hashlib
import json
from pathlib import Path

from .config import REGISTRY_PATH


class DocumentRegistry:

    def __init__(self):

        self.registry = self._load()

    def _load(self):

        if REGISTRY_PATH.exists():

            with open(REGISTRY_PATH, "r", encoding="utf-8") as f:

                return json.load(f)

        return {}

    def save(self):

        with open(REGISTRY_PATH, "w", encoding="utf-8") as f:

            json.dump(
                self.registry,
                f,
                indent=4,
            )

    @staticmethod
    def file_hash(path: Path):

        sha = hashlib.sha256()

        with open(path, "rb") as f:

            while True:

                chunk = f.read(8192)

                if not chunk:
                    break

                sha.update(chunk)

        return sha.hexdigest()

    def has_changed(self, path: Path):

        path = str(path)

        current_hash = self.file_hash(Path(path))

        old_hash = self.registry.get(path)

        return current_hash != old_hash

    def update(self, path: Path):

        path = str(path)

        self.registry[path] = self.file_hash(
            Path(path)
        )

    def remove_deleted(self):

        existing = {}

        for file in self.registry:

            if Path(file).exists():

                existing[file] = self.registry[file]

        self.registry = existing