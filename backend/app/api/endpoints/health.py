from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def root():
    return {
        "message": "Welcome to EngageAI API 🚀"
    }


@router.get("/health")
def health():
    return {
        "status": "healthy",
        "version": "1.0.0"
    }