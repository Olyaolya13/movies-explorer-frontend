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

  function handleDeleteClick(movieId) {
    removeSavedMovie(movieId);
  }

  useEffect(() => {
    localStorage.setItem(
      'movies',
      JSON.stringify({ key: keyWord, movies: movies, isShortFilm, savedMovies: savedMovies })
    );
  }, [keyWord, movies, isShortFilm, searchMovies, savedMovies]);

  return (
    <>
      <SearchForm onSearch={searchAllMovies} />
      <MoviesCardList
        movies={movies}
        savedMovies={savedMovies}
        onMovieSave={addSavedMovie}
        onMovieDelete={handleDeleteClick}
        isSearchError={searchMovies}
      />
    </>
  );
}

export default Movies;
