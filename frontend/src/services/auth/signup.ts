import api from "@/lib/axios";

export interface SignupPayload {
  full_name: string;
  email: string;
  password: string;
}

export async function signup(data: SignupPayload) {
  const response = await api.post("/auth/signup", {
    full_name: data.full_name,
    email: data.email,
    password: data.password,
  });

  return response.data;
}