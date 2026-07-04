from app.ai.trends.crawler import TrendCrawler
from app.ai.trends.registry import SOURCES


def main():

    crawler = TrendCrawler()

    try:

        soup = crawler.fetch(
            SOURCES[0].url
        )

        print("=" * 60)
        print("PAGE TITLE")
        print("=" * 60)

        print(soup.title.text.strip())

    finally:

        crawler.close()


if __name__ == "__main__":
    main()