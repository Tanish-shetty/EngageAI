from bs4 import BeautifulSoup


class TrendParser:

    @staticmethod
    def extract_text(soup: BeautifulSoup) -> dict:

        title = soup.title.text.strip()

        paragraphs = []

        for p in soup.find_all("p"):

            text = p.get_text(" ", strip=True)

            if len(text) > 40:
                paragraphs.append(text)

        return {
            "title": title,
            "content": paragraphs,
        }