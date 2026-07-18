import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { AccountRoute } from './routes/AccountRoute';
import { CheckoutRoute } from './routes/CheckoutRoute';
import { OrdersRoute } from './routes/OrdersRoute';
import { SettingsRoute } from './routes/SettingsRoute';

export function App() {
  return (
    <div className="appShell">
      <header className="topNav">
        <strong>Storefront Fixture</strong>
        <nav>
          <Link to="/account">Account</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/account" replace />} />
          <Route path="/account" element={<AccountRoute />} />
          <Route path="/checkout" element={<CheckoutRoute />} />
          <Route path="/orders" element={<OrdersRoute />} />
          <Route path="/settings" element={<SettingsRoute />} />
        </Routes>
      </main>
    </div>
  );
}
