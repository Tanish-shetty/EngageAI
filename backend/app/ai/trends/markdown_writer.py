from pathlib import Path
from datetime import datetime
import re


class MarkdownWriter:

    @staticmethod
    def slugify(title: str) -> str:

        title = title.lower()

        title = re.sub(r'[<>:"/\\|?*]', "", title)

        title = re.sub(r"\s+", "-", title)

        title = re.sub(r"-+", "-", title)

        return title.strip("-")

    @staticmethod
    def save(article: dict, output_dir: Path):

        output_dir.mkdir(
            parents=True,
            exist_ok=True,
        )

        filename = MarkdownWriter.slugify(
            article["title"]
        )

        path = output_dir / f"{filename}.md"

        with open(
            path,
            "w",
            encoding="utf-8",
        ) as f:

            f.write(f"# {article['title']}\n\n")

            f.write(f"Source: {article['source']}\n")

            f.write(
                f"Date: {datetime.now().date()}\n\n"
            )

            for paragraph in article["content"]:

                f.write(paragraph)

                f.write("\n\n")

        return path