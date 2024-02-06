import React, { useState, useEffect } from 'react';
import photoApi from '../../utils/PhotoApi.js';
import useSearch from '../../providers/SearchProvider/SearchProvider.hook.js';
import './SearchPage.css';
import Search from '../../components/Search/Search.js';
import Tips from '../../components/Tips/Tips.js';
import CardList from '../../components/CardList/CardList.js';
import useBoard from '../../providers/BoardProvider/BoardProvider.hook.js';

function SearchPage() {
  const { getSearchCards, getRandomCards, searchList, keyWord } = useSearch();
  const { boardList } = useBoard();

  useEffect(() => {
    if (keyWord) {
      getSearchCards(keyWord, boardList);
    } else {
      getRandomCards(boardList);
    }
  }, [keyWord, boardList]);

  return (
    <div className="searchPage">
      <Search />
      {/* <Tips /> */}
      <CardList cardsList={searchList} />
    </div>
  );
}

export default SearchPage;
