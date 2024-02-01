import React, { useState } from 'react';
import { CiBookmarkPlus } from "react-icons/ci";
import './Card.css';

function Card({ card, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <li>
        <img className="card" src={card.src} alt={card.alt} onClick={() => onClick(card)} />
        {isHovered && 
        <button className="card__saveButton">
          <CiBookmarkPlus />
        </button>}
      </li>
    </div>
  );
}

export default Card;
