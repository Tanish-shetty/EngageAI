import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";

import loginService from "@/services/auth/login";
import getCurrentUser, {
  type User,
} from "@/services/auth/me";

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;

  loading: boolean;

  isAuthenticated: boolean;

  login: (
    credentials: LoginCredentials
  ) => Promise<void>;

  logout: () => void;
}

const AuthContext = createContext<
  AuthContextType | undefined
>(undefined);

interface Props {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: Props) {
  const [user, setUser] = useState<User | null>(
    null
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    restoreSession();
  }, []);

  async function restoreSession() {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const profile = await getCurrentUser();

      setUser(profile);
    } catch {
      localStorage.removeItem("token");

      setUser(null);
    }

    setLoading(false);
  }

  async function login({
    email,
    password,
  }: LoginCredentials) {
    const tokenResponse = await loginService({
      email,
      password,
    });

    localStorage.setItem(
      "token",
      tokenResponse.access_token
    );

    const profile = await getCurrentUser();

    setUser(profile);
  }

  function logout() {
  localStorage.removeItem("token");

  setUser(null);

  window.location.href = "/";
}

  return (
    <AuthContext.Provider
      value={{
        user,

        loading,

        isAuthenticated: !!user,

        login,

        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used inside AuthProvider"
    );
  }

  return context;
}