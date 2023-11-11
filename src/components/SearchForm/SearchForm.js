import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import { useMovieContext } from '../../contexts/MovieContext';
import { useLocation } from 'react-router-dom';
import SearchLogo from '../../images/logo/searchLogo.svg';
import SearchColorLogo from '../../images/logo/searchColorLogo.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  const location = useLocation();
  const isSavedPage = location.pathname === '/saved-movies';
  const {
    setIsShortFilm,
    isShortFilm,
    isShortSavedFilm,
    setIsShortSavedFilm,
    keyWord,
    setKeyWord
  } = useMovieContext();

  const [searchError, setSearchError] = useState(false);
  const keyWordMovie = isSavedPage ? 'savedMoviesSearch' : 'allMoviesSearch';
  const filterMovie = isSavedPage ? 'savedMoviesFilter' : 'allMoviesFilter';

  const SearchFormData = {
    shortFilm: 'Короткометражки'
  };

  const handleInputChange = e => {
    setKeyWord(e.target.value);
    setSearchError(false);
  };

  const handleFilterCheckBoxSubmit = () => {
    if (isSavedPage) {
      setIsShortSavedFilm(!isShortSavedFilm);
      localStorage.setItem(filterMovie, String(!isShortSavedFilm));
    } else {
      setIsShortFilm(!isShortFilm);
      localStorage.setItem(filterMovie, String(!isShortFilm));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (keyWord.trim() === '') {
      setSearchError(true);
    } else {
      setSearchError(false);
      if (isSavedPage) {
        props.onSearchSavedMovies(keyWord);
      } else {
        props.onSearch(keyWord);
      }
      localStorage.setItem(keyWordMovie, keyWord);
    }
  };

  useEffect(() => {
    const value = localStorage.getItem(keyWordMovie);
    if (value) {
      setKeyWord(value);
    } else {
      setKeyWord('');
    }

    const storedValue = localStorage.getItem(filterMovie);
    if (storedValue) {
      if (isSavedPage) {
        setIsShortSavedFilm(storedValue === 'true');
      } else {
        setIsShortFilm(storedValue === 'true');
      }
    } else {
      if (isSavedPage) {
        setIsShortSavedFilm(false);
      } else {
        setIsShortFilm(false);
      }
    }
  }, [keyWordMovie, isSavedPage, filterMovie]);

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
              value={keyWord}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="search__submit">
              <img src={SearchColorLogo} alt="Икона поиска" className="search__color-logo" />
            </button>
          </div>
          <div className="search__short-films">
            <div className="search__checkbox">
              <FilterCheckbox
                onCheckboxChange={handleFilterCheckBoxSubmit}
                isShortFilm={!isSavedPage ? isShortFilm : isShortSavedFilm}
              />
              <p className="search__text">{SearchFormData.shortFilm}</p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
