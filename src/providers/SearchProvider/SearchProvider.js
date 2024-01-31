import { useState } from 'react';
import SearchProviderContext from './SearchProvider.context';


const SearchProvider = ({ children }) => {
  const [keyWord, setKeyWord] = useState('');

  const saveKeyWord = (data) => {
    setKeyWord(data);
  };
  
  const value = {
    saveKeyWord,
    keyWord,
  };

  return <SearchProviderContext.Provider value={value}>{children}</SearchProviderContext.Provider>;
};

export default SearchProvider;
