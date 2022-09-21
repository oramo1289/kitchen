import { ProductsAction, ProductsState, ActionTypes } from "../model/model";

export const productsReducer = (
  state: ProductsState,
  action: ProductsAction
) => {
  switch (action.type) {
    case ActionTypes.LOAD:
      return { products: [...action.payload!] };

    default:
      return state;
  }
};
