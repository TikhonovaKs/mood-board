import React, { useState } from 'react';
import photoApi from '../../utils/PhotoApi.js';
import './SearchPage.css';
import Search from '../../components/Search/Search.js';
import Tips from '../../components/Tips/Tips.js';
import CardList from '../../components/CardList/CardList.js';
// import PhotoPopup from '../../components/PhotoPopup/PhotoPopup.js';

function SearchPage() {
  const [searchList, setSearchList] = useState([]);
  const [keyword, setKeyword] = useState('');
  // const keyword = 'nature';
  
  React.useEffect(() => {
    photoApi
      .searchPhoto(keyword)
      .then((data) => {
        console.log(data)
        const photos = data.photos;
        setSearchList(
            photos.map((item) => ({
            src: item.src.original,
            alt: item.alt,
          }))
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, [keyword]);
  
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
