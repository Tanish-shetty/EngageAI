# 🧠 Machine Learning Pipeline

## Overview

EngageAI uses supervised machine learning models to predict Instagram engagement metrics before a post is published.

---

# Pipeline

```text
Raw Dataset
      │
      ▼
Data Cleaning
      │
      ▼
Feature Engineering
      │
      ▼
Encoding
      │
      ▼
Train/Test Split
      │
      ▼
Model Training
      │
      ▼
Model Evaluation
      │
      ▼
Saved Models
      │
      ▼
FastAPI Inference
```

---

# Predicted Metrics

- Likes
- Comments
- Shares
- Saves
- Reach
- Impressions

Classification:

- Viral
- Performance

---

# Inference

Models are loaded once during application startup using a singleton model loader.

This minimizes loading time and improves API performance.