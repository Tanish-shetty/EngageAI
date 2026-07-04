"""
=====================================================
Base LLM Interface
=====================================================
"""

from abc import ABC, abstractmethod


class BaseLLM(ABC):
    """
    Abstract base class for all LLM providers.
    """

    @abstractmethod
    def generate(self, prompt: str) -> dict:
        """
        Generate a structured response from the LLM.
        """
        pass