import { useOrdersList } from '../hooks/useOrders';

export function OrderList() {
  const ordersQuery = useOrdersList();
  const orders = ordersQuery.data?.pages.flatMap((page) => page.orders) ?? [];

  return (
    <section className="panel">
      <h1>Orders</h1>
      <ul>
        {orders.length === 0 ? (
          <li>No fixture orders loaded yet.</li>
        ) : (
          orders.map((order) => <li key={order.id}>{order.id}</li>)
        )}
      </ul>
    </section>
  );
}
