import api from "@/lib/axios";

export interface SignupPayload {
  name: string;
  email: string;
  password: string;
}

export async function signup(data: SignupPayload) {
  const response = await api.post("/auth/register", {
    full_name: data.name,
    email: data.email,
    password: data.password,
  });

  return response.data;
}