import api from "@/lib/axios";

export interface SignupPayload {
  full_name: string;
  email: string;
  password: string;
}

export interface SignupResponse {
  id: number;
  full_name: string;
  email: string;
}

export async function signup(
  data: SignupPayload
): Promise<SignupResponse> {
  const response = await api.post<SignupResponse>(
    "/auth/register",
    data
  );

  return response.data;
}