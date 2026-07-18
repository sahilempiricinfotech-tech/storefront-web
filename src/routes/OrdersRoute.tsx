import { DynamicPreview } from '../components/DynamicPreview';
import { OrderDetailPanel } from '../components/OrderDetailPanel';
import { OrderList } from '../components/OrderList';

export function OrdersRoute() {
  return (
    <section className="stack">
      <OrderList />
      <OrderDetailPanel orderId="order-456" />
      <DynamicPreview resourceType="inventory" id="sku-789" />
    </section>
  );
}
