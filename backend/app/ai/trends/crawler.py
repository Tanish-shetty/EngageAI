from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright, TimeoutError


class TrendCrawler:

    def __init__(self):

        self.playwright = sync_playwright().start()

        self.browser = self.playwright.chromium.launch(
            headless=True
        )

        self.page = self.browser.new_page(
            viewport={"width": 1440, "height": 900},
            user_agent=(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/137.0.0.0 Safari/537.36"
            ),
        )

    def fetch(self, url: str):

        try:

            self.page.goto(
                url,
                wait_until="domcontentloaded",
                timeout=30000,
            )

        except TimeoutError:

            print(f"⚠ Timeout while loading {url}")

        html = self.page.content()

        return BeautifulSoup(html, "html.parser")

    def close(self):

        self.browser.close()

        self.playwright.stop()