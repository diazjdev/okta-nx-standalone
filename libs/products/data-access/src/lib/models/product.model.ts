export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface Discount {
  discount: number;
}

export interface DiscountedProduct extends Product, Discount {}
