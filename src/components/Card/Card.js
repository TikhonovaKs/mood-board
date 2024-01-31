import React from "react";
import "./Card.css";

function Card({ card }) {
  return (
    <>
      <li>
        <img className="card" src={card.src} />
      </li>
    </>
  );
}

export default Card;
