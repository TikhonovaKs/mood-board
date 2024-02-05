import React, { useState } from 'react';
import './CardList.css';
import Card from '../Card/Card';
import PhotoPopup from '../PhotoPopup/PhotoPopup';

function CardList({ cardsList }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const onCardClick = (item) => {
    console.log('Selected Card:', item);
    setSelectedCard(item);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedCard(null); // Reset selectedCard when closing the popup
  };

  return (
    <>
      <section className="cardList__wrapper">
        <ul className="cardList">
          {cardsList &&
            cardsList?.map((item, index) => (
              <li>
                <Card key={index} card={item} layoutStyle="card card__layout1" onClick={() => onCardClick(item)} />
              </li>
            ))}
        </ul>
      </section>
      {popupVisible && (
        <PhotoPopup
          className={popupVisible ? 'popup_is-opened' : ''}
          selectedCard={selectedCard}
          onClose={closePopup}
        />
      )}
    </>
  );
}
export default CardList;
