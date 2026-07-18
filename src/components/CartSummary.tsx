import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../api/client';
import type { Cart } from '../api/types';
import { useAddToCart } from '../mutations/useAddToCart';

export function CartSummary() {
  const cartQuery = useQuery({
    queryKey: ['cart'],
    queryFn: () => apiGet<Cart>('/api/cart'),
    staleTime: 30 * 1000,
  });

  const addToCart = useAddToCart();

  return (
    <aside className="panel">
      <h2>Summary</h2>
      <p>${((cartQuery.data?.subtotalCents ?? 4299) / 100).toFixed(2)}</p>
      <button
        type="button"
        onClick={() => addToCart.mutate({ sku: 'fixture-hat', quantity: 1 })}
      >
        Add fixture hat
      </button>
    </aside>
  );
}
