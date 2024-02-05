import React, { useState, useEffect } from 'react';
import useSearch from '../../providers/SearchProvider/SearchProvider.hook.js';
import './SearchPage.css';
import Search from '../../components/Search/Search.js';
import Tips from '../../components/Tips/Tips.js';
import CardList from '../../components/CardList/CardList.js';
import useBoard from '../../providers/BoardProvider/BoardProvider.hook.js';

function SearchPage() {
 const [keyword, setKeyword ] = useState('');
 const { getSearchCards, searchList } = useSearch();
 const { boardList } = useBoard();
  
  const handleSearch = (data) => {
    setKeyword(data);
  }
  
  useEffect(() => {
    getSearchCards(keyword, boardList);
  }, [keyword, boardList]);


  return (
    <div className="searchPage">
      <Search handleSearch={handleSearch} />
      <Tips />
      <CardList cardsList={searchList} />
    </div>
  );
}

export default SearchPage;
