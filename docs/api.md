# 📚 API Documentation

## Base URL

```
http://localhost:8000/api/v1
```

---

# Authentication

## Register

POST

```
/auth/register
```

Registers a new user.

---

## Login

POST

```
/auth/login
```

Returns a JWT access token.

---

## Current User

GET

```
/auth/me
```

Returns the authenticated user's profile.

---

# Prediction

## Predict Engagement

POST

```
/predict
```

Predicts:

- Likes
- Comments
- Shares
- Saves
- Reach
- Impressions
- Viral Potential
- Performance Category

---

# Recommendation

## Generate Recommendation

POST

```
/recommend
```

Uses:

- Knowledge Base
- FAISS Retrieval
- Groq LLM

Returns AI-generated recommendations.

---

# Health

GET

```
/health
```

Returns:

- Database status
- ML model status
- Vector store status
- Knowledge base status
- Groq configuration