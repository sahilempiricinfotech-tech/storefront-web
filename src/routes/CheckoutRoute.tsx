import { CartItemsList } from '../components/CartItemsList';
import { CartSummary } from '../components/CartSummary';

export function CheckoutRoute() {
  return (
    <section className="twoColumn">
      <CartItemsList />
      <CartSummary />
    </section>
  );
}
