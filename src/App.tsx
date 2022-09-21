import { useEffect } from "react";
import "./App.css";
import { useLoadProducts } from "./hooks/useLoadProducts";
import Products from "./pages/Products";

function App() {
  const { loadProducts, loading } = useLoadProducts();

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line
  }, []);

  return <div className="app">{!loading && <Products />}</div>;
}

export default App;
