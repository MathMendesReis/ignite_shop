export interface Response {
  products: Product[]
}
export interface Product {
  id: string;
  name: string;
  images: string[];
  default_price: string;
  image: string;
  description: string;
  featured: boolean;
}