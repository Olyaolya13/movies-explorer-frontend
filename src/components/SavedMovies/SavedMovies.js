// import React, { useState, useEffect } from 'react';
// import SearchForm from '../SearchForm/SearchForm';
// import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import api from '../../utils/MainApi';
// import { useMovies } from '../../contexts/MovieContext';

// function SavedMovies(props) {
//   const { savedMovies, setSavedMovies, removeSavedMovie } = useMovies();

//   function removeLikedMovie(movie) {
//     const token = localStorage.getItem('token');

//     api
//       .removeSavedMovie(movie.movieId) // Передайте идентификатор фильма для удаления
//       .then(() => {
//         removeSavedMovie(movie.movieId); // Передайте идентификатор для удаления из контекста
//         console.log('Фильм успешно удален из сохраненных');
//       })
//       .catch(error => {
//         console.error('Ошибка при удалении фильма из сохраненных:', error);
//       });
//   }
//   useEffect(() => {
//     // Загрузить сохраненные фильмы из локального хранилища
//     const savedMoviesFromLocalStorage = JSON.parse(localStorage.getItem('savedMovies')) || [];
//     setSavedMovies(savedMoviesFromLocalStorage);
//   }, []);

//   useEffect(() => {
//     if (props.isLoggedIn) {
//       const token = localStorage.getItem('token');
//       Promise.all([api.getSavedMovies(token)])
//         .then(([initialMovies]) => {
//           setSavedMovies(initialMovies);
//         })
//         .catch(err => {
//           console.log('Ошибка при получении информации:', err);
//         })
//         .finally(() => {});
//     }
//   }, [props.isLoggedIn]);

//   return (
//     <>
//       <SearchForm />
//       <MoviesCardList savedMovies={savedMovies} />
//     </>
//   );
// }

// export default SavedMovies;

import React, { useEffect, useState } from 'react';
import { useMovies } from '../../contexts/MovieContext';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  const [searchMovies, setSearchMovies] = useState(false);

  const {
    savedMovies,
    isLoading,
    searchErrorNotFinded,
    isShortFilm,
    handleCheckboxChange,
    updateSearchKeyword,
    removeMovieFromSaved,
    keyWord,
    fetchSavedMovies,
    setIsShortFilm
  } = useMovies();

  const handleDeleteMovie = id => {
    removeMovieFromSaved(id);
  };

  useEffect(() => {
    fetchSavedMovies();
  }, []);

  return (
    <>
      <SearchForm
        onSearch={fetchSavedMovies}
        isShortFilm={isShortFilm}
        onCheck={handleCheckboxChange}
        setKeyWord={updateSearchKeyword}
        keyWord={keyWord}
      />
      <MoviesCardList
        savedMovies={savedMovies}
        isLoading={isLoading}
        isMovieNotFound={searchErrorNotFinded}
        isSearchError={searchMovies}
        isShortFilm={isShortFilm}
        onDelete={handleDeleteMovie}
      />
    </>
  );
}

export default SavedMovies;
