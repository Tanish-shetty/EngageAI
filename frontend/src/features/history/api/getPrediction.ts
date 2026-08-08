import api from "@/lib/axios";

export async function getPrediction(id: number) {
  const response = await api.get(`/history/${id}`);

  return response.data;
}