import { useMutation, QueryClient } from '@tanstack/react-query';
import { Method, GenericObject, MutationFunction } from './hooks.types.ts';

const queryClient = new QueryClient();

export const useGenericMutation = (
  _mutationFn: MutationFunction,
  url: string,
  method: Method,
  queryKey: string[], //For invalidating queries
  mutationKey: string[],
  token?: string,
) => {
  const mutation = useMutation({
    mutationFn: (payload: GenericObject) => {
      return _mutationFn(payload, url, method, token);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: queryKey }),
    mutationKey: mutationKey,
  });
  return { mutation };
};
