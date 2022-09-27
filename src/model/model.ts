export enum ActionTypes {
  LOAD = "LOAD",
}

export interface ProductsState {
  products: Product[] | null;
}

export interface Product {
  code: string;
  price: number;
  image?: string;
  description?: string;
  position?: number;
  quantity?: number;
}

export interface ProductsAction {
  type: ActionTypes;
  payload: Product[] | null;
}
