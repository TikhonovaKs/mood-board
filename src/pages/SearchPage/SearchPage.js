import React, { useState, useEffect } from 'react';
// import useFetch from '../../hooks/useFetch.js';
import useSearch from '../../providers/SearchProvider/SearchProvider.hook.js';
import './SearchPage.css';
import Search from '../../components/Search/Search.js';
import Tips from '../../components/Tips/Tips.js';
import CardList from '../../components/CardList/CardList.js';

function SearchPage() {
 const [keyword, setKeyword ] = useState('');
 const { getSearchCards, searchList } = useSearch();
//  const { searchList } = useFetch(keyword);
  
  const handleSearch = (data) => {
    setKeyword(data);
  }
  
  useEffect(() => {
    getSearchCards(keyword);
  }, [keyword]);

  return (
    <div className="searchPage">
      <Search handleSearch={handleSearch} />
      <Tips />
      <CardList cardsList={searchList} />
      {/* <PhotoPopup /> */}
    </div>
  );
}

export default SearchPage;
