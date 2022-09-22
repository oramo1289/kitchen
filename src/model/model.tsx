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
  position?: number;
  quantity?: number;
}

export interface ProductsAction {
  type: ActionTypes;
  payload: Product[] | null;
}
