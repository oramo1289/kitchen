import { useEffect } from "react";

//Styles
import "./App.css";
//Components
import Table from "./pages/Table";
//Custom Hooks
import { useLoadProducts } from "./hooks/useLoadProducts";

function App() {
  const { loadProducts, loading } = useLoadProducts();

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line
  }, []);

  return <div className="app">{!loading && <Table />}</div>;
}

export default App;
