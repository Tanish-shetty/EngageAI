import api from "@/lib/axios";
import ENDPOINTS from "@/lib/endpoints";

export interface RegisterData {
  full_name: string;
  email: string;
  password: string;
}

export default async function register(
  data: RegisterData
) {
  const response = await api.post(
    ENDPOINTS.auth.register,
    data
  );

  return response.data;
}