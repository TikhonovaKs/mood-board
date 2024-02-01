import { useState } from 'react';
import SearchProviderContext from './SearchProvider.context';
import photoApi from '../../utils/PhotoApi';


const SearchProvider = ({ children }) => {
  const [keyWord, setKeyWord] = useState('');
  const [searchList, setSearchList] = useState([]);

  const saveKeyWord = (data) => {
    setKeyWord(data);
  };

  const getSearchCards = (keyword) => {
    if(!keyword) {
      return;
    }
    photoApi
      .searchPhoto(keyword)
      .then((data) => {
        const photos = data.photos;
        const updatedList = photos.map((item) => ({
          src: item.src.original,
          alt: item.alt,
        }));
        setSearchList(updatedList);
      })
  };
  


  const value = {
    saveKeyWord,
    keyWord,
    getSearchCards,
    searchList,
  };

  return <SearchProviderContext.Provider value={value}>{children}</SearchProviderContext.Provider>;
};

export default SearchProvider;
