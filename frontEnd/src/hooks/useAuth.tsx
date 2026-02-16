import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { apiClient } from "@/lib/api-client";

interface User {
  id: string;
  email: string;
  user_metadata?: {
    full_name?: string;
  };
  name?: string;
  full_name?: string;
}

interface SignUpParams {
  email: string;
  password: string;
  name: string;
  oabNumber: string;
  specialty: string;
}
interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (params: SignUpParams) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Verificar se existe token armazenado ao iniciar
  useEffect(() => {
    const storedToken = localStorage.getItem("auth_token");
    const storedUser = localStorage.getItem("auth_user");

    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setToken(storedToken);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_user");
      }
    }

    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await apiClient.post<{ user: User; token: string }>(
        "/login",
        { email, password }
      );

      const { user: userData, token: authToken } = response;

      // Armazenar token e user
      localStorage.setItem("auth_token", authToken);
      localStorage.setItem("auth_user", JSON.stringify(userData));

      setToken(authToken);
      setUser(userData);

      return { error: null };
    } catch (error) {
      console.error("Login error:", error);
      return { error: error as Error };
    }
  };

  const signUp = async (params: SignUpParams) => {
    try {
      // The backend expects `name`, so we pass it from params
      await apiClient.post<User>("/register", params);

      // Após registrar, fazer login automaticamente
      const loginResult = await signIn(params.email, params.password);
      return loginResult;
    } catch (error) {
      console.error("Register error:", error);
      return { error: error as Error };
    }
  };

  const signOut = async () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = !!token && !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        signIn,
        signUp,
        signOut,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
