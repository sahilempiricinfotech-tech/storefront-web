import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../api/client';
import type { Settings } from '../api/types';

export function useSettings() {
  return useQuery({
    queryKey: ['settings'],
    queryFn: () => apiGet<Settings>('/api/settings'),
    staleTime: 0,
  });
}
