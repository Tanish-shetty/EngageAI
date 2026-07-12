# 🗄️ Database Design

## Overview

EngageAI uses **MySQL** as its primary relational database and **SQLAlchemy ORM** for database interactions.

The database is responsible for managing user authentication, application data, and future analytics while maintaining data integrity and scalability.

---

# Technology Stack

| Component | Technology |
|-----------|------------|
| Database | MySQL 8 |
| ORM | SQLAlchemy |
| Driver | PyMySQL |
| Migrations | Planned (Alembic) |

---

# Database Architecture

```text
             FastAPI
                 │
                 ▼
          SQLAlchemy ORM
                 │
                 ▼
             MySQL Server
```

---

# Current Tables

## Users

Stores registered user information.

Example fields:

| Column | Type | Description |
|---------|------|-------------|
| id | Integer | Primary Key |
| username | String | Unique username |
| email | String | User email |
| hashed_password | String | Encrypted password |
| created_at | DateTime | Registration timestamp |

---

# Authentication Flow

```text
Register
      │
      ▼
Hash Password (bcrypt)
      │
      ▼
Store User
      │
      ▼
Login
      │
      ▼
Verify Password
      │
      ▼
Generate JWT
      │
      ▼
Protected Endpoints
```

---

# Future Database Tables

The following tables are planned for future versions:

## Prediction History

Stores all prediction requests made by users.

Possible fields:

- User ID
- Input Features
- Predicted Metrics
- Timestamp

---

## Recommendation History

Stores AI-generated recommendations.

Possible fields:

- User ID
- Prompt
- Retrieved Context
- LLM Response
- Timestamp

---

## Analytics

Stores user activity and platform usage statistics.

Examples:

- Number of predictions
- Recommendation requests
- Login history

---

# Relationships

```text
Users
   │
   ├──────── Prediction History

   └──────── Recommendation History
```

---

# Security

The database follows several security practices:

- Password hashing using bcrypt
- JWT-based authentication
- Environment variable configuration
- ORM-based queries to reduce SQL injection risks

---

# Future Improvements

- Alembic migrations
- Database indexing
- Audit logs
- Soft deletes
- Role-based access control (RBAC)
- Refresh token storage
- Connection pooling optimization