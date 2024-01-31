import React from "react";
import "./Card.css";

function Card({ card, onClick }) {
  return (
    <>
      <li>
        <img
          className="card"
          src={card.src}
          alt={card.alt}
          onClick={() => onClick(card)}
        />
      </li>
    </>
  );
}

export default Card;
