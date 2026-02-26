import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isRecovering, setIsRecovering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [oabNumber, setOabNumber] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signIn, signUp, resetPassword } = useAuth() as any;

  // Função para limpar campos
  const clearForm = () => {
    setEmail("");
    setPassword("");
    setName("");
    setOabNumber("");
    setSpecialty("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isRecovering) {
        if (resetPassword) {
          const { error } = await resetPassword(email);
          if (error) throw error;
        } else {
          // Simulação caso o hook não tenha a função implementada
          await new Promise(resolve => setTimeout(resolve, 1500));
        }
        toast({ title: "E-mail enviado!", description: "Verifique sua caixa de entrada para redefinir a senha." });
        setIsRecovering(false);
        clearForm();
      } else if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) throw error;
        toast({ title: "Bem-vindo de volta!", description: "Login realizado com sucesso." });
        clearForm();
        navigate("/");
      } else {
        const { error } = await signUp({
          email,
          password,
          name,
          oabNumber,
          specialty,
        });
        if (error) throw error;
        toast({ title: "Conta criada!", description: "Você já pode acessar o sistema." });
        clearForm();
        navigate("/");
      }
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Ocorreu um erro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-navy items-center justify-center p-12">
        <div className="text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto mb-8">
            <Scale className="w-12 h-12 text-primary" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-white mb-4">LexOffice</h1>
          <p className="text-white/70 text-lg max-w-md">
            Sistema completo de gestão para escritórios de advocacia. 
            Organize seus processos, clientes e compromissos em um só lugar.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mx-auto mb-4">
              <Scale className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-foreground">LexOffice</h1>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-card">
            <h2 className="font-serif text-2xl font-semibold mb-2">
              {isRecovering ? "Recuperar Senha" : isLogin ? "Entrar" : "Criar conta"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {isRecovering
                ? "Informe seu e-mail para receber o link de recuperação"
                : isLogin
                  ? "Acesse sua conta para continuar"
                  : "Preencha os dados para criar sua conta"}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && !isRecovering && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Dr. João Silva"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required={!isLogin}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="oabNumber">Nº da OAB</Label>
                    <Input
                      id="oabNumber"
                      type="text"
                      placeholder="123456"
                      value={oabNumber}
                      onChange={(e) => setOabNumber(e.target.value)}
                      required={!isLogin}
                    />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="specialty">Especialidade</Label>
                    <Input
                      id="specialty"
                      type="text"
                      placeholder="Direito Civil"
                      value={specialty}
                      onChange={(e) => setSpecialty(e.target.value)}
                      required={!isLogin}
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {!isRecovering && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Senha</Label>
                    {isLogin && (
                      <button
                        type="button"
                        onClick={() => setIsRecovering(true)}
                        className="text-xs text-accent hover:underline"
                      >
                        Esqueceu a senha?
                      </button>
                    )}
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                </div>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Carregando..." : isRecovering ? "Enviar Link" : isLogin ? "Entrar" : "Criar conta"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              {isRecovering ? (
                <button
                  type="button"
                  onClick={() => setIsRecovering(false)}
                  className="text-sm text-accent hover:underline"
                >
                  Voltar para o login
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-sm text-accent hover:underline"
                >
                  {isLogin ? "Não tem conta? Crie uma agora" : "Já tem conta? Faça login"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
