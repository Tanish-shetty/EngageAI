from fastapi import Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError

from app.core.logger import logger
from app.core.responses import error_response

from starlette.exceptions import HTTPException as StarletteHTTPException



async def http_exception_handler(
    request: Request,
    exc: StarletteHTTPException,
):
    logger.warning(
        f"HTTP {exc.status_code}: {exc.detail}"
    )

    return JSONResponse(
        status_code=exc.status_code,
        content=error_response(
            code="HTTP_ERROR",
            message=str(exc.detail),
        ),
    )

async def validation_exception_handler(
    request: Request,
    exc: RequestValidationError,
):
    logger.warning(f"Validation Error: {exc.errors()}")

    return JSONResponse(
        status_code=422,
        content=error_response(
            code="VALIDATION_ERROR",
            message="Invalid request data.",
            details=exc.errors(),
        ),
    )


async def general_exception_handler(
    request: Request,
    exc: Exception,
):
    logger.exception(f"Unhandled Exception: {exc}")

    return JSONResponse(
        status_code=500,
        content=error_response(
            code="INTERNAL_SERVER_ERROR",
            message="Something went wrong.",
        ),
    )

