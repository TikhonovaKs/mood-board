import React from "react";
import "./PhotoPopup.css";

function PhotoPopup({ searchList, selectedId, onClose }) {
  // const onePhoto = searchList[0];

  const onePhoto = searchList.find((photo) => photo.id === selectedId);

  return (
    <div className="popup popup_overley_dark">
      <div className="popup__container">
        <h3 className="popup__title">nature</h3>
        <img src={onePhoto?.src} alt={onePhoto?.alt} className="popup__image" />
        <div className="popup__buttonsContainer">
          <button className="popup__addButton"></button>
          <button className="popup__closeButton" onClick={onClose}></button>
        </div>
      </div>
    </div>
  );
}
export default PhotoPopup;
