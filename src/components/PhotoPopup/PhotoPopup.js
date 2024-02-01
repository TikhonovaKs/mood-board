import React from "react";
import "./PhotoPopup.css";

function PhotoPopup({ selectedCard, onClose }) {
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
          <button className="popup__addButton"></button>
          <button className="popup__closeButton" onClick={onClose}></button>
        </div>
      </div>
    </div>
  );
}
export default PhotoPopup;
