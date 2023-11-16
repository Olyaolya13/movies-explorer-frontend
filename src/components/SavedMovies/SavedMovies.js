import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useMovieContext } from '../../contexts/MovieContext'; //

function SavedMovies() {
  const { savedMovies, loadSavedMovies, keyWord, isShortSavedFilm, removeSavedMovie } =
    useMovieContext();

  // const handleMovieDelete = movieId => {
  //   removeSavedMovie(movieId).then(() => {
  //     loadSavedMovies();
  //   });
  // };

  const handleMovieDelete = movieId => {
    removeSavedMovie(movieId).then(() => {
      loadSavedMovies();
    });
  };

  useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify({ movies: savedMovies }));
  }, [keyWord, savedMovies, isShortSavedFilm]);

  useEffect(() => {
    loadSavedMovies();
  }, []);

  return (
    <>
      <SearchForm onSearchSavedMovies={loadSavedMovies} />
      <MoviesCardList
        movies={savedMovies}
        savedMovies={savedMovies}
        onMovieDelete={handleMovieDelete}
        isSearchError={false}
      />
    </>
  );
}

export default SavedMovies;
