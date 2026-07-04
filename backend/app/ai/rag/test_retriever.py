from pprint import pprint

from .retriever import Retriever


retriever = Retriever()

results = retriever.retrieve(
    "How can I improve Instagram Reels?",
    top_k=3,
)

print("\nRetrieved Results\n")

pprint(results)