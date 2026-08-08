export interface PredictionHistory {
  id: number;

  input_data: {
    caption: string;
    media_type: string;
    content_category: string;
    follower_count: number;
    traffic_source: string;
  };

  prediction: {
    predictions: {
      likes: number;
      comments: number;
      shares: number;
      saves: number;
      reach: number;
      impressions: number;
    };

    classification: {
      viral_probability: number;
      performance_bucket: string;
    };

    confidence: {
      overall_confidence: number;
    };
  };

  recommendation: {
    summary: string;

    strengths: string[];

    weaknesses: string[];

    recommendations: string[];

    action_plan: string[];
  };

  created_at: string;
}