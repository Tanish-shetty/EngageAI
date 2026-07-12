# ⚙️ Backend Architecture

## Overview

The EngageAI backend is built using **FastAPI** and follows a modular, service-oriented architecture. The project is organized into independent components to improve maintainability, scalability, and testability.

---

# Backend Structure

```text
app/
│
├── api/
├── ai/
├── core/
├── database/
├── models/
├── schemas/
├── services/
├── main.py
```

---

# Module Responsibilities

## API

Handles HTTP requests and responses.

Responsibilities:

- Route definitions
- Request validation
- Response formatting

---

## Core

Contains shared application components.

Includes:

- Configuration
- Logger
- Dependencies
- Exception handlers
- Response utilities

---

## Database

Responsible for:

- Database connection
- Session management
- Table creation
- ORM models

---

## Schemas

Pydantic models used for:

- Input validation
- Response serialization

---

## Services

Contains business logic.

Examples:

- Authentication
- Prediction
- Recommendation

---

## AI

Contains:

- RAG
- LLM Integration
- Prompt Builder
- Trend Analysis

---

## ML

Responsible for:

- Model loading
- Feature engineering
- Inference
- Training

---

# Request Lifecycle

```text
Client Request

      │

      ▼

FastAPI Router

      │

      ▼

Pydantic Validation

      │

      ▼

Service Layer

      │

      ▼

ML / AI / Database

      │

      ▼

JSON Response
```

---

# Backend Features

- JWT Authentication
- Global Exception Handling
- Structured Logging
- Health Monitoring
- Dependency Injection
- Modular Services
- Environment-based Configuration