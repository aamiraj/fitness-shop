export type TProduct = {
  images: Array<string>;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
};

export type TFormProduct = {
  name: string;
  description: string;
  price: string | number;
  stock: string | number;
  category: string;
  [key: string]: string | number;
};
