import React, { useState } from 'react';
import './SearchForm.css';
import SearchLogo from '../../images/logo/searchLogo.svg';
import SearchColorLogo from '../../images/logo/searchColorLogo.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  const [searchError, setSearchError] = useState(false);

  const SearchFormData = {
    shortFilm: 'Короткометражки'
  };

  const handleInputChange = e => {
    props.setKeyWord(e.target.value);
    setSearchError(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!props.keyWord) {
      setSearchError(true);
      return;
    } else {
      setSearchError(false);
      props.onSearch(props.keyWord);
    }
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <div className="search__content">
          <div className="search__films">
            <img src={SearchLogo} alt="Икона поиска" className="search__logo" />
            <input
              type="text"
              placeholder={searchError ? 'Нужно ввести ключевое слово' : 'Фильм'}
              className="search__input"
              value={props.keyWord}
              onChange={handleInputChange}
              required
            />
            {searchError && <span className="search__error">{searchError}</span>}
            <button type="submit" className="search__submit">
              <img src={SearchColorLogo} alt="Икона поиска" className="search__color-logo" />
            </button>
          </div>
          <div className="search__short-films">
            <div className="search__checkbox">
              <FilterCheckbox isShortFilm={props.isShortFilm} onCheck={props.onCheck} />
              <p className="search__text">{SearchFormData.shortFilm}</p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
