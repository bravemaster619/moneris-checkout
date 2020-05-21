export interface ShoppingCartItemTaxInterface {
  amount?: number;
  description?: string;
  rate?: number;
}

export interface ShoppingCartItemInterface {
  url?: string;
  description?: string;
  product_code?: string;
  unit_cost?: number;
  subtotal?: number;
  tax?: ShoppingCartItemTaxInterface;
}

export interface ShoppingCartInterface {
  items?: Array<ShoppingCartItemInterface>;
}