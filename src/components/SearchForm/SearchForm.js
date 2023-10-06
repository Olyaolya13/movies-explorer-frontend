import React, { useState } from 'react';
import './SearchForm.css';
import SearchLogo from '../../images/logo/searchLogo.svg';
import SearchColorLogo from '../../images/logo/searchColorLogo.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { SearchFormData } from '../../utils/constants';

function SearchForm() {
  const [searchFilm, setSearchFilm] = useState('');

  const handleInputChange = e => {
    setSearchFilm(e.target.value);
  };

  return (
    <section className="search">
      <form className="search__form">
        <div className="search__content">
          <div className="search__films">
            <img src={SearchLogo} alt="Икона поиска" className="search__logo" />
            <input
              type="text"
              placeholder="Фильм"
              className="search__input"
              value={searchFilm}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="search__submit">
              <img src={SearchColorLogo} alt="Икона поиска" className="search__color-logo" />
            </button>
          </div>
          <div className="search__short-films">
            <div className="search__checkbox">
              <FilterCheckbox />
              <p className="search__text">{SearchFormData.shortFilm}</p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
