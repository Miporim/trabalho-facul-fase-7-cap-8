export interface Product {
  id: number;
  title: string;
  price: number;
}

/* eslint-disable prefer-const */
export let products: Product[] = [
  { id: 1, title: 'Smartphone X', price: 2999.99 },
  { id: 2, title: 'Notebook Pro', price: 7499.00 },
  { id: 3, title: 'Fone de Ouvido BT', price: 499.50 },
  { id: 4, title: 'Smartwatch 2', price: 1299.00 },
];