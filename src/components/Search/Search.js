import './Search.css';

function Search() {
  return (
    <form class="search" name="searchform" novalidate>
      <input type="text" name="keyword" placeholder="Press to search..." class="search__input" required />
      <button disabled type="submit" class="search__button search__button_disabled" aria-label="Send"></button>
    </form>
  );
}

export default Search;
