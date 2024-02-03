import React from 'react';
import { useForm }  from 'react-hook-form';
import useSearch from '../../providers/SearchProvider/SearchProvider.hook.js';
import './Search.css';

function Search({handleSearch}) {
  const { saveKeyWord, keyWord } = useSearch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    saveKeyWord(data.keyword);
    handleSearch(keyWord);
  };

  return (
    <form class="search" onSubmit={handleSubmit(onSubmit)} name="searchform" novalidate>
      <input
        type="text"
        placeholder="Press to search..."
        class="search__input"
        defaultValue={keyWord}
        {...register('keyword', {
          required: {
            value: true,
            message: 'Please enter a keyword',
          },
          minLength: {
            value: 1,
            message: 'Minimum length is 1',
          },
          maxLength: {
            value: 20,
            message: 'Maximum length is 20',
          },
          pattern: {
            value: /^[a-zA-Z\s-]+$/,
            message: 'Please enter a valid keword',
          },
        })}
      ></input>
      <div className="search__error">
      {errors?.keyword && <div className="search__error">{errors.keyword.message}</div>}
      </div>
      <button
        type="submit"
        class="search__button search__button_disabled"
        aria-label="Send"
        disabled={!isValid}
      ></button>
    </form>
  );
}

export default Search;
