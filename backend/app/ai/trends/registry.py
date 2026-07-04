from dataclasses import dataclass


@dataclass
class TrendSource:
    name: str
    url: str
    authority: int
    category: str


SOURCES = [

    TrendSource(
        name="Meta for Creators",
        url="https://creators.instagram.com/",
        authority=10,
        category="official",
    ),

    TrendSource(
        name="Instagram Creators",
        url="https://about.instagram.com/blog",
        authority=10,
        category="official",
    ),

    TrendSource(
        name="Later",
        url="https://later.com/blog/",
        authority=8,
        category="blog",
    ),

    TrendSource(
        name="Hootsuite",
        url="https://blog.hootsuite.com/",
        authority=8,
        category="blog",
    ),

    TrendSource(
        name="Buffer",
        url="https://buffer.com/resources/",
        authority=8,
        category="blog",
    ),

    TrendSource(
        name="Social Media Examiner",
        url="https://www.socialmediaexaminer.com/",
        authority=7,
        category="blog",
    ),

    TrendSource(
        name="HubSpot Marketing",
        url="https://blog.hubspot.com/marketing",
        authority=7,
        category="blog",
    ),
]