from sqlalchemy.orm import Session

from app.models.user import User
from app.schemas.user import UserCreate
from app.core.security import (
    hash_password,
    verify_password,
)
from app.core.logger import logger


class AuthService:
    """
    Service class for authentication-related operations.
    """

    @staticmethod
    def get_user_by_email(
        db: Session,
        email: str,
    ) -> User | None:
        """
        Retrieve a user by email.
        """

        logger.info(
            "Searching user with email: %s",
            email,
        )

        return (
            db.query(User)
            .filter(User.email == email)
            .first()
        )

    @staticmethod
    def create_user(
        db: Session,
        user_data: UserCreate,
    ) -> User:
        """
        Create a new user.
        """

        logger.info(
            "Creating new user: %s",
            user_data.email,
        )

        hashed_password = hash_password(
            user_data.password
        )

        new_user = User(
            full_name=user_data.full_name,
            email=user_data.email,
            hashed_password=hashed_password,
        )

        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        logger.info(
            "User registered successfully: %s",
            user_data.email,
        )

        return new_user

    @staticmethod
    def authenticate_user(
        db: Session,
        email: str,
        password: str,
    ) -> User | None:
        """
        Authenticate a user using email and password.
        """

        logger.info(
            "Login attempt for: %s",
            email,
        )

        user = AuthService.get_user_by_email(
            db,
            email,
        )

        if not user:

            logger.warning(
                "Login failed. User not found: %s",
                email,
            )

            return None

        if not verify_password(
            password,
            user.hashed_password,
        ):

            logger.warning(
                "Invalid password for: %s",
                email,
            )

            return None

        logger.info(
            "User authenticated successfully: %s",
            email,
        )

        return user