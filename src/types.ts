export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'appetizers' | 'sushi' | 'combos' | 'drinks' | 'desserts';
  image: string;
  customizable?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
  notes?: string;
}

export interface OrderStatus {
  code: string;
  status: 'received' | 'preparing' | 'ready';
  timestamp: Date;
}