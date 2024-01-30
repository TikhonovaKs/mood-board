import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch.js';
import './SearchPage.css';
import Search from '../../components/Search/Search.js';
import Tips from '../../components/Tips/Tips.js';
import CardList from '../../components/CardList/CardList.js';

function SearchPage() {
 const [keyword, setKeyword] = useState('');
 const { searchList } = useFetch(keyword);
  
  const handleSearch = (data) => {
    setKeyword(data);
  }
  
  return (
    <div className="searchPage">
      <Search handleSearch={handleSearch} />
      <Tips />
      <CardList searchList={searchList} />
      {/* <PhotoPopup /> */}
    </div>
  );
}

export default SearchPage;
