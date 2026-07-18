import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../api/client';
import type { UserProfile } from '../api/types';

type AccountSidebarProps = {
  userId: string;
};

export function AccountSidebar({ userId }: AccountSidebarProps) {
  const profileQuery = useQuery({
    queryKey: ['profile'],
    queryFn: () => apiGet<UserProfile>('/api/user/profile'),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });

  return (
    <aside className="panel">
      <h2>Account</h2>
      <dl>
        <dt>User ID</dt>
        <dd>{userId}</dd>
        <dt>Loyalty</dt>
        <dd>{profileQuery.data?.loyaltyTier ?? 'silver'}</dd>
      </dl>
    </aside>
  );
}
