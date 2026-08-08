import api from "@/lib/axios";

export async function getRecommendation(payload: any) {
  const response = await api.post(
    "/recommend",
    payload
  );

  return response.data;
}