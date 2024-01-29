import React, { useState } from 'react';
import photoApi from '../../utils/PhotoApi.js';
import './SearchPage.css';
import Search from '../../components/Search/Search.js';
import Tips from '../../components/Tips/Tips.js';
import PhotoPopup from '../../components/PhotoPopup/PhotoPopup.js';

function SearchPage() {
  const [searchList, setSearchList] = useState([]);
  const keyword = 'nature';
  
  React.useEffect(() => {
    photoApi
      .searchPhoto(keyword)
      .then((data) => {
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
  }, []);

  return (
    <div className="searchPage">
      <Search />
      <Tips />
      <PhotoPopup searchList={searchList} />
    </div>
  );
}

export default SearchPage;
