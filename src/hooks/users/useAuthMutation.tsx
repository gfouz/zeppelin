import { useMutation, QueryClient } from '@tanstack/react-query';
import { Auth } from '../../schemas/auth.schema.ts';
import { User } from '../../store/actions.ts';

const queryClient = new QueryClient();

export const useAuthMutation = (fetchApi: {
  (data: Auth): Promise<User>;
  (arg0: Auth): Promise<unknown>;
}) => {
  const mutation = useMutation({
    mutationFn: (data: Auth) => {
      return fetchApi(data);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['auth'] });
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['auth'] }),
    mutationKey: ['user-auth'],
  });
  return { mutation };
};
