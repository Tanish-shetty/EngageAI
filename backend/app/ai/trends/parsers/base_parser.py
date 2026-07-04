from abc import ABC, abstractmethod
from bs4 import BeautifulSoup


class BaseParser(ABC):

    @abstractmethod
    def parse(self, soup: BeautifulSoup) -> dict:
        pass