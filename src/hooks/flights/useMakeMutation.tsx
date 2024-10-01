import { useMutation, QueryClient } from '@tanstack/react-query';
import { Flight, FetchApiType, Method } from '../../flights.types.ts';

const queryClient = new QueryClient();

export const useMakeMutation = (
  fetchApi: FetchApiType,
  url: string,
  method: Method,
  token?: string,
) => {
  const mutation = useMutation({
    mutationFn: (payload: Flight) => {
      return fetchApi(payload, url, method, token);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['get-flights'] });
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ['get-flights'] }),
    mutationKey: ['create-flight'],
  });
  return { mutation };
};
