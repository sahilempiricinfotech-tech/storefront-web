import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../api/client';

export function useDynamicData<TData = unknown>(resourceType: string, id: string) {
  const resourcePath = `/api/${resourceType}/${id}`;

  return useQuery({
    queryKey: [resourceType, id],
    queryFn: () => apiGet<TData>(resourcePath),
    staleTime: 15 * 1000,
  });
}
