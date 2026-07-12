<div align="center">

# 🚀 EngageAI

### AI-Powered Instagram Analytics Platform

Predict Instagram post performance using Machine Learning and generate personalized content recommendations using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG).

---

![Python](https://img.shields.io/badge/Python-3.11-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-0.139-green?logo=fastapi)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)
![Machine Learning](https://img.shields.io/badge/Machine%20Learning-LightGBM-orange)

</div>

---

# 📌 Overview

EngageAI is an AI-powered Instagram analytics platform designed to help content creators, businesses, and marketers optimize their social media content before publishing.

The platform combines **Machine Learning**, **Large Language Models (LLMs)**, and **Retrieval-Augmented Generation (RAG)** to predict post performance, classify engagement potential, and generate personalized content recommendations based on industry best practices.

Unlike traditional analytics tools that provide insights after a post is published, EngageAI enables users to make data-driven decisions before publishing by forecasting engagement metrics and offering AI-assisted optimization suggestions.

---

# ✨ Key Features

## 📊 Machine Learning Analytics

- Predict Likes
- Predict Comments
- Predict Shares
- Predict Saves
- Predict Reach
- Predict Impressions
- Viral Content Classification
- Performance Classification

---

## 🤖 AI Recommendation Engine

- Personalized content recommendations
- Context-aware responses using RAG
- Groq LLM integration
- Knowledge-base driven suggestions
- Caption improvement recommendations

---

## 🔐 Authentication & Security

- JWT Authentication
- Password Hashing using bcrypt
- Protected API Endpoints
- OAuth2 Authentication Flow

---

## ⚡ Backend Features

- RESTful FastAPI Architecture
- SQLAlchemy ORM
- MySQL Database
- Global Exception Handling
- Health Monitoring Endpoint
- Structured Logging
- Interactive Swagger Documentation
- Modular Project Architecture

---

# 🏗 System Architecture

```text
                          +----------------------+
                          |   React Frontend     |
                          | (Vite + TailwindCSS) |
                          +----------+-----------+
                                     |
                                     | REST API
                                     |
                          +----------v-----------+
                          |   FastAPI Backend    |
                          +----------+-----------+
                                     |
          +--------------------------+--------------------------+
          |                          |                          |
          |                          |                          |
+---------v---------+      +---------v---------+      +---------v---------+
| Authentication    |      | ML Prediction     |      | AI Recommendation |
| JWT + OAuth2      |      | LightGBM Models   |      | Groq + RAG        |
+---------+---------+      +---------+---------+      +---------+---------+
          |                          |                          |
          |                          |                          |
          |                  +-------v--------+         +-------v--------+
          |                  | Trained Models |         | Knowledge Base |
          |                  +----------------+         +-------+--------+
          |                                                     |
+---------v---------+                                  +---------v---------+
| MySQL Database    |                                  | FAISS Vector DB   |
+-------------------+                                  +-------------------+
```

---

# 📂 Project Structure

```text
EngageAI
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── ai/
│   │   ├── core/
│   │   ├── database/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── main.py
│   │
│   ├── knowledge_base/
│   ├── ml/
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│
├── docs/
│
├── LICENSE
└── README.md
```

---

# 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Backend** | FastAPI, SQLAlchemy, Uvicorn |
| **Database** | MySQL |
| **Authentication** | JWT, OAuth2, bcrypt |
| **Machine Learning** | Scikit-Learn, LightGBM, Joblib |
| **Artificial Intelligence** | Groq LLM, Sentence Transformers |
| **Retrieval-Augmented Generation (RAG)** | FAISS, Markdown Knowledge Base |
| **Frontend** | React, Vite, Tailwind CSS |
| **Deployment** | Render, Vercel |
| **Version Control** | Git & GitHub |

---

# 🧠 Machine Learning Pipeline

The machine learning workflow follows a complete end-to-end pipeline for engagement prediction.

```text
Instagram Dataset
        │
        ▼
Data Cleaning
        │
        ▼
Feature Engineering
        │
        ▼
Feature Encoding
        │
        ▼
Model Training
        │
        ▼
Model Evaluation
        │
        ▼
Saved Models (.pkl)
        │
        ▼
FastAPI Prediction API
```

The trained models are responsible for predicting:

- Likes
- Comments
- Shares
- Saves
- Reach
- Impressions
- Viral Potential
- Performance Category

---

# 🤖 AI Recommendation Pipeline

EngageAI combines Retrieval-Augmented Generation (RAG) with a Large Language Model (LLM) to generate intelligent recommendations.

```text
User Request
      │
      ▼
Knowledge Base
      │
      ▼
Document Chunking
      │
      ▼
Sentence Embeddings
      │
      ▼
FAISS Vector Search
      │
      ▼
Relevant Context Retrieval
      │
      ▼
Groq LLM
      │
      ▼
AI-Powered Recommendation
```

The recommendation engine uses domain-specific knowledge to produce context-aware suggestions rather than relying solely on the language model.

# 🚀 Getting Started

## Prerequisites

Ensure the following tools are installed before setting up the project:

- Python 3.11+
- Node.js 20+
- MySQL 8+
- Git
- Groq API Key

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/EngageAI.git

cd EngageAI
```

---

### 2. Setup Backend

```bash
cd backend

python -m venv venv
```

#### Windows

```bash
venv\Scripts\activate
```

#### Linux / macOS

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

---

### 3. Configure Environment Variables

Create a `.env` file inside the backend directory.

```env
APP_NAME=EngageAI
APP_VERSION=1.0.0

MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=engageai

SECRET_KEY=your_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

GROQ_API_KEY=your_groq_api_key
```

---

### 4. Run the Backend

```bash
uvicorn app.main:app --reload
```

The backend will be available at:

```
http://localhost:8000
```

Swagger Documentation:

```
http://localhost:8000/docs
```

---

### 5. Setup Frontend

```bash
cd frontend

npm install

npm run dev
```

The frontend will run at:

```
http://localhost:5173
```

---

# 📚 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/auth/register` | Register a new user |
| POST | `/api/v1/auth/login` | Authenticate user |
| GET | `/api/v1/auth/me` | Retrieve current user profile |

---

## Machine Learning

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/predict` | Predict engagement metrics |

---

## AI Recommendation

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/recommend` | Generate AI-powered recommendations |

---

## Health

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/v1/health` | Check backend health |

---

# 🚀 Deployment

## Backend

The backend is designed for deployment on **Render**.

Deployment includes:

- FastAPI
- MySQL Database
- Machine Learning Models
- Groq API Integration
- FAISS Vector Store

---

## Frontend

The frontend is deployed separately using **Vercel**.

The React application communicates with the deployed FastAPI backend through REST APIs.

---

# 🔒 Security

EngageAI follows several security best practices:

- JWT Authentication
- Password Hashing using bcrypt
- OAuth2 Authentication Flow
- Environment Variable Configuration
- Protected API Endpoints
- Global Exception Handling

---

# 📈 Future Enhancements

Planned improvements include:

- Multi-platform social media support
- Image-based content analysis
- Explainable AI using SHAP
- Trend forecasting
- User analytics dashboard
- Real-time recommendation engine
- Docker & Kubernetes deployment
- CI/CD pipeline with GitHub Actions

---

# 🤝 Contributing

Contributions, feature requests, and suggestions are welcome.

If you would like to contribute:

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Open a Pull Request

---

# 📜 License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for more information.

---

# 👨‍💻 Authors

<table>
<tr>
<td align="center">

### Tanish Shetty

[GitHub](https://github.com/<tanish-github>) • [LinkedIn](https://linkedin.com/in/<tanish-linkedin>)

</td>

<td align="center">

### Soumya Patil

[GitHub](https://github.com/<soumya-github>) • [LinkedIn](https://linkedin.com/in/<soumya-linkedin>)

</td>
</tr>
</table>

---

<div align="center">

### ⭐ If you found this project helpful, consider giving the repository a star!

Made with ❤️

</div>