import { useMutation, QueryClient } from '@tanstack/react-query';
import { DeleteFunction } from './hooks.types';

const queryClient = new QueryClient();

export const useDeleteMutation = (
  fetchApi: DeleteFunction,
  url: string,
  queryKey: string[],
  mutationKey: string[],
  token?: string,
) => {
  const mutation = useMutation({
    mutationFn: () => {
      return fetchApi(url, token);
    },

    onError: (error) => {
      //console.error('Error al eliminar el registro:', error);
      return error;
    },
    onSuccess: () => {
      
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: queryKey });
      //queryClient.setQueryData([queryKey], newList)
    },
    /*onSettled: () => queryClient.invalidateQueries({ queryKey: queryKey }),*/
    mutationKey: mutationKey,
  });
  return { mutation };
};
