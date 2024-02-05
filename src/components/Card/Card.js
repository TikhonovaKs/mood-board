// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';
// import useBoard from '../../providers/BoardProvider/BoardProvider.hook.js';
// import { CiBookmarkPlus, CiCircleMinus } from 'react-icons/ci';
// import './Card.css';

// function Card({ card, onClick }) {
//   const { saveCard, deleteCard } = useBoard();

//   // const [isHovered, setIsHovered] = useState(false);

//   const handleSave = (card) => {
//     saveCard(card);
//   };

//   const handleDelete = (card) => {
//     deleteCard(card);
//   }

//   return (
//     <div>
//       {/* onMouseEnter={() => setIsHovered(true)}
//    onMouseLeave={() => setIsHovered(false)}
//   style={{ position: 'relative', display: 'inline-block' }} */}

//       <li className="card__imageContainer">
//         <img className="card skeleton" src={card.src} alt={card.alt} onClick={() => onClick(card)} />
//         {/* {isHovered &&  */}
//         {card.isSaved === true ? (
//           <button className="card__button" onClick={() => handleDelete(card)}>
//             <CiCircleMinus />
//           </button>
//         ) : (
//           <button className="card__button" onClick={() => handleSave(card)}>
//             <CiBookmarkPlus />
//           </button>
//         )}
//         {/* } */}
//       </li>
//     </div>
//   );
// }

// export default Card;

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import useBoard from '../../providers/BoardProvider/BoardProvider.hook.js';
import { CiBookmarkPlus, CiCircleMinus } from 'react-icons/ci';
import './Card.css';
function Card({ card, onClick }) {
  const { saveCard, deleteCard } = useBoard();
  // const [isHovered, setIsHovered] = useState(false);
  const handleSave = (card) => {
    saveCard(card);
  };
  const handleDelete = (card) => {
    deleteCard(card);
  }
  return (
    <>
    <div className="card__wrapper">
      {/* onMouseEnter={() => setIsHovered(true)}
   onMouseLeave={() => setIsHovered(false)}
  style={{ position: 'relative', display: 'inline-block' }} */}
        <img className="card" src={card.src} alt={card.alt} onClick={() => onClick(card)} />
        {/* {isHovered &&  */}
        {card.isSaved === true ? (
          <button className="card__button" onClick={() => handleDelete(card)}>
            <CiCircleMinus />
          </button>
        ) : (
          <button className="card__button" onClick={() => handleSave(card)}>
            <CiBookmarkPlus />
          </button>
        )}
        {/* } */}
    </div>
    </>
  );
}
export default Card;
