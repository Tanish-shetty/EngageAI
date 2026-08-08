export interface User {
  id: string;

  name: string;

  email: string;

  avatar?: string;
}

export interface LoginResponse {
  access_token: string;

  refresh_token: string;

  user: User;
}