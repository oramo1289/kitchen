import { FC } from "react";

//Interfaces
import { Product } from "../model/model";

//Components
import ImageCell from "./ImageCell";

//Styles
import "./TableBody.css";

export interface TableBodyProps extends Product {}

const TableBody: FC<TableBodyProps> = ({
  code,
  position,
  quantity,
  image,
  price,
  description,
}) => {
  return (
    <div key={code} className="table__body__row">
      <div className={`${"table__body__row__cell"}`}>{code}</div>
      <div className={`${"table__body__row__cell"}`}>{position}</div>
      <div className={`${"table__body__row__cell"}`}>{quantity}</div>
      <div className={`${"table__body__row__cell"}`}>
        <ImageCell imageName={image} />
      </div>
      <div className={`${"table__body__row__cell"}`}>${price}</div>
      <div
        className={`${"table__body__row__cell"} ${"table__body__row__cell--description"}`}
      >
        {description}
      </div>
    </div>
  );
};

export default TableBody;
