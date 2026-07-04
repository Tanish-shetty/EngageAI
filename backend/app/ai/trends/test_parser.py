from app.ai.trends.crawler import TrendCrawler
from app.ai.trends.parsers.parser_factory import ParserFactory
from app.ai.trends.cleaner import TrendCleaner
from app.ai.trends.registry import SOURCES


def main():

    crawler = TrendCrawler()

    try:

        source = SOURCES[0]

        soup = crawler.fetch(source.url)

        parser = ParserFactory.get_parser(source.name)

        article = parser.parse(soup)

        article["content"] = TrendCleaner.clean(
            article["content"]
        )

        print("=" * 60)
        print(article["title"])
        print("=" * 60)

        print()

        print(f"Paragraphs: {len(article['content'])}")

        print()

        for paragraph in article["content"][:10]:

            print(paragraph)

            print()

    finally:

        crawler.close()


if __name__ == "__main__":
    main()