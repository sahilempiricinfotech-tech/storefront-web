import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { apiGet } from '../api/client';
import type { OrderDetail, OrderSummary } from '../api/types';

type OrdersPage = {
  orders: OrderSummary[];
  nextCursor?: string;
};

export function useOrdersList() {
  return useInfiniteQuery({
    queryKey: ['orders', 'list'],
    queryFn: ({ pageParam }) =>
      apiGet<OrdersPage>(
        pageParam ? `/api/orders?cursor=${pageParam}` : '/api/orders',
      ),
    initialPageParam: '',
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 60 * 1000,
  });
}

export function useOrderDetail(orderId: string) {
  return useQuery({
    queryKey: ['orders', orderId],
    queryFn: () => apiGet<OrderDetail>(`/api/orders/${orderId}`),
    staleTime: 60 * 1000,
  });
}
