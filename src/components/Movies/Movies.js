import React, { useState, useEffect, useContext } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import api from '../../utils/MoviesApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Movies() {
  const [movies, setMovies] = useState([]); //фильмы
  const [searchMovies, setSearchMovies] = useState(false); //поиск фильма
  const [isLoading, setIsLoading] = useState(false); //прелладер
  const [searchErrorNotFinded, setSearchErrorNotFinded] = useState(false); //ничего не найдено
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [keyWord, setKeyWord] = useState('');
  const currentUser = useContext(CurrentUserContext);

  function searchAllMovies() {
    setSearchErrorNotFinded(false);
    setSearchMovies(false);
    setIsLoading(true);

    moviesApi
      .getMovies()
      .then(res => {
        let findMovies = res.filter(
          movie =>
            movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(keyWord.toLowerCase())
        );

        if (findMovies.length) {
          console.log('Найден фильм:', findMovies);
          const searchData = {
            key: keyWord,
            movies: findMovies,
            shortFilm: isShortFilm
            // userId: currentUser._id
          };

          localStorage.setItem('movies', JSON.stringify(searchData));
          setMovies(findMovies);
        } else {
          console.log('Фильм не найден');
          setMovies([]);
          setSearchErrorNotFinded(true);
        }
        return findMovies;
      })
      .catch(() => {
        setSearchMovies(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleCheckboxChange() {
    setIsShortFilm(!isShortFilm);
  }

  useEffect(() => {
    const storedData = localStorage.getItem('movies');
    if (storedData) {
      const searchData = JSON.parse(storedData);

      if (searchData) {
        setKeyWord(searchData.key);
        setMovies(searchData.movies);
        setIsShortFilm(searchData.shortFilm);
        console.log(typeof searchData.shortFilm);
        setSearchErrorNotFinded(false);
      }
    }
  }, []);

  return (
    <>
      <SearchForm
        onSearch={searchAllMovies}
        isShortFilm={isShortFilm}
        onCheck={handleCheckboxChange}
        setKeyWord={setKeyWord}
        keyWord={keyWord}
      />
      <MoviesCardList
        movies={movies}
        isLoading={isLoading}
        isMovieNotFound={searchErrorNotFinded}
        isSearchError={searchMovies}
        isShortFilm={isShortFilm}
      />
    </>
  );
}

export default Movies;
