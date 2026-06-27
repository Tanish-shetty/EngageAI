from app.core.security import (
    hash_password,
    verify_password,
)

password = "Hello123"

hashed = hash_password(password)

print("Hashed Password:", hashed)

print("Verification:", verify_password(password, hashed))