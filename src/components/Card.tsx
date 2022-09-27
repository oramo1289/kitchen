import { FC } from "react";

import "./Card.css";

export interface CardProps {
  code: string;
  price: number;
  position: number;
  handleOpen: (code: string) => void;
}

const Card: FC<CardProps> = ({
  code = "SOME-123",
  price = 5000,
  position,
  handleOpen,
}) => {
  return (
    <div className="card">
      <h3>{code}</h3>

      <div className="card__info">
        {/* <div className="card__info__img">
          <img className="img" src={image} alt="furniture" />
        </div> */}
        <div className="card__info__description">
          <div>
            <strong>Price: ${price}</strong>
          </div>
          <div>
            <strong>Position: #{position}</strong>
          </div>
          <div>
            <span>
              <strong>
                Info:
                <span
                  onClick={() => handleOpen(code)}
                  className={`${"card__info__description__icon"} ${"material-icons"}`}
                >
                  {"open_in_browser"}
                </span>
              </strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
