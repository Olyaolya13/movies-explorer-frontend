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
  const [searchError, setSearchError] = useState(false);

  const SearchFormData = {
    shortFilm: 'Короткометражки'
  };

  const {
    isShortFilm,
    isShortSavedFilm,
    setIsShortFilm,
    setIsShortSavedFilm,
    savedKeyWord,
    setSavedKeyWord,
    keyWord,
    setKeyWord
  } = useMovieContext();

  const filterMovie = !isSavedPage ? 'allMoviesSearch' : 'savedMoviesSearch';

  const handleMovieInputChange = e => {
    const inputValue = e.target.value;
    setKeyWord(inputValue);
    localStorage.setItem('keyWord', inputValue);
    setSearchError(false);
  };
  const handleSavedMovieInputChange = e => {
    setSavedKeyWord(e.target.value);
    setSearchError(false);
  };

  const handleFilterCheckBoxSubmit = () => {
    if (isSavedPage) {
      setIsShortSavedFilm(!isShortSavedFilm);
    } else {
      setIsShortFilm(!isShortFilm);
      localStorage.setItem(filterMovie, !isShortFilm);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = isSavedPage ? savedKeyWord : keyWord;

    if (searchValue.trim() === '') {
      setSearchError(true);
    } else {
      setSearchError(false);

      if (isSavedPage) {
        props.onSearchSavedMovies(searchValue);
      } else {
        props.onSearch(searchValue);
      }
    }
  };

  useEffect(() => {
    setIsShortSavedFilm(false);
    setSavedKeyWord('');
  }, [isSavedPage, setIsShortSavedFilm]);

  useEffect(() => {
    if (!isSavedPage) {
      const storedValue = localStorage.getItem(filterMovie);
      setIsShortFilm(storedValue === 'true');
      setSearchError(false);

      const savedKeyWord = localStorage.getItem('keyWord');
      setKeyWord(savedKeyWord || '');
    }
  }, [filterMovie, isSavedPage, setIsShortFilm, setKeyWord]);

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
              value={isSavedPage ? savedKeyWord : keyWord}
              onChange={isSavedPage ? handleSavedMovieInputChange : handleMovieInputChange}
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
