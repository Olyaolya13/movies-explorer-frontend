import React, { useEffect, useState, useContext } from 'react';
import { useMovies } from '../../contexts/MovieContext';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';

function Movies() {
  const [searchMovies, setSearchMovies] = useState(false);

  const {
    savedMovies,
    isLoading,
    searchErrorNotFinded,
    isShortFilm,
    handleCheckboxChange,
    updateSearchKeyword,
    addMovieToSaved,
    removeMovieFromSaved,
    keyWord,
    setIsLoading,
    setSearchErrorNotFinded,
    setIsShortFilm,
    movies,
    setMovies
  } = useMovies();

  function searchAllMovies() {
    setSearchMovies(false);
    setSearchErrorNotFinded(false);
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
            isShortFilm: isShortFilm
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

  useEffect(() => {
    if (searchMovies) {
      searchAllMovies();
    }
  }, [searchMovies]);

  return (
    <>
      <SearchForm
        onSearch={searchAllMovies}
        isShortFilm={isShortFilm}
        onCheck={handleCheckboxChange}
        setKeyWord={updateSearchKeyword}
        keyWord={keyWord}
        setIsShortFilm={setIsShortFilm}
      />
      <MoviesCardList
        movies={movies}
        savedMovies={savedMovies}
        isLoading={isLoading}
        isMovieNotFound={searchErrorNotFinded}
        isSearchError={searchMovies}
        isShortFilm={isShortFilm}
        onAdd={addMovieToSaved}
        onDelete={removeMovieFromSaved}
      />
    </>
  );
}

export default Movies;
