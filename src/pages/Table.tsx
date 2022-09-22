import { FC, useState } from "react";

//Context
import { useProductsContext } from "../hooks/useProductsContext";
//Styles
import "./Table.css";
//Components
import SearchBar from "../components/SearchBar";
import EmptyElement from "../components/EmptyElement";
import TableHeader from "../components/TableHeader";
import TableBody from "../components/TableBody";

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

  const handleColumnSort = () => {
    setDesc(!desc);
    setKey(key);
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
      <div className="table__caption">
        <h2> Product Table</h2>
      </div>
      <div className="search">
        <SearchBar
          classNameValue="search__button--width"
          onChange={handleSearchValue}
        />
      </div>
      <div className="table">
        <div className="table__header">
          {state.products &&
            products?.length !== 0 &&
            Object.keys(products![0]).map((key) => (
              <TableHeader
                key={key}
                columnName={key}
                handleSort={handleColumnSort}
                desc={desc}
              />
            ))}
        </div>

        <div className="table__body">
          {state.products &&
            products?.length !== 0 &&
            handleSortTable()?.map((product) => (
              <TableBody
                key={product.code}
                code={product.code}
                position={product.position}
                quantity={product.quantity}
                image={product.image}
                price={product.price}
                description={product.description}
              />
            ))}
        </div>
      </div>

      {!state.products || (products?.length === 0 && <EmptyElement />)}
    </div>
  );
};

export default Table;
