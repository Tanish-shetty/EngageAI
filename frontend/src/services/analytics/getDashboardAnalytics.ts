import api from "@/lib/axios";

export interface DashboardAnalytics {
  total_predictions: number;
  average_viral_probability: number;
  average_confidence: number;
  average_reach: number;
  average_likes: number;

  best_media_type: string | null;
  best_category: string | null;

  media_distribution: {
    name: string;
    value: number;
  }[];

  performance_distribution: {
    name: string;
    value: number;
  }[];

  recent_predictions: any[];
}

export default async function getDashboardAnalytics() {
  const response = await api.get<DashboardAnalytics>(
    "/analytics"
  );

  return response.data;
}