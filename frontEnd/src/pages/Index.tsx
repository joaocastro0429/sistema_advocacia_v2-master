import { useMemo } from "react";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentCases } from "@/components/dashboard/RecentCases";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Briefcase, Users, Calendar, Clock } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useCases } from "@/hooks/useCases";
import { useClients } from "@/hooks/useClients";
import { useEvents } from "@/hooks/useEvents";
import { Footer } from "@/components/layout/Footer";

// REPARO: Removi o DashboardLayout daqui, pois o App.tsx já o provê.
const Index = () => {
  const { user } = useAuth();
  const { profileData } = useUserProfile();
  const { cases } = useCases();
  const { clients } = useClients();
  const { events } = useEvents();

  // Garante a leitura do nome em diferentes estruturas de usuário e evita erro de tipagem
  const userName =
    profileData?.full_name ||
    (user as any)?.user_metadata?.full_name ||
    (user as any)?.name ||
    (user as any)?.full_name ||
    user?.email?.split("@")[0] ||
    "Usuário";

  const stats = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const inOneWeek = new Date(today);
    inOneWeek.setDate(inOneWeek.getDate() + 7);
    const todayStr = today.toISOString().slice(0, 10);
    const weekEndStr = inOneWeek.toISOString().slice(0, 10);

    const processosAtivos = cases.length;
    const processosEmAndamento = cases.filter(
      (c) => (c.status || "").toLowerCase() === "open" || (c.status || "").toLowerCase() === "em_andamento"
    ).length;

    const totalClientes = clients.length;

    const isAudiencia = (e: { event_type?: string | null; title?: string | null }) => {
      const t = (e.event_type || "").toLowerCase();
      const title = (e.title || "").toLowerCase();
      return t === "audiencia" || t === "audiência" || /audi[eê]ncia/.test(title);
    };
    const audiencias = events.filter(isAudiencia);

    const isPrazo = (e: { event_type?: string | null; title?: string | null }) => {
      const t = (e.event_type || "").toLowerCase();
      const title = (e.title || "").toLowerCase();
      return t === "prazo" || /prazo/.test(title);
    };
    const prazosUrgentes = events.filter(
      (e) => isPrazo(e) && e.event_date >= todayStr && e.event_date <= weekEndStr
    ).length;

    return {
      processosAtivos,
      processosEmAndamento,
      totalClientes,
      audiencias: audiencias.length,
      prazosUrgentes,
    };
  }, [cases, clients, events]);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900">
            Bom dia, Dr. {userName}
          </h1>
          <p className="text-muted-foreground mt-1">
            Aqui está o resumo do seu escritório hoje
          </p>
        </div>
        <QuickActions />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Processos Ativos"
          value={stats.processosAtivos}
          subtitle={
            stats.processosEmAndamento > 0
              ? `${stats.processosEmAndamento} em andamento`
              : "Cadastrados no sistema"
          }
          icon={Briefcase}
          variant="accent"
        />
        <StatCard
          title="Clientes"
          value={stats.totalClientes}
          subtitle="Cadastrados no sistema"
          icon={Users}
        />
        <StatCard
          title="Audiências"
          value={stats.audiencias}
          subtitle="Da agenda"
          icon={Calendar}
        />
        <StatCard
          title="Prazos Urgentes"
          value={stats.prazosUrgentes}
          subtitle="Próximos 7 dias"
          icon={Clock}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentCases />
        </div>
        <div>
          <UpcomingEvents />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;