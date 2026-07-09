# 🚀 EngageAI

> AI-powered Instagram Analytics Platform using Machine Learning, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG).

![Python](https://img.shields.io/badge/Python-3.11-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![LightGBM](https://img.shields.io/badge/ML-LightGBM-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📌 Overview

EngageAI is an AI-powered Instagram analytics platform that predicts post performance using Machine Learning and provides personalized content recommendations using Large Language Models (Groq) and Retrieval-Augmented Generation (RAG).

The platform enables creators, influencers, and businesses to estimate engagement before publishing content and receive actionable recommendations to improve reach, impressions, likes, comments, shares, and overall post performance.

---

## ✨ Features

### 🤖 AI Recommendation Engine
- Personalized content recommendations
- Prompt engineering with Groq LLM
- RAG-powered contextual suggestions
- Instagram best-practice retrieval

### 📈 ML Prediction Engine
Predicts:

- 👍 Likes
- 💬 Comments
- 🔄 Shares
- 📌 Saves
- 👀 Reach
- 📊 Impressions

Also predicts:

- Viral Probability
- Performance Category

### 🔐 Authentication
- JWT Authentication
- Secure Password Hashing (bcrypt)
- User Registration & Login
- Protected Endpoints

### 📊 REST APIs
- Authentication APIs
- Prediction API
- Recommendation API
- Health Check API

---

# 🏗 Architecture

```
                   User
                     │
                     ▼
              FastAPI Backend
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
 Prediction Engine          Recommendation Engine
        │                         │
 LightGBM Models          Feature Engineering
        │                         │
        ▼                         ▼
 Prediction Results        RAG Retriever
                                   │
                                   ▼
                             Groq LLM
                                   │
                                   ▼
                         AI Recommendation
```

---

# 🧠 Machine Learning Pipeline

Dataset

↓

Feature Engineering

↓

Preprocessing

↓

LightGBM Models

↓

Regression Models

- Likes
- Comments
- Shares
- Saves
- Reach
- Impressions

Classification Models

- Viral Prediction
- Performance Classification

---

# 🧩 AI Recommendation Pipeline

User Input

↓

Feature Engineering

↓

ML Prediction

↓

Insight Generation

↓

RAG Retrieval

↓

Prompt Builder

↓

Groq LLM

↓

Final AI Recommendation

---

# 🛠 Tech Stack

## Backend

- FastAPI
- SQLAlchemy
- MySQL
- JWT Authentication

## Machine Learning

- LightGBM
- Scikit-Learn
- Pandas
- NumPy

## AI

- Groq API
- Retrieval-Augmented Generation (RAG)
- Sentence Transformers
- FAISS

## Deployment

- Render (Backend)
- MySQL
- GitHub

---

# 📁 Project Structure

```text
backend/
│
├── app/
│   ├── api/
│   ├── ai/
│   ├── core/
│   ├── database/
│   ├── models/
│   ├── schemas/
│   └── services/
│
├── ml/
│   ├── saved_models/
│   ├── src/
│   └── training/
│
├── knowledge_base/
├── vector_store/
├── alembic/
└── requirements.txt
```

---

# 🚀 Installation

```bash
git clone https://github.com/YOUR_USERNAME/EngageAI.git

cd EngageAI/backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

# 📖 API Documentation

Once the server starts:

Swagger UI

```
http://localhost:8000/docs
```

ReDoc

```
http://localhost:8000/redoc
```

---

# 🔮 Future Enhancements

- Dashboard Analytics
- Multi-platform Support
- AI Caption Generator
- AI Hashtag Generator
- Trend Prediction
- User History
- Analytics Dashboard
- Image-based Content Analysis

---

# 👨‍💻 Author

**Tanish Shetty**

B.Tech Artificial Intelligence & Data Science

K J Somaiya School of Engineering

---

# 📜 License

Licensed under the MIT License.