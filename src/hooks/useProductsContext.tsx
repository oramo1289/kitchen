import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  //just in case something fails
  if (!context) {
    throw Error("ProductsContext must be used inside ProductsContextProvider");
  }
  return context;
};
