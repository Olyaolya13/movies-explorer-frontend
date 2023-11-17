import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useMovieContext } from '../../contexts/MovieContext'; //

function SavedMovies() {
  const { savedMovies, loadSavedMovies, removeSavedMovie } = useMovieContext();

  useEffect(() => {
    loadSavedMovies();
  }, []);

  return (
    <>
      <SearchForm onSearchSavedMovies={loadSavedMovies} />
      <MoviesCardList savedMovies={savedMovies} onMovieDelete={removeSavedMovie} />
    </>
  );
}

export default SavedMovies;
