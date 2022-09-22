import { FC, useState } from "react";
import { useProductsContext } from "../hooks/useProductsContext";
import ImageCell from "./ImageCell";
import SearchBar from "./SearchBar";

import "./Table.css";

export interface TableProps {}

const Table: FC<TableProps> = () => {
  const { state } = useProductsContext();
  const [searchValue, setSearchValue] = useState<string>("");
  const [desc, setDesc] = useState<boolean>(false);
  const [key, setKey] = useState<string>("position");

  let products =
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

  const handleCompare = (a: { [x: string]: any }, b: { [x: string]: any }) => {
    if (!desc && (key === "code" || key === "description"))
      return a[key].localeCompare(b[key]);

    if (desc && (key === "code" || key === "description"))
      return b[key].localeCompare(a[key]);

    return !desc ? a[key] - b[key] : b[key] - a[key];
  };

  const handleSortTable = () => {
    return products?.sort(handleCompare);
  };

  return (
    <div className="container">
      <div className="search">
        <p>Search:</p>
        <SearchBar onChange={handleSearchValue} />
      </div>
      <div className="table">
        <div className="table__caption">Product Table</div>
        <div className="table__header">
          {state.products &&
            Object.keys(products![0]).map((key) => (
              <div key={key} className="table__header__cell">
                <div className={"cell-container"}>
                  <span>{key}</span>
                  <span
                    className="material-icons"
                    onClick={() => {
                      setDesc(!desc);
                      setKey(key);
                    }}
                  >
                    {desc ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                  </span>
                </div>
              </div>
            ))}
        </div>

        <div className="table__body">
          {state.products &&
            handleSortTable()?.map((product) => (
              <div key={product.code} className="table__body__row">
                <div className={`${"table__body__row__cell"}`}>
                  {product.code}
                </div>
                <div className={`${"table__body__row__cell"}`}>
                  {product.position}
                </div>
                <div className={`${"table__body__row__cell"}`}>
                  {product.quantity}
                </div>
                <div className={`${"table__body__row__cell"}`}>
                  <ImageCell imageName={product.image} />
                </div>
                <div className={`${"table__body__row__cell"}`}>
                  ${product.price}
                </div>
                <div className={`${"table__body__row__cell"}`}>
                  {product.description}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
