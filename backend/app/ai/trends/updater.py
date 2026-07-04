from pathlib import Path
from app.ai.rag.build_index import IndexBuilder
from app.ai.trends.crawler import TrendCrawler
from app.ai.trends.cleaner import TrendCleaner
from app.ai.trends.markdown_writer import MarkdownWriter
from app.ai.trends.parsers.parser_factory import ParserFactory
from app.ai.trends.registry import SOURCES


OUTPUT_DIR = Path("knowledge_base/auto")


class TrendUpdater:

    def update(self):

        crawler = TrendCrawler()

        successful = 0
        failed = 0

        try:

            for source in SOURCES:

                print("\n" + "=" * 60)
                print(source.name)
                print("=" * 60)

                try:

                    # Fetch webpage
                    soup = crawler.fetch(source.url)

                    # Parse webpage
                    parser = ParserFactory.get_parser(source.name)
                    article = parser.parse(soup)

                    # Clean extracted content
                    article["content"] = TrendCleaner.clean(
                        article["content"]
                    )

                    if not article["content"]:
                        print("No useful content found. Skipping...")
                        failed += 1
                        continue

                    # Save markdown
                    path = MarkdownWriter.save(
                        article=article,
                        output_dir=OUTPUT_DIR,
                    )

                    print(f"Saved: {path}")

                    successful += 1

                except Exception as e:

                    print(f"Failed to process {source.name}")
                    print(f"Reason: {e}")

                    failed += 1

            print("\n" + "=" * 60)
            print("UPDATE SUMMARY")
            print("=" * 60)
            print(f"Successful : {successful}")
            print(f"Failed      : {failed}")
            print(f"Total       : {len(SOURCES)}")
            print("=" * 60)

            print("\nRebuilding vector database...")

            builder = IndexBuilder()
            builder.build()

            print("Knowledge base updated successfully.")
        finally:

            crawler.close()