import { useOrderDetail } from '../hooks/useOrders';

type OrderDetailPanelProps = {
  orderId: string;
};

export function OrderDetailPanel({ orderId }: OrderDetailPanelProps) {
  const orderQuery = useOrderDetail(orderId);

  return (
    <section className="panel">
      <h2>Order detail</h2>
      <p>{orderQuery.data?.shipmentStatus ?? 'pending'}</p>
    </section>
  );
}
