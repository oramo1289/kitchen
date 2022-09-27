import React, { FC } from "react";
import Dialog from "@mui/material/Dialog";

import "./Modal.css";
import { DialogTitle } from "@mui/material";
import { useProductsContext } from "../hooks/useProductsContext";

export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  codeProp: string;
}
const Modal: FC<ModalProps> = ({ open, handleClose, codeProp }) => {
  const { state } = useProductsContext();

  const productInfo = state.products?.filter(
    (product) => product.code === codeProp
  );

  const { code, price, image, description } = productInfo![0];
  const imagePath = require(`../images/${image}`);

  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <div className="modal__header">
          <DialogTitle>Product Description</DialogTitle>
          <span onClick={handleClose} className="material-icons">
            close
          </span>
        </div>
        <div className="modal">
          <h2>{code}</h2>
          <div className="modal__info">
            <div className="modal__info__img">
              <img src={imagePath} alt="furniture" />
            </div>
            <div className="modal__info__description">
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
      </Dialog>
    </div>
  );
};

export default Modal;
