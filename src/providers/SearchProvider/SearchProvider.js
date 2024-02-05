import { useState } from 'react';
import SearchProviderContext from './SearchProvider.context';
import photoApi from '../../utils/PhotoApi';

const SearchProvider = ({ children }) => {
  const [keyWord, setKeyWord] = useState('');
  const [searchList, setSearchList] = useState([]);

  const saveKeyWord = (data) => {
    setKeyWord(data);
  };

  const saveSearchListToLocalStorage = (list) => {
    localStorage.setItem('searchList', JSON.stringify(list));
  };

  const getSearchCards = (keyword, currentBoardList) => {
    if (!keyword) {
      return;
    }
    photoApi.searchPhoto(keyword).then((data) => {
      const photos = data.photos;
      const updatedList = photos.map((item) => ({
        id: item.id,
        src: item.src.original,
        alt: item.alt,
        isSaved: currentBoardList && currentBoardList.some((boardItem) => boardItem.id === item.id) ? true : false,
      }));
      setSearchList(updatedList);
      saveSearchListToLocalStorage(updatedList);
    });
  };
  const setSavedCard = (targetCard) => {
    const updSearchList = searchList.map((srchCard) => {
      if (targetCard.id === srchCard.id) {
        return {
          ...srchCard,
          isSaved: true,
        };
      }
      return srchCard;
    });
    setSearchList(updSearchList);
  };

  const value = {
    saveKeyWord,
    keyWord,
    getSearchCards,
    searchList,
    setSavedCard,
  };

  return <SearchProviderContext.Provider value={value}>{children}</SearchProviderContext.Provider>;
};

export default SearchProvider;
