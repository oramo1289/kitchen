import { FC } from "react";

//Styles
import "./EmptyElement.css";

const EmptyElement: FC<{}> = () => {
  return (
    <p className="products__not-found">
      There are no product that match that criteria, please try again.
    </p>
  );
};

export default EmptyElement;
