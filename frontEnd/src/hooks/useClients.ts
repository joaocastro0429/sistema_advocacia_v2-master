import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { useToast } from "@/hooks/use-toast";

export interface Client {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  cpf_cnpj: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  zip_code: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export type ClientInput = Omit<Client, "id" | "created_at" | "updated_at">;

export function useClients() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: clients = [], isLoading, error } = useQuery({
    queryKey: ["clients"],
    queryFn: async () => {
      const response = await apiClient.get<Client[]>("/clients");
      return response || [];
    },
  });

  const createClient = useMutation({
    mutationFn: async (input: ClientInput) => {
      const response = await apiClient.post<Client>("/clients", input);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      toast({ title: "Cliente criado com sucesso!" });
    },
    onError: (error: Error) => {
      toast({ title: "Erro ao criar cliente", description: error.message, variant: "destructive" });
    },
  });

  const updateClient = useMutation({
    mutationFn: async ({ id, ...input }: Partial<Client> & { id: string }) => {
      const response = await apiClient.put<Client>(`/clients/${id}`, input);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      toast({ title: "Cliente atualizado com sucesso!" });
    },
    onError: (error: Error) => {
      toast({ title: "Erro ao atualizar cliente", description: error.message, variant: "destructive" });
    },
  });

  const deleteClient = useMutation({
    mutationFn: async (id: string) => {
      await apiClient.delete(`/clients/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      toast({ title: "Cliente excluído com sucesso!" });
    },
    onError: (error: Error) => {
      toast({ title: "Erro ao excluir cliente", description: error.message, variant: "destructive" });
    },
  });

  return {
    clients,
    isLoading,
    error,
    createClient,
    updateClient,
    deleteClient,
  };
}
