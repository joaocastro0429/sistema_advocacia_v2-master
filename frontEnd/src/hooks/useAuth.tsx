import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { apiClient } from "@/lib/api-client";
import { queryClient } from "@/App";

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
  resetPassword: (email: string) => Promise<{ error: Error | null }>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const IDLE_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutos
const ACTIVITY_EVENTS: Array<keyof WindowEventMap> = [
  "mousemove",
  "mousedown",
  "keydown",
  "scroll",
  "touchstart",
];

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

  // Limpar cache quando usuário muda
  useEffect(() => {
    if (!user) {
      console.log('👤 Usuário deslogado - invalidando queries');
      queryClient.invalidateQueries();
    } else {
      console.log('👤 Usuário logado:', { id: user.id, email: user.email });
    }
  }, [user]);

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
      console.log('📝 Iniciando registro com dados:', { 
        email: params.email, 
        name: params.name,
        oabNumber: params.oabNumber,
        specialty: params.specialty 
      });
      
      const response = await apiClient.post<User>("/register", {
        email: params.email,
        password: params.password,
        name: params.name,
        oabNumber: params.oabNumber,
        specialty: params.specialty,
      });
      
      console.log('✅ Usuário registrado com sucesso:', response);

      // Após registrar, fazer login automaticamente
      const loginResult = await signIn(params.email, params.password);
      return loginResult;
    } catch (error) {
      console.error("❌ Erro no registro:", error);
      return { error: error as Error };
    }
  };

  const resetPassword = async (email: string) => {
    try {
      console.log('📧 Solicitando reset de senha para:', email);
      
      // Quando tiver o endpoint no backend, descomente e ajuste:
      // await apiClient.post("/reset-password", { email });
      
      // Por enquanto, apenas simula o envio (remova este timeout quando implementar)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return { error: null };
    } catch (error) {
      console.error("Password reset error:", error);
      return { error: error as Error };
    }
  };

  const signOut = async () => {
    console.log('🚪 Realizando logout...');
    
    // Limpar todos os dados do localStorage relacionados a auth
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
    
    // Limpar qualquer outro dado de sessão
    sessionStorage.clear();
    
    // Limpar cache do React Query
    queryClient.clear();
    console.log('🔄 Cache do React Query limpo');
    
    // Resetar estado
    setToken(null);
    setUser(null);
    
    console.log('✅ Logout completo - localStorage e cache limpos');
  };

  useEffect(() => {
    if (!token || !user) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const onIdle = () => {
      localStorage.setItem("session_expired_reason", "idle");
      void signOut();
    };

    const resetIdleTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(onIdle, IDLE_TIMEOUT_MS);
    };

    ACTIVITY_EVENTS.forEach((eventName) =>
      window.addEventListener(eventName, resetIdleTimer, { passive: true })
    );

    resetIdleTimer();

    return () => {
      clearTimeout(timeoutId);
      ACTIVITY_EVENTS.forEach((eventName) =>
        window.removeEventListener(eventName, resetIdleTimer)
      );
    };
  }, [token, user]);

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
        resetPassword,
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
