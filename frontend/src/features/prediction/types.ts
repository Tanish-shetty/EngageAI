export interface PredictionResponse {
  viral_score: number;

  predicted_likes: number;

  predicted_comments: number;

  predicted_shares: number;

  predicted_saves: number;

  confidence: number;

  recommendations: string[];
}