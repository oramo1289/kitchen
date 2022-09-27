import React, { FC } from "react";
import { useProductsContext } from "../hooks/useProductsContext";
import { Product } from "../model/model";
import Card from "./Card";
import { TableProps } from "./Table";

import "./Cards.css";

export interface CardsProps extends TableProps {
  handleSortTable: () => Product[];
  handleOpenModal: (value: string) => void;
}

const Cards: FC<CardsProps> = ({ handleSortTable, handleOpenModal }) => {
  const { state } = useProductsContext();

  return (
    <div className="products">
      {state.products &&
        handleSortTable().map((product: Product) => (
          <Card
            key={product.code}
            code={product.code}
            price={product.price}
            position={product.position!}
            handleOpen={handleOpenModal}
          />
        ))}
    </div>
  );
};

export default Cards;
