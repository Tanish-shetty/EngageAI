from sqlalchemy.orm import Session

from app.models.user import User
from app.schemas.user import UserCreate
from app.core.security import (
    hash_password,
    verify_password,
)


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

        user = AuthService.get_user_by_email(
            db,
            email,
        )

        if not user:
            return None

        if not verify_password(
            password,
            user.hashed_password,
        ):
            return None

        return user