import { FC } from "react";

//Context
import { useProductsContext } from "../hooks/useProductsContext";
//Styles
import "./Table.css";
//Components

import TableHeader from "../components/TableHeader";
import TableBody from "../components/TableBody";
import { Product } from "../model/model";

export interface TableProps {
  handleSortTable: () => Product[];
  handleOpenModal: (value: string) => void;
}

const Table: FC<TableProps> = ({ handleSortTable, handleOpenModal }) => {
  const { state } = useProductsContext();

  return (
    <div className="container">
      <div className="table">
        <div className="table__header">
          {state.products &&
            Object.keys(state?.products![0]).map((key) => (
              <TableHeader key={key} columnName={key} />
            ))}
        </div>

        <div className="table__body">
          {state.products &&
            handleSortTable().map((product) => (
              <TableBody
                key={product.code}
                code={product.code}
                position={product.position}
                quantity={product.quantity}
                price={product.price}
                description={product.description}
                handleOpen={handleOpenModal}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
