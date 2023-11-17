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
<<<<<<< HEAD
      JSON.stringify({ key: keyWord, movies, isShortFilm, savedMovies })
=======
      JSON.stringify({ key: keyWord, movies: movies, isShortFilm, savedMovies: savedMovies })
>>>>>>> df4c11d4f936d217e838a12531af7185baeff8ad
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
