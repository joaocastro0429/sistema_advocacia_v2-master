import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "processo" | "peticao" | "agenda" | "sistema" | "financeiro";
  is_urgent: boolean;
  is_read: boolean;
  created_at: string;
  link?: string;
}

export function useNotifications() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => apiClient.get<Notification[]>("/notifications"),
    refetchInterval: 30000, // Atualiza a cada 30 segundos
    staleTime: 1000 * 60,
  });

  const markAsRead = useMutation({
    mutationFn: (id: string) => apiClient.patch(`/notifications/${id}/read`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });

  const markAllAsRead = useMutation({
    mutationFn: () => apiClient.patch("/notifications/read-all"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });

  const deleteNotification = useMutation({
    mutationFn: (id: string) => apiClient.delete(`/notifications/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });

  return {
    notifications: Array.isArray(data) ? data : [], // Garante que sempre seja um array
    isLoading,
    error,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  };
}
