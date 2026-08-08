import api from "@/lib/axios";
import ENDPOINTS from "@/lib/endpoints";

export interface User {
  id: number;
  full_name: string;
  email: string;
  is_active: boolean;
  is_verified: boolean;
}

export default async function getCurrentUser() {
  const response = await api.get<User>(
    ENDPOINTS.auth.me
  );

  return response.data;
}