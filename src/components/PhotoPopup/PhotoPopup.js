import React from "react";
import "./PhotoPopup.css";
// import SaveImageButton from '../../images/add-btn.svg';
// import RemoveImageButton from '../../images/remove-btn.svg';
import useBoard from '../../providers/BoardProvider/BoardProvider.hook.js';
import { CiBookmarkPlus, CiCircleMinus } from 'react-icons/ci';


function PhotoPopup({ selectedCard, onClose }) {
  const { saveCard, deleteCard } = useBoard();

  // const [isHovered, setIsHovered] = useState(false);

  const handleSave = (card) => {
    saveCard(card);
  };

  const handleDelete = (card) => {
    deleteCard(card);
  }
  return (
    <div className="popup popup_overley_dark">
      <div className="popup__container">
        {/* <h3 className="popup__title">{selectedCard.alt}</h3> */}
        <img
          src={selectedCard.src}
          alt={selectedCard.alt}
          className="popup__image"
        />
        <div className="popup__buttonsContainer">
          {/* <button className="popup__addButton"></button> */}
          {selectedCard.isSaved === true ? (
          <button className="popup__addButton" onClick={() => handleDelete(selectedCard)}>
            <CiCircleMinus />
          </button>
        ) : (
          <button className="popup__addButton" onClick={() => handleSave(selectedCard)}>
            <CiBookmarkPlus />
          </button>
        )}
          <button className="popup__closeButton" onClick={onClose}></button>
        </div>
      </div>
    </div>
  );
}
export default PhotoPopup;
