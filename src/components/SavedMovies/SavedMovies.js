import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useMovieContext } from '../../contexts/MovieContext'; //

function SavedMovies() {
<<<<<<< HEAD
  const { savedMovies, loadSavedMovies, removeSavedMovie } = useMovieContext();
=======
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
>>>>>>> df4c11d4f936d217e838a12531af7185baeff8ad

  useEffect(() => {
    loadSavedMovies();
  }, []);

  return (
    <>
      <SearchForm onSearchSavedMovies={loadSavedMovies} />
<<<<<<< HEAD
      <MoviesCardList savedMovies={savedMovies} onMovieDelete={removeSavedMovie} />
=======
      <MoviesCardList
        movies={savedMovies}
        savedMovies={savedMovies}
        onMovieDelete={handleMovieDelete}
        isSearchError={false}
      />
>>>>>>> df4c11d4f936d217e838a12531af7185baeff8ad
    </>
  );
}

export default SavedMovies;
