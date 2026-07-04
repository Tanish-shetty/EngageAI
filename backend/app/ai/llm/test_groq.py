from pprint import pprint

from app.ai.llm.groq_client import GroqClient


def main():
    client = GroqClient()

    response = client.generate(
        """
Return ONLY this JSON:

{
    "message": "Hello from Groq"
}
"""
    )

    pprint(response)


if __name__ == "__main__":
    main()