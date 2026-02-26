import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { apiClient } from "@/lib/api-client";

export interface Petition {
  id: string;
  user_id: string;
  title: string;
  process_number: string | null;
  client_name: string;
  type: string;
  status: string;
  content_summary: string | null;
  created_at?: string;
}

export type PetitionInput = Omit<Petition, "id" | "user_id" | "created_at">;

export function usePetitions() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  // 1. BUSCAR TODAS AS PETIÇÕES DO USUÁRIO
  const { data: petitions, isLoading } = useQuery<Petition[]>({
    queryKey: ["petitions", user?.id],
    queryFn: async () => {
      if (!user?.id) {
        return [];
      }
      console.log("📜 Buscando petições do usuário:", user?.id);
      return apiClient.get<Petition[]>(`/petitions`);
    },
    enabled: !!user,
  });

  // 2. CRIAR NOVA PETIÇÃO
  const createPetition = useMutation({
    mutationFn: async (newPetition: PetitionInput) => {
      return apiClient.post<Petition>("/petitions", newPetition);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["petitions", user?.id] });
      toast.success("Petição criada com sucesso!");
    },
    onError: (error: any) => {
      toast.error("Erro ao criar petição: " + error.message);
    },
  });

  // 3. ATUALIZAR PETIÇÃO
  const updatePetition = useMutation({
    mutationFn: async ({ id, ...updates }: Partial<Petition> & { id: string }) => {
      return apiClient.put<Petition>(`/petitions/${id}`, updates);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["petitions", user?.id] });
      toast.success("Petição atualizada!");
    },
    onError: (error: any) => {
      toast.error("Erro ao atualizar petição: " + error.message);
    },
  });

  // 4. DELETAR PETIÇÃO
  const deletePetition = useMutation({
    mutationFn: async (id: string) => {
      await apiClient.delete<void>(`/petitions/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["petitions", user?.id] });
      toast.success("Petição removida.");
    },
    onError: (error: any) => {
      toast.error("Erro ao remover petição: " + error.message);
    },
  });

  return {
    petitions,
    isLoading,
    createPetition,
    updatePetition,
    deletePetition,
  };
}