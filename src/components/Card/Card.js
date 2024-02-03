// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import useBoard from '../../providers/BoardProvider/BoardProvider.hook.js';
import { CiBookmarkPlus } from "react-icons/ci";
import './Card.css'; 

function Card({ card, onClick }) {
  const { saveCard } = useBoard();

  // const [isHovered, setIsHovered] = useState(false);
  
  const handleSave = (card) => {
    saveCard(card);
  }

  return (
    <div>
     {/* onMouseEnter={() => setIsHovered(true)}
   onMouseLeave={() => setIsHovered(false)}
  style={{ position: 'relative', display: 'inline-block' }} */}
 
      <li className='card__imageContainer'>
        <img className="card skeleton" src={card.src} alt={card.alt} onClick={() => onClick(card)} />
        {/* {isHovered &&  */}
        <button className="card__saveButton" onClick={() => handleSave(card)}>
          <CiBookmarkPlus />
        </button>
        {/* } */}
      </li>
    </div>
  );
}

export default Card;
