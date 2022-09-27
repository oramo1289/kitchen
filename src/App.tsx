import { useEffect } from "react";

//Styles
import "./App.css";
//Components
import Products from "./pages/Products";
//Custom Hooks
import { useLoadProducts } from "./hooks/useLoadProducts";

function App() {
  const { loadProducts, loading } = useLoadProducts();

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line
  }, []);

  return <div className="app">{!loading && <Products />}</div>;
}

export default App;
