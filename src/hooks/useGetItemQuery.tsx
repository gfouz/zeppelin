import { useQuery } from '@tanstack/react-query';
import { GenericObject, QueryFunction } from './hooks.types.ts';

export const useGetItemQuery = (
  queryFunction: QueryFunction,
  url: string,
  queryKey: string[],
  token?: string,
) => {
  const {
    isPending,
    isError,
    data: payload,
    error,
    refetch,
    isLoading,
  } = useQuery<GenericObject>({
    queryKey: [queryKey],
    queryFn: () => queryFunction(url, token),
  });

  return { payload, error, isError, isPending, refetch, isLoading };
};
