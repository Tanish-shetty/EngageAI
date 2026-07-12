# 🏗 EngageAI System Architecture

## Overview

EngageAI follows a modular, service-oriented architecture that separates responsibilities into distinct layers, making the application scalable, maintainable, and easy to extend.

The system combines Machine Learning, Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), and a RESTful backend to provide intelligent Instagram analytics and content recommendations.

---

# High-Level Architecture

```text
                    React Frontend
                           │
                           ▼
                   FastAPI REST API
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
 Authentication      Prediction API     Recommendation API
        │                  │                  │
        ▼                  ▼                  ▼
      MySQL          ML Inference        RAG + Groq LLM
                           │                  │
                           ▼                  ▼
                    Trained Models      Knowledge Base
                                             │
                                             ▼
                                      FAISS Vector Store
```

---

# Backend Layers

## API Layer

Responsible for exposing REST endpoints.

Location:

```text
app/api/
```

Responsibilities:

- Request validation
- Route handling
- Dependency injection
- Response formatting

---

## Service Layer

Contains business logic.

Location:

```text
app/services/
```

Responsibilities:

- Authentication
- Prediction
- Recommendation
- Database operations

---

## AI Layer

Contains AI-related functionality.

Location:

```text
app/ai/
```

Modules include:

- LLM Integration
- RAG Pipeline
- Trend Analysis
- Recommendation Engine

---

## Machine Learning Layer

Location:

```text
ml/
```

Responsibilities:

- Model training
- Feature engineering
- Model loading
- Inference

---

## Database Layer

Technology:

- MySQL
- SQLAlchemy ORM

Stores:

- Users
- Authentication data
- Prediction history (future)
- Analytics (future)

---

# Design Principles

EngageAI follows several software engineering principles:

- Separation of Concerns
- Modular Architecture
- Reusable Services
- Dependency Injection
- Stateless REST APIs
- Configuration through Environment Variables

---

# Request Flow

1. Client sends a request.
2. FastAPI validates the request.
3. Business logic is executed in the service layer.
4. ML models or AI components process the request.
5. Results are returned as standardized JSON responses.