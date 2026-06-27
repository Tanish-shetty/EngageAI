from fastapi import FastAPI

app = FastAPI(
    title="EngageAI API",
    description="AI-powered Instagram Growth Assistant",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "Welcome to EngageAI API 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "version": "1.0.0"
    }