import { useState } from "react";
import { ActionTypes } from "../model/model";
import { useProductsContext } from "./useProductsContext";

export const useLoadProducts = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { dispatch } = useProductsContext();

  const loadProducts = async () => {
    setError(null);
    setLoading(true);

    const resp = await fetch("/products");
    const json = await resp.json();

    if (!resp.ok) {
      setLoading(false);
      setError(json);
    }

    if (resp.ok) {
      dispatch({ type: ActionTypes.LOAD, payload: json });
      setLoading(false);
    }
  };

  return { loadProducts, loading, error };
};
