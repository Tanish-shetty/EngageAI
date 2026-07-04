from typing import Any


def success_response(
    data: Any = None,
    message: str = "Request successful.",
) -> dict:
    """
    Standard success response.
    """
    return {
        "success": True,
        "message": message,
        "data": data,
    }


def error_response(
    code: str,
    message: str,
    details: Any = None,
) -> dict:
    """
    Standard error response.
    """
    return {
        "success": False,
        "error": {
            "code": code,
            "message": message,
            "details": details,
        },
    }