import React, { Fragment } from "react";
import "./SingleCard.scss";

const SingleCard = ({ card, choiceHandle, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      choiceHandle(card);
    }
  };
  return (
    <Fragment>
      <div className="card">
        <div className={flipped ? "flipped" : ""}>
          <img className="front" src={card.src} alt="card front " />
          <img
            className="back"
            src="/img/cover.png"
            onClick={handleClick}
            alt="card back "
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SingleCard;
