import React, { FC } from "react";
import { useProductsContext } from "../hooks/useProductsContext";
import { CustomSelect } from "./CustomSelect";
import SearchBar from "./SearchBar";

import "./Menu.css";

export interface MenuProps {
  handleSearchValue: (value: string) => void;
  handleColumnSort: (value: string) => void;
  handleColunmDirection: (value: string) => void;
  columnName: string;
  direction: string;
}

const Menu: FC<MenuProps> = ({
  handleSearchValue,
  handleColumnSort,
  handleColunmDirection,
  columnName,
  direction,
}) => {
  const { state } = useProductsContext();

  return (
    <div className="menu">
      <SearchBar
        classNameValue="menu__option--width"
        onChange={handleSearchValue}
      />
      <CustomSelect
        classNameValue="menu__option--width"
        value={columnName}
        list={state.products ? Object.keys(state?.products![0]) : ["option"]}
        handleChangeList={handleColumnSort}
      />
      <CustomSelect
        classNameValue="menu__option--width"
        value={direction}
        list={["asc", "desc"]}
        handleChangeList={handleColunmDirection}
      />
    </div>
  );
};

export default Menu;
