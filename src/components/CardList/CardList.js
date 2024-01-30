import React from 'react';
import './CardList.css';
import Card from '../Card/Card';

function CardList({ searchList }) {
  return (
    <>
        <ul className="cardList">
          {searchList &&
            searchList?.map((item, index) => <Card card={item} layoutStyle="card card__layout1" />)}
        </ul>
    </>
  );
}

export default CardList;
