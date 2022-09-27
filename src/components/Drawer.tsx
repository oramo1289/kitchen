import { Drawer } from "@mui/material";
import { FC } from "react";
import { useProductsContext } from "../hooks/useProductsContext";
import "./Drawer.css";

export interface CustomDrawerProp {
  open: boolean;
  handleClose: () => void;
  codeProp: string;
}

export const CustomDrawer: FC<CustomDrawerProp> = ({
  open,
  handleClose,
  codeProp,
}) => {
  const { state } = useProductsContext();

  const productInfo = state.products?.filter(
    (product) => product.code === codeProp
  );

  const { code, price, image, description } = productInfo![0];
  const imagePath = require(`../images/${image}`);

  return (
    <>
      <Drawer anchor="bottom" open={open} onClose={handleClose}>
        <div className="drawer">
          <div className="drawer__header">
            <h2>{code}</h2>
            <span onClick={handleClose} className="material-icons">
              close
            </span>
          </div>
          <div className="drawer__info">
            <div className="drawer__info__img">
              <img src={imagePath} alt="furniture" />
            </div>
            <div className="drawer__info__description">
              <span>
                <strong>Price: ${price}</strong>
              </span>
              <div>
                <h4>Info:</h4>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
