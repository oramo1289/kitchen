import React, { FC } from "react";

import "./ImageCell.css";

export interface ImageCellProps {
  imageName: string;
}

const ImageCell: FC<ImageCellProps> = ({ imageName }) => {
  const image = require(`../images/${imageName}`);

  return <img className="image" src={image} alt="furniture" />;
};

export default ImageCell;
