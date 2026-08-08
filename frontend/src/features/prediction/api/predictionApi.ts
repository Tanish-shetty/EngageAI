import api from "@/lib/axios";

export async function predictPost(payload: any) {
  const response = await api.post(
    "/predict",
    payload
  );

  return response.data;
}