import { useReducer, createContext, Dispatch } from "react";
import { ProductsState } from "../model/model";
import { productsReducer } from "../reducer/ProductsReducer";

export interface ProductsContextProviderProps {
  children: React.ReactNode;
}

const initialState = {
  products: null,
};

export const ProductsContext = createContext<{
  state: ProductsState;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const ProductsContextProvider: React.FC<
  ProductsContextProviderProps
> = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, {
    products: null,
  });

  return (
    <ProductsContext.Provider value={{ state: { ...state }, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};
