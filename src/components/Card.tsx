import { FC } from "react";

import "./Card.css";

export interface CardProps {
  code: string;
  price: number;
  description: string;
  imageName: string;
}

const Card: FC<CardProps> = ({
  code = "SOME-123",
  price = 5000,
  description = "This is a real and nice desciption that is in english but also puese ser español",
  imageName = "01.png",
}) => {
  const image = require(`../images/${imageName}`);
  return (
    <div className="card">
      <div className="card__info">
        <div className="card__info__img">
          <img className="img" src={image} alt="furniture" />
        </div>
        <div className="card__info__description">
          <h3>{code}</h3>
          <span>${price}</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
