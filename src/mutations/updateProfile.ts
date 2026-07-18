import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiPost } from '../api/client';
import type { UserProfile } from '../api/types';

type UpdateProfilePayload = {
  displayName?: string;
  marketingOptIn?: boolean;
};

export function useUpdateProfile(userId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdateProfilePayload) =>
      apiPost<UpdateProfilePayload, UserProfile>('/api/user/profile', payload),
    onSuccess: () => {
      void userId;
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
}
