# 🚀 Deployment Guide

## Backend Deployment

Platform:

- Render

### Steps

1. Connect GitHub repository.
2. Select the backend directory as the root.
3. Install dependencies using:

```bash
pip install -r requirements.txt
```

4. Start the application:

```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

5. Configure environment variables.

---

## Frontend Deployment

Platform:

- Vercel

### Steps

1. Connect the GitHub repository.
2. Select the frontend directory.
3. Configure the backend API URL.
4. Deploy.

---

## Environment Variables

Required:

- Database credentials
- JWT Secret
- Groq API Key

---

## Health Check

After deployment, verify:

```
/api/v1/health
```

Ensure all components report healthy status before using the application.