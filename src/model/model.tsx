export enum ActionTypes {
  LOAD = "LOAD",
}

export interface ProductsState {
  products: Product[] | null;
}

export interface Product {
  code: string;
  image: string;
  price: number;
  description: string;
}

export interface ProductsAction {
  type: ActionTypes;
  payload: Product[] | null;
}
