import re


class TrendCleaner:

    MIN_LENGTH = 40

    BLACKLIST = {

        "cookie",
        "cookies",
        "privacy",
        "terms",
        "sign in",
        "log in",
        "login",
        "create account",
        "copyright",
        "meta",
        "facebook",
        "instagram",
        "threads",
        "contact us",
        "help center",
        "all rights reserved",
    }

    @classmethod
    def clean(cls, paragraphs: list[str]) -> list[str]:

        cleaned = []

        for paragraph in paragraphs:

            paragraph = paragraph.strip()

            paragraph = re.sub(r"\s+", " ", paragraph)

            if len(paragraph) < cls.MIN_LENGTH:
                continue

            lower = paragraph.lower()

            if any(word in lower for word in cls.BLACKLIST):
                continue

            cleaned.append(paragraph)

        return cleaned