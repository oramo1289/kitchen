import { FC, useState } from "react";
import Cards from "../components/Cards";
import { CustomDrawer } from "../components/Drawer";
import EmptyElement from "../components/EmptyElement";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import Table from "../components/Table";
import { useProductsContext } from "../hooks/useProductsContext";
import { useWindowSize } from "../hooks/useWindowSize";
import { Product } from "../model/model";

import "./Products.css";

const Products: FC<{}> = () => {
  const { state } = useProductsContext();
  const [width] = useWindowSize();
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectCode, setCode] = useState<string>("");
  const [direction, setDirection] = useState<string>("");
  const [columnName, setColumnName] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenModal = (code: string) => {
    setOpen(!open);
    setCode(code);
  };

  const handleClose = () => setOpen(!open);

  const handleSearchValue = (value: string): void => setSearchValue(value);

  const handleColumnSort = (value: string) => setColumnName(value);

  const handleColunmDirection = (value: string): void => setDirection(value);

  let products =
    searchValue !== ""
      ? state.products?.filter(
          (product) =>
            product.code
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase()) ||
            product
              .description!.toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase())
        )
      : (state.products as Product[]);

  const handleCompare = (productA: Product, productB: Product) => {
    let comparison = 0;
    if (
      productA[columnName as keyof typeof productA]! <
      productB[columnName as keyof typeof productB]!
    ) {
      comparison = -1;
    }
    if (
      productA[columnName as keyof typeof productA]! >
      productB[columnName as keyof typeof productB]!
    ) {
      comparison = 1;
    }
    return direction !== "desc" ? comparison : comparison * -1;
  };

  const handleSortTable = (): Product[] =>
    products?.sort(handleCompare) as Product[];

  return (
    <div className="container">
      <div className="table__caption">
        <h2> Product Table</h2>
      </div>
      <Menu
        handleSearchValue={handleSearchValue}
        handleColumnSort={handleColumnSort}
        handleColunmDirection={handleColunmDirection}
        columnName={columnName}
        direction={direction}
      />

      {width < 450 && (
        <Cards
          handleSortTable={handleSortTable}
          handleOpenModal={handleOpenModal}
        />
      )}
      {width > 450 && (
        <Table
          handleSortTable={handleSortTable}
          handleOpenModal={handleOpenModal}
        />
      )}
      {width > 450 && selectCode && (
        <Modal codeProp={selectCode} open={open} handleClose={handleClose} />
      )}
      {width < 450 && selectCode && (
        <CustomDrawer
          codeProp={selectCode}
          open={open}
          handleClose={handleClose}
        />
      )}
      {!state.products || (products?.length === 0 && <EmptyElement />)}
    </div>
  );
};

export default Products;
