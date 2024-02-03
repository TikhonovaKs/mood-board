import React, { useState, useEffect } from 'react';
import useBoard from '../../providers/BoardProvider/BoardProvider.hook.js';
import './BoardPage.css';
import CardList from '../../components/CardList/CardList.js';

export default function BoardPage() {

 const { boardList } = useBoard();
   
 

  return (
    <div className="boardPage">
      <CardList searchList={boardList} />
      {/* <PhotoPopup /> */}
    </div>
  );
}