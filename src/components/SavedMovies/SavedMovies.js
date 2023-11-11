import React, { useEffect, useState, useContext } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useMovieContext } from '../../contexts/MovieContext'; //

function SavedMovies() {
  const { movies, savedMovies, loadSavedMovies, keyWord, isShortSavedFilm, removeSavedMovie } =
    useMovieContext();

  const handleMovieDelete = (movieId, token) => {
    removeSavedMovie(movieId, token).then(() => {
      loadSavedMovies();
    });
  };

  useEffect(() => {
    localStorage.setItem(
      'savedMovies',
      JSON.stringify({ key: keyWord, movies: savedMovies, isShortSavedFilm })
    );
  }, [keyWord, savedMovies, isShortSavedFilm]);

  useEffect(() => {
    loadSavedMovies();
  }, []);

  return (
    <>
      <SearchForm onSearchSavedMovies={loadSavedMovies} />
      <MoviesCardList savedMovies={savedMovies} onSavedMovieDelete={handleMovieDelete} />
    </>
  );
}

export default SavedMovies;
