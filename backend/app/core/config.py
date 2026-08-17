from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):

    # --------------------------------
    # Application
    # --------------------------------
    APP_NAME: str = "EngageAI"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = False

    # --------------------------------
    # Database
    # --------------------------------
    DB_HOST: str
    DB_PORT: int = 3306
    DB_NAME: str
    DB_USER: str
    DB_PASSWORD: str

    # --------------------------------
    # JWT
    # --------------------------------
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    # --------------------------------
    # Groq
    # --------------------------------
    GROQ_API_KEY: str
    GROQ_MODEL: str = "openai/gpt-oss-20b"

    # --------------------------------
    # Frontend
    # --------------------------------
    FRONTEND_URL: str = "http://localhost:5173"

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
        extra="ignore",
    )


settings = Settings()