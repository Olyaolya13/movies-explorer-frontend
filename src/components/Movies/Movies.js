import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useMovieContext } from '../../contexts/MovieContext';

function Movies() {
  const { movies, savedMovies, addSavedMovie, removeSavedMovie, searchAllMovies } =
    useMovieContext();

  return (
    <>
      <SearchForm onSearch={searchAllMovies} />
      <MoviesCardList
        movies={movies}
        savedMovies={savedMovies}
        onMovieSave={addSavedMovie}
        onMovieDelete={removeSavedMovie}
      />
    </>
  );
}

export default Movies;
