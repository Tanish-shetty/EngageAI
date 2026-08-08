<div align="center">

# 🚀 EngageAI

### AI-Powered Instagram Analytics & Content Optimization Platform

Predict Instagram post performance, generate AI-powered captions and hashtags, and receive personalized content recommendations using Machine Learning, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG).

---

![Python](https://img.shields.io/badge/Python-3.11-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-0.139-green?logo=fastapi)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Frontend-3178C6?logo=typescript)
![MySQL](https://img.shields.io/badge/MySQL-8+-4479A1?logo=mysql)
![Machine Learning](https://img.shields.io/badge/Machine%20Learning-LightGBM-orange)
![LLM](https://img.shields.io/badge/LLM-Groq-purple)
![RAG](https://img.shields.io/badge/RAG-FAISS-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

</div>

---

# 📌 Overview

EngageAI is an AI-powered Instagram analytics and content optimization platform designed for content creators, businesses, and digital marketers.

Unlike traditional analytics platforms that analyze content only after publishing, EngageAI helps users make data-driven decisions **before publishing**.

The platform combines:

- Machine Learning
- Large Language Models
- Retrieval-Augmented Generation
- Predictive Analytics
- AI-powered Content Generation
- Historical Performance Tracking
- User Analytics

EngageAI predicts the expected performance of an Instagram post and provides personalized recommendations to improve its potential reach and engagement.

It also provides AI-powered caption and hashtag generation to simplify the content creation workflow.

---

# ✨ Key Features

## 📊 AI-Powered Instagram Prediction

EngageAI predicts the expected performance of an Instagram post based on account, content, posting, and historical information.

### Predicted Metrics

- ❤️ Likes
- 💬 Comments
- 🔄 Shares
- 🔖 Saves
- 👀 Reach
- 📈 Impressions
- 🔥 Viral Probability
- 🎯 Performance Category
- 🤖 Prediction Confidence

The prediction system uses a multi-step wizard to collect the required information before generating the final prediction.

---

## 🤖 AI Recommendation Engine

The recommendation engine combines Retrieval-Augmented Generation with Large Language Models to generate personalized content recommendations.

### Features

- Personalized content recommendations
- Context-aware suggestions
- Caption improvement recommendations
- Content optimization suggestions
- Engagement improvement strategies
- Industry-specific recommendations
- Knowledge-base driven responses

The system uses a Groq-powered LLM together with a FAISS vector database to retrieve relevant knowledge before generating recommendations.

---

## ✍️ AI Caption Generator

EngageAI provides an AI-powered Instagram caption generator.

Users can provide:

- Media Type
- Content Category
- Follower Count
- Call-to-Action preference
- Trending Audio preference

The system generates multiple AI-powered caption suggestions that users can copy directly.

---

## #️⃣ AI Hashtag Generator

EngageAI provides an AI-powered hashtag generation system.

Users can specify:

- Media Type
- Content Category
- Follower Count
- Whether trending hashtags should be included

The system generates relevant hashtags based on the selected content and audience.

Users can copy all generated hashtags with a single click.

---

## 📈 Analytics Dashboard

The analytics dashboard provides an overview of the user's historical prediction activity.

### Analytics Include

- Total Predictions
- Average Viral Probability
- Average Likes
- Average Reach
- Best Media Type
- Best Content Category
- Media Type Distribution
- Performance Distribution
- Recent Predictions

The dashboard uses charts and statistical summaries to help users understand their content performance patterns.

---

## 📚 Prediction History

Every prediction is stored in the database and associated with the authenticated user.

Users can view:

- Previous predictions
- Predicted metrics
- Media Type
- Content Category
- Viral Probability
- Performance Category
- Confidence Score
- Recommendations
- Prediction Timestamp

Individual prediction records can also be opened to view detailed results.

---

## 🔐 Authentication & Security

EngageAI implements secure JWT-based authentication.

### Authentication Features

- User Registration
- User Login
- JWT Access Tokens
- Password Hashing using bcrypt
- Protected Routes
- Protected API Endpoints
- Authenticated API Requests
- Current User Profile
- Logout
- Session Restoration

The frontend automatically attaches the JWT token to authenticated API requests.

---

## 👤 User Profile

Authenticated users can access their profile information.

The profile page displays:

- Full Name
- Email Address
- Account Information

---

## ⚙️ Settings

The settings section provides basic account controls, including logout functionality.

---

# 🏗 System Architecture

```text
                         ┌─────────────────────────┐
                         │     React Frontend      │
                         │   Vite + TypeScript     │
                         │     Tailwind CSS        │
                         └────────────┬────────────┘
                                      │
                                      │ REST API
                                      ▼
                         ┌─────────────────────────┐
                         │     FastAPI Backend     │
                         │       Python 3.11       │
                         └────────────┬────────────┘
                                      │
             ┌────────────────────────┼────────────────────────┐
             │                        │                        │
             ▼                        ▼                        ▼
   ┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
   │ Authentication  │      │ ML Prediction   │      │ AI Recommendation│
   │                 │      │                 │      │                  │
   │ JWT + OAuth2    │      │ LightGBM        │      │ Groq LLM         │
   │ bcrypt          │      │ Joblib          │      │ RAG              │
   └────────┬────────┘      └─────────────────┘      └────────┬─────────┘
            │                                                  │
            │                                                  ▼
            │                                        ┌─────────────────┐
            │                                        │ FAISS Vector DB │
            │                                        │ Knowledge Base  │
            │                                        └─────────────────┘
            │
            ▼
   ┌─────────────────────┐
   │    MySQL Database   │
   │                     │
   │ Users               │
   │ Prediction History  │
   │ Application Data    │
   └─────────────────────┘
```

---

# 🔄 Prediction Workflow

```text
User
 │
 ▼
Login / Authentication
 │
 ▼
Prediction Wizard
 │
 ├── Account Information
 │
 ├── Post Information
 │
 └── Historical Information
 │
 ▼
Feature Transformation
 │
 ▼
Machine Learning Models
 │
 ▼
Performance Prediction
 │
 ├── Likes
 ├── Comments
 ├── Shares
 ├── Saves
 ├── Reach
 └── Impressions
 │
 ▼
Viral Classification
 │
 ▼
Performance Classification
 │
 ▼
Recommendation Engine
 │
 ▼
RAG Context Retrieval
 │
 ▼
Groq LLM
 │
 ▼
Personalized Recommendation
 │
 ▼
Prediction Result
 │
 ▼
Saved to Prediction History
```

---

# 🧠 Machine Learning Pipeline

The machine learning pipeline follows an end-to-end workflow.

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
Model Serialization
        │
        ▼
FastAPI Prediction API
        │
        ▼
Frontend Prediction Dashboard
```

### Machine Learning Components

- Scikit-Learn
- LightGBM
- Joblib
- Feature Engineering
- Regression Models
- Classification Models

The trained models are used to predict Instagram engagement metrics and classify content performance.

---

# 🧩 AI Recommendation Pipeline

EngageAI uses Retrieval-Augmented Generation to provide recommendations based on domain-specific knowledge.

```text
User Prediction
      │
      ▼
Recommendation Request
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
Relevant Context
      │
      ▼
Groq LLM
      │
      ▼
Personalized Recommendation
```

This approach allows the recommendation engine to use relevant information from the project's knowledge base instead of relying only on the LLM's general knowledge.

---

# ✍️ Content Generation Workflow

## Caption Generation

```text
User Input
    │
    ▼
Media Type
    │
    ├── Content Category
    ├── Follower Count
    ├── CTA Preference
    └── Trending Audio
    │
    ▼
Caption Generation API
    │
    ▼
AI Processing
    │
    ▼
Multiple Caption Suggestions
```

## Hashtag Generation

```text
User Input
    │
    ▼
Media Type
    │
    ├── Content Category
    ├── Follower Count
    └── Trending Preference
    │
    ▼
Hashtag Generation API
    │
    ▼
AI Processing
    │
    ▼
Relevant Hashtag Set
```

---

# 📂 Project Structure

```text
EngageAI
│
├── backend/
│   │
│   ├── app/
│   │   ├── api/
│   │   │   └── endpoints/
│   │   │
│   │   ├── ai/
│   │   │   ├── caption/
│   │   │   ├── hashtag/
│   │   │   └── recommendation/
│   │   │
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
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── features/
│   │   │   ├── analytics/
│   │   │   ├── auth/
│   │   │   ├── captions/
│   │   │   ├── hashtags/
│   │   │   ├── history/
│   │   │   └── prediction/
│   │   │
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── services/
│   │   └── router.tsx
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── docs/
├── LICENSE
└── README.md
```

---

# 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Backend** | Python, FastAPI, Uvicorn |
| **Frontend** | React, TypeScript, Vite |
| **Styling** | Tailwind CSS |
| **Database** | MySQL |
| **ORM** | SQLAlchemy |
| **Authentication** | JWT, OAuth2, bcrypt |
| **Machine Learning** | Scikit-Learn, LightGBM, Joblib |
| **LLM** | Groq |
| **Embeddings** | Sentence Transformers |
| **RAG** | FAISS |
| **Data Processing** | Pandas, NumPy |
| **API Communication** | Axios |
| **Forms & Validation** | React Hook Form, Zod |
| **Charts** | Recharts |
| **Notifications** | Sonner |
| **Deployment** | Render, Vercel |
| **Version Control** | Git, GitHub |

---

# 🚀 Getting Started

## Prerequisites

Make sure the following are installed:

- Python **3.11**
- Node.js **20+**
- MySQL **8+**
- Git
- Groq API Key

> **Important:** Use Python 3.11 for the backend. Python 3.13 may cause compatibility issues with some Machine Learning and Pydantic dependencies used by the project.

---

## 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/EngageAI.git

cd EngageAI
```

---

## 2. Backend Setup

Navigate to the backend:

```bash
cd backend
```

Create a Python 3.11 virtual environment.

### Windows

```bash
py -3.11 -m venv venv
```

Activate the environment:

```bash
venv\Scripts\activate
```

Verify the Python version:

```bash
python --version
```

Expected:

```text
Python 3.11.x
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory.

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

Do not commit the `.env` file to GitHub.

---

## 4. Run the Backend

From the `backend` directory:

```bash
uvicorn app.main:app --reload
```

The backend will be available at:

```text
http://localhost:8000
```

API documentation:

```text
http://localhost:8000/docs
```

---

## 5. Frontend Setup

Open another terminal and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

---

# 🔗 API Endpoints

## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register` | Register a new user |
| POST | `/api/v1/auth/login` | Authenticate user |
| GET | `/api/v1/auth/me` | Retrieve current authenticated user |

---

## Prediction

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/predict` | Predict Instagram post performance |

---

## Recommendations

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/recommend` | Generate personalized AI recommendations |

---

## Caption Generator

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/caption` | Generate AI-powered Instagram captions |

---

## Hashtag Generator

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/hashtag` | Generate AI-powered Instagram hashtags |

---

## Analytics

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/analytics` | Retrieve user analytics |

---

## Health

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/health` | Check backend health |

---

# 🔐 Authentication Flow

EngageAI uses JWT-based authentication.

```text
User
 │
 ▼
Login
 │
 ▼
FastAPI Authentication
 │
 ▼
JWT Access Token
 │
 ▼
Browser Local Storage
 │
 ▼
Axios Interceptor
 │
 ▼
Authorization: Bearer <token>
 │
 ▼
Protected FastAPI Endpoints
```

Protected frontend routes are handled using React Router and `ProtectedRoute`.

---

# 📊 Dashboard

The EngageAI dashboard provides access to:

- AI Viral Prediction
- Caption Generator
- Hashtag Generator
- Analytics
- Prediction History
- Profile
- Settings

The dashboard is protected and accessible only to authenticated users.

---

# 📈 Analytics

The analytics system processes the user's historical prediction records and calculates:

- Total Predictions
- Average Viral Probability
- Average Likes
- Average Reach
- Best Media Type
- Best Content Category
- Media Distribution
- Performance Distribution
- Recent Predictions

The frontend visualizes these metrics using interactive charts.

---

# 🗄 Database

EngageAI uses **MySQL** as the primary relational database.

SQLAlchemy is used as the ORM layer.

The database stores information including:

- User accounts
- Authentication data
- Prediction history
- Prediction results
- Recommendations
- Timestamps

Each user's prediction history is associated with their authenticated account.

---

# 🚀 Deployment

## Backend

The backend is designed to be deployed using **Render**.

Deployment requires:

- Python 3.11
- MySQL connection
- Environment variables
- Groq API key
- Machine Learning models
- FAISS vector database

---

## Frontend

The React frontend is designed to be deployed using **Vercel**.

The frontend communicates with the deployed FastAPI backend through REST APIs.

Configure the backend API URL using:

```env
VITE_API_BASE_URL=https://your-backend-url
```

---

# 🔒 Security

EngageAI follows several security practices:

- JWT authentication
- OAuth2 authentication flow
- bcrypt password hashing
- Protected API endpoints
- Protected frontend routes
- Environment variable configuration
- Database-backed user authentication
- Authorization headers for API requests
- Sensitive credentials excluded from source code

---

# 🧪 Development Commands

## Backend

```bash
cd backend
venv\Scripts\activate
uvicorn app.main:app --reload
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🔮 Future Enhancements

Potential future improvements include:

- 📱 Multi-platform social media support
- 🖼️ Image and video content analysis
- 🧠 Explainable AI using SHAP
- 📈 Advanced trend forecasting
- 🔥 Real-time Instagram trend detection
- 🎯 Personalized content strategy generation
- 🤖 AI content calendar generation
- 📊 Advanced user analytics
- 🐳 Docker containerization
- ☸️ Kubernetes deployment
- 🔄 CI/CD with GitHub Actions
- 📸 Instagram API integration
- 🎥 Video content analysis
- 🌐 Multi-language caption generation

---

# 🤝 Contributing

Contributions, feature requests, and suggestions are welcome.

To contribute:

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "Add new feature"
```

5. Push the branch

```bash
git push origin feature/your-feature
```

6. Open a Pull Request

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

AI & Data Science

[GitHub](https://github.com/<tanish-github>) • [LinkedIn](https://linkedin.com/in/<tanish-linkedin>)

</td>

<td align="center">

### Soumya Patil

AI & Data Science

[GitHub](https://github.com/<soumya-github>) • [LinkedIn](https://linkedin.com/in/<soumya-linkedin>)

</td>

</tr>
</table>

---

<div align="center">

### ⭐ If you found EngageAI useful, consider giving the repository a star!

Made with ❤️

</div>