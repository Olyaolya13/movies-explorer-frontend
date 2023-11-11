import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useMovieContext } from '../../contexts/MovieContext';

function Movies() {
  const {
    movies,
    savedMovies,
    addSavedMovie,
    removeSavedMovie,
    searchAllMovies,
    isShortFilm,
    keyWord,
    searchMovies
  } = useMovieContext();

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify({ key: keyWord, movies, isShortFilm }));
  }, [keyWord, movies, isShortFilm, searchMovies]);

  return (
    <>
      <SearchForm onSearch={searchAllMovies} />
      <MoviesCardList
        movies={movies}
        savedMovies={savedMovies}
        onMovieSave={addSavedMovie}
        onMovieDelete={removeSavedMovie}
        isSearchError={searchMovies}
      />
    </>
  );
}

export default Movies;
