import React, { useState } from 'react';
import './SearchForm.css';
import SearchLogo from '../../images/logo/searchLogo.svg';
import SearchColorLogo from '../../images/logo/searchColorLogo.svg';

const SearchFormData = {
  shortFilm: 'Короткометражки'
};

function SearchForm({ onSearch }) {
  const [searchFilm, setSearchFilm] = useState('');

  const handleInputChange = e => {
    setSearchFilm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchFilm);
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__button">
          <img src={SearchLogo} alt="Икона поиска" className="search__logo" />
          <input
            type="text"
            placeholder="Фильм"
            className="search__input"
            value={searchFilm}
            onChange={handleInputChange}
          />
          <button type="submit" className="search__submit">
            <img src={SearchColorLogo} alt="Икона поиска" className="search__color-logo" />
          </button>
          <p className="search__line"></p>
          <p className="search__text">{SearchFormData.shortFilm}</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
