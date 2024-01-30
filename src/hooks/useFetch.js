import { useEffect, useState } from 'react';
import photoApi from '../utils/PhotoApi.js';

export default function useFetch(keyword) {
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const saveToLocalStorage = (list) => {
      localStorage.setItem('searchList', JSON.stringify(list));
    };

    photoApi
      .searchPhoto(keyword)
      .then((data) => {
        const photos = data.photos;
        const updatedList = photos.map((item) => ({
          src: item.src.original,
          alt: item.alt,
        }));
        setSearchList(updatedList);
        saveToLocalStorage(updatedList);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [keyword]);
  return { searchList };
}
