import api from "@/lib/axios";

export default async function getPredictionDetails(
  id: number
) {
  const response = await api.get(
    `/history/${id}`
  );

  return response.data;
}