import { FC, useState } from "react";
import Card from "../components/Card";
import EmptyElement from "../components/EmptyElement";
import SearchBar from "../components/SearchBar";
import { useProductsContext } from "../hooks/useProductsContext";
import { Product } from "../model/model";

import "./Products.css";

const Products: FC<{}> = () => {
  const { state } = useProductsContext();
  const [searchValue, setSearchValue] = useState<string>("");

  const products =
    searchValue !== ""
      ? state.products?.filter(
          (product) =>
            product.code
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase()) ||
            product.description
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase())
        )
      : state.products;

  const handleSearchValue = (value: string): void => {
    setSearchValue(value);
  };

  return (
    <div className="container">
      <div className="search">
        <p>Search:</p>
        <SearchBar onChange={handleSearchValue} />
      </div>

      <div className="products">
        {state.products &&
          products!.map((product: Product) => (
            <Card
              key={product.code}
              code={product.code}
              price={product.price}
              description={product.description}
              imageName={product.image}
            />
          ))}

        {!state.products || (products?.length === 0 && <EmptyElement />)}
      </div>
    </div>
  );
};

export default Products;
