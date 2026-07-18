import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../api/client';
import type { UserProfile } from '../api/types';

type UserProfileCardProps = {
  userId: string;
};

export function UserProfileCard({ userId }: UserProfileCardProps) {
  const userQuery = useQuery({
    queryKey: ['user-profile-card', userId],
    queryFn: () => apiGet<UserProfile>(`/api/users/${userId}`),
    staleTime: 60 * 1000,
  });

  return (
    <section className="panel">
      <h2>Public profile card</h2>
      <p>{userQuery.data?.displayName ?? 'Fixture public name'}</p>
      <small>Fetched from a user path template that may look related.</small>
    </section>
  );
}
