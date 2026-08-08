import api from "@/lib/axios";

export async function getPredictionHistory() {
  const response = await api.get("/history");

  return response.data;
}