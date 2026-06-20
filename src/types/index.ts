export interface Product {
  id: number;
  name: string;
  price: number;
  tag: string;
  description: string;
  image: string;
  accent: string;
  sizes: string[];
  colors: string[];
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number, size: string) => void;
  updateQuantity: (id: number, size: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  shipping: number;
  total: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

export interface FAQSection {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  items: FAQItem[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface SizeRow {
  size: string;
  chest: string;
  waist: string;
  us: string;
  eu: string;
}

export interface ShippingMethod {
  id: string;
  name: string;
  time: string;
  price: number;
  description: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}
