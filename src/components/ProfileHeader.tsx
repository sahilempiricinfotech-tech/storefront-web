import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../api/client';
import type { UserProfile } from '../api/types';
import { useUpdateProfile } from '../mutations/updateProfile';

type ProfileHeaderProps = {
  userId: string;
};

export function ProfileHeader({ userId }: ProfileHeaderProps) {
  const profileQuery = useQuery({
    queryKey: ['user', userId],
    queryFn: () => apiGet<UserProfile>('/api/user/profile'),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const updateProfile = useUpdateProfile(userId);

  if (profileQuery.isLoading) {
    return <section className="panel">Loading account header...</section>;
  }

  const profile = profileQuery.data;

  return (
    <section className="panel">
      <h1>{profile?.displayName ?? 'Fixture Shopper'}</h1>
      <p>{profile?.email ?? 'shopper@example.test'}</p>
      <button
        type="button"
        onClick={() =>
          updateProfile.mutate({
            displayName: 'Updated Fixture Shopper',
            marketingOptIn: true,
          })
        }
      >
        Save profile
      </button>
    </section>
  );
}
