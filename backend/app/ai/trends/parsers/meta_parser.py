from bs4 import BeautifulSoup

from .base_parser import BaseParser


class MetaParser(BaseParser):

    def parse(self, soup: BeautifulSoup):

        title = ""

        if soup.title:
            title = soup.title.get_text(strip=True)

        paragraphs = []

        for p in soup.find_all("p"):

            text = p.get_text(" ", strip=True)

            if (
                len(text) > 40
                and "cookie" not in text.lower()
                and "privacy" not in text.lower()
                and "terms" not in text.lower()
            ):
                paragraphs.append(text)

        return {
            "source": "Meta",
            "title": title,
            "content": paragraphs,
        }