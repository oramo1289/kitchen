import { FC, Fragment } from "react";

//Interfaces
import { Product } from "../model/model";

//Styles
import "./TableBody.css";

export interface TableBodyProps extends Product {
  handleOpen: (code: string) => void;
}

const TableBody: FC<TableBodyProps> = ({
  code,
  position,
  quantity,
  price,
  handleOpen,
}) => {
  return (
    <Fragment>
      <div key={code} className="table__body__row">
        <div className={`${"table__body__row__cell"}`}>{code}</div>
        <div className={`${"table__body__row__cell"}`}>{position}</div>
        <div className={`${"table__body__row__cell"}`}>{quantity}</div>
        <div className={`${"table__body__row__cell"}`}>${price}</div>
        <div
          onClick={() => handleOpen(code)}
          className={`${"table__body__row__cell"} ${"material-icons"}`}
        >
          {"open_in_browser"}
        </div>
      </div>
    </Fragment>
  );
};

export default TableBody;
