from .meta_parser import MetaParser


class ParserFactory:

    @staticmethod
    def get_parser(source_name: str):

        if source_name == "Meta for Creators":
            return MetaParser()

        if source_name == "Instagram Creators":
            return MetaParser()

        return MetaParser()