import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../api/client';
import type { Cart } from '../api/types';

export function CartItemsList() {
  const cartItemsQuery = useQuery({
    queryKey: ['cart', 'items'],
    queryFn: () => apiGet<Cart>('/api/cart'),
    staleTime: 2 * 60 * 1000,
  });

  const items = cartItemsQuery.data?.items ?? [
    { sku: 'fixture-mug', name: 'Fixture Mug', quantity: 1, priceCents: 1799 },
    { sku: 'fixture-hat', name: 'Fixture Hat', quantity: 1, priceCents: 2500 },
  ];

  return (
    <section className="panel">
      <h1>Checkout</h1>
      <ul>
        {items.map((item) => (
          <li key={item.sku}>
            {item.quantity} x {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
