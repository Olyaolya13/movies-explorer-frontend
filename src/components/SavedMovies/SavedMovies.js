import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useMovieContext } from '../../contexts/MovieContext'; //

function SavedMovies() {
  const { savedMovies, loadSavedMovies, removeSavedMovie } = useMovieContext();

  const handleMovieDelete = (movieId, token) => {
    removeSavedMovie(movieId, token).then(() => {
      loadSavedMovies();
    });
  };

  useEffect(() => {
    loadSavedMovies();
  }, []);

  useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies]);

  return (
    <>
      <SearchForm onSearchSavedMovies={loadSavedMovies} />
      <MoviesCardList savedMovies={savedMovies} onSavedMovieDelete={handleMovieDelete} />
    </>
  );
}

export default SavedMovies;
