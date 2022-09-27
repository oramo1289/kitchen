import React, { FC } from "react";

//Styles
import "./TableHeader.css";

export interface TableHeaderProps {
  columnName: string;
}

const TableHeader: FC<TableHeaderProps> = ({ columnName }) => {
  return (
    <div
      className={`${"table__header__cell"}
                ${columnName === "image" ? "table__header__cell--image" : ""}`}
    >
      <div>
        <span className={`${"table__header__cell__name"}`}>{columnName}</span>
      </div>
    </div>
  );
};

export default TableHeader;
