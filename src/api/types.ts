export type UserProfile = {
  id: string;
  displayName: string;
  email: string;
  loyaltyTier: 'bronze' | 'silver' | 'gold';
};

export type CartItem = {
  sku: string;
  name: string;
  quantity: number;
  priceCents: number;
};

export type Cart = {
  id: string;
  items: CartItem[];
  subtotalCents: number;
};

export type OrderSummary = {
  id: string;
  placedAt: string;
  totalCents: number;
};

export type OrderDetail = OrderSummary & {
  shipmentStatus: 'pending' | 'packed' | 'shipped';
  items: CartItem[];
};

export type Settings = {
  emailReceipts: boolean;
  marketingOptIn: boolean;
  currency: 'USD' | 'EUR' | 'GBP';
};
