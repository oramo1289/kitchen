import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "material-icons/iconfont/material-icons.css";

import App from "./App";
import { ProductsContextProvider } from "./context/ProductsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </React.StrictMode>
);
