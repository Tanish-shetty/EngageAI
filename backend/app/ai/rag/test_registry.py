from pathlib import Path

from app.ai.rag.registry import DocumentRegistry


def main():

    registry = DocumentRegistry()

    files = Path("knowledge_base").rglob("*.md")

    changed = []

    for file in files:

        if registry.has_changed(file):

            changed.append(file)

            registry.update(file)

    registry.remove_deleted()

    registry.save()

    print()

    print("=" * 60)
    print("Changed Files")
    print("=" * 60)

    for file in changed:

        print(file)

    print()

    print(f"Total changed: {len(changed)}")


if __name__ == "__main__":

    main()