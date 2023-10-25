// import SearchForm from '../SearchForm/SearchForm';
// // import { MoviesCardListData } from '../../utils/constants';
// import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import moviesApi from '../../utils/MoviesApi';
// import api from '../../utils/MoviesApi';
// import { useEffect, useState } from 'react';

// function Movies(props) {
//   const [movies, setMovies] = useState([]);
//   const [searchMovies, setSearchMovies] = useState(false);

//   const handleSearch = () => {
//     setSearchMovies(true);
//   };

//   useEffect(() => {
//     if (props.isLoggedIn) {
//       const token = localStorage.getItem('token');
//       moviesApi
//         .getMovies(token)
//         .then(initialMovies => {
//           setMovies(initialMovies);
//           console.log('ok');
//         })
//         .catch(err => {
//           console.log('Ошибка при получении списка фильмов:', err);
//         });
//     }
//   }, [props.isLoggedIn]);
//   return (
//     <>
//       <SearchForm onSearch={handleSearch} searchMovies={searchMovies} />
//       {searchMovies && <MoviesCardList movies={movies} />}
//       {/* <SearchForm />
//       <MoviesCardList movies={movies} /> */}
//     </>
//   );
// }

// export default Movies;

import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import api from '../../utils/MoviesApi';

function Movies(props) {
  const [movies, setMovies] = useState([]); //фильмы
  const [searchMovies, setSearchMovies] = useState(false); //поиск фильма
  const [isLoading, setIsLoading] = useState(false); //прелладер
  const [searchErrorNotFinded, setSearchErrorNotFinded] = useState(false); //ничего не найдено

  function searchAllMovies(key) {
    setIsLoading(true); //прелоадер
    setSearchErrorNotFinded(false);
    moviesApi
      .getMovies()
      .then(res => {
        const findMovies = res.filter(
          movie =>
            movie.nameRU.toLowerCase().includes(key.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(key.toLowerCase())
        );
        if (findMovies.length > 0) {
          console.log('Найден фильм:', findMovies);
          // localStorage.setItem('movies', JSON.stringify(findMovies));
          setMovies(findMovies);
        } else {
          console.log('Фильм не найден');
          setMovies([]);
          setSearchErrorNotFinded(true);
        }

        return findMovies;
      })
      .catch(err => {
        setSearchErrorNotFinded(true); //фильм не найден
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (props.isLoggedIn && searchMovies) {
      const token = localStorage.getItem('token');
      // setIsLoading(true);
      api
        .getMovies(token)
        .then(movie => {
          if (movie.length === 0) {
            setSearchErrorNotFinded(true);
          } else {
            setSearchErrorNotFinded(false);
            setMovies(movie);
          }
          setIsLoading(false);
        })
        .catch(err => {
          console.log('Ошибка при поиске фильмов:', err);
          setIsLoading(false);
        });
    } else {
      setSearchErrorNotFinded(false);
      setMovies([]);
    }
  }, [props.isLoggedIn, searchMovies]);

  return (
    <>
      <SearchForm onSearch={searchAllMovies} />
      <MoviesCardList
        movies={movies}
        isLoading={isLoading}
        isMovieNotFound={searchErrorNotFinded}
      />
    </>
  );
}

export default Movies;
