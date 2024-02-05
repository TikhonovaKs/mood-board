import { useState, useEffect } from 'react';
import BoardProviderContext from './BoardProvider.context';

const BoardProvider = ({ children }) => {
  const [boardList, setBoardList] = useState([]);
  const [likes, setLikes] = useState(0);
  const [boardTitle, setBoardTitle] = useState("");

  // Loading savedList from localStorage when mounting a component
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('savedList')) || [];
    setBoardList(savedList);
  }, []);

  // Saving to localStorage when updating boardList
  useEffect(() => {
    localStorage.setItem('savedList', JSON.stringify(boardList));
  }, [boardList]);

  const saveCard = (data) => {
    const newCard = {
      src: data.src,
      alt: data.alt,
      isSaved: true,
    };
    setBoardList((prevList) => [...prevList, newCard]);
  };

  const deleteCard = (data) => {
  const updList = boardList.filter((card) => card.src !== data.src);
  setBoardList(updList);
  }

  const handleLikes = () => {
    setLikes(likes + 1);
  };

  const onChangeTitle = (e) => {
    setBoardTitle(e.target.value);
  };

  const value = {
    boardList,
    saveCard,
    deleteCard,
    handleLikes,
    likes,
    onChangeTitle,
    boardTitle,
  };

  return <BoardProviderContext.Provider value={value}>{children}</BoardProviderContext.Provider>;
};

export default BoardProvider;
