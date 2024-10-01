import { useQuery } from '@tanstack/react-query';
import { GenericObject, GetListFunction } from './hooks.types.ts';

export const useGetListQuery = (
  queryFunction: GetListFunction,
  url: string,
  queryKey: string[],
  token?: string,
) => {
  const { isPending, isError, data, error, refetch, isLoading } = useQuery<
    GenericObject[]
  >({
    queryKey: [queryKey],
    queryFn: () => queryFunction(url, token),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
  let payload: GenericObject[] | undefined = [];
  payload =
    data && data?.length > 0
      ? data?.map((item: GenericObject) => item)
      : payload;
  return { payload, error, isError, isPending, refetch, isLoading };
};
