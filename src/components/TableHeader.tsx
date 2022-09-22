import React, { FC } from "react";

//Styles
import "./TableHeader.css";

export interface TableHeaderProps {
  columnName: string;
  desc: boolean;
  handleSort: () => void;
}

const TableHeader: FC<TableHeaderProps> = ({
  columnName,
  desc,
  handleSort,
}) => {
  return (
    <div
      className={`${"table__header__cell"}
                ${
                  columnName === "description"
                    ? "table__header__cell--description"
                    : ""
                }`}
    >
      <div>
        <span>{columnName}</span>
        <span className="material-icons" onClick={handleSort}>
          {desc ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </div>
    </div>
  );
};

export default TableHeader;
