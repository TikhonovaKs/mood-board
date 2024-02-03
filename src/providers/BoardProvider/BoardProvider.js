import { useState, useEffect } from 'react';
import BoardProviderContext from './BoardProvider.context';

const BoardProvider = ({ children }) => {
  const [boardList, setBoardList] = useState([]);

  // Loading data from localStorage when mounting a component
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('savedList')) || [];
    setBoardList(savedList);
  }, []);

  // Saving to localStorage when updating boardList
  useEffect(() => {
    localStorage.setItem('savedList', JSON.stringify(boardList));
  }, [boardList]);

  const saveCard = (data) => {
    setBoardList((prevList) => [...prevList, data]);
  };

  // const deleteCard = () => {

  // }

  const value = {
    // initialize,
    boardList,
    saveCard,
  };

  return <BoardProviderContext.Provider value={value}>{children}</BoardProviderContext.Provider>;
};

export default BoardProvider;
