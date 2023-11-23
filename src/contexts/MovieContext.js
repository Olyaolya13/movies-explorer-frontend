import React, { createContext, useState, useEffect, useContext } from 'react';
import moviesApi from '../utils/MoviesApi';
import mainApi from '../utils/MainApi';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useLocation } from 'react-router-dom';
const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const currentUser = useContext(CurrentUserContext);
  const [movies, setMovies] = useState([]); //фильмы
  const [savedMovies, setSavedMovies] = useState([]); //сохраненные фильмы
  const [isShortFilm, setIsShortFilm] = useState(false); //короткометражки фильмы
  const [isShortSavedFilm, setIsShortSavedFilm] = useState(false); //короткометражки сохраненные фильмы
  const [isLoading, setIsLoading] = useState(false); //прелоадер
  const [keyWord, setKeyWord] = useState(''); //ключ фильмво
  const [savedKeyWord, setSavedKeyWord] = useState(''); //ключ сохраненных фильмов
  const [searchServerError, setSearchServerError] = useState(false); //ошибка сервера
  const [searchMovies, setSearchMovies] = useState(false); //поиск фильма
  const [isSearchActive, setIsSearchActive] = useState(false);
  const location = useLocation();

  const isSavedPage = location.pathname === '/saved-movies';

  function searchAllMovies(token) {
    setIsSearchActive(true);
    setSearchMovies(false);
    setSearchServerError(false);
    setIsLoading(true);
    moviesApi
      .getMovies(token)
      .then(res => {
        let findMovies = res.filter(
          movie =>
            movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(keyWord.toLowerCase())
        );

        if (findMovies.length) {
          console.log('Найден фильм:', findMovies);
          setMovies(findMovies);
          localStorage.setItem('movies', JSON.stringify(findMovies));
        } else {
          console.log('Фильм не найден');
          setMovies([]);
          setSearchMovies(true);
          setSearchServerError(false);
        }
      })
      .catch(() => {
        setSearchServerError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  function loadSavedMovies(token) {
    setSearchMovies(true);
    setSearchServerError(false);

    mainApi
      .getSavedMovies(token)
      .then(res => {
        let findSavedMovies = res.filter(
          savedMovie =>
            savedMovie.nameRU.toLowerCase().includes(savedKeyWord.toLowerCase()) ||
            savedMovie.nameEN.toLowerCase().includes(savedKeyWord.toLowerCase())
        );

        if (findSavedMovies.length) {
          console.log('Найден фильм:', findSavedMovies);
          setSavedMovies(findSavedMovies);
        } else {
          console.log('Фильм не найден');
          setSavedMovies([]);
          setSearchMovies(true);
          setSearchServerError(false);
        }
      })
      .catch(() => {
        setSearchServerError(true);
      });
  }

  function removeSavedMovie(movieId) {
    return mainApi
      .removeSavedMovie(movieId)
      .then(() => {
        const updatedSavedMovies = savedMovies.filter(movie => movie._id !== movieId);
        localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
        setSavedMovies(updatedSavedMovies);
        console.log('Фильм успешно удален на сервере:', movieId);
      })
      .catch(error => {
        console.error('Ошибка при удалении фильма из сохраненных:', error);
      });
  }

  function addSavedMovie(movie) {
    const movieInfo = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN
    };

    const updatedMovieInfo = {
      ...movieInfo,
      owner: currentUser._id
    };

    mainApi
      .addSavedMovie(updatedMovieInfo)
      .then(response => {
        console.log('Серверный ответ после сохранения:', response);
        setSavedMovies(savedMovies => [...savedMovies, response.data]);
        localStorage.setItem('savedMovies', JSON.stringify([...savedMovies, response.data]));
        console.log('Фильм успешно добавлен в сохраненные:', response.data);
        return;
      })
      .catch(error => {
        console.error('Ошибка при добавлении фильма в сохраненные:', error);
      });
  }

  return (
    <MovieContext.Provider
      value={{
        movies,
        savedMovies,
        isShortFilm,
        isShortSavedFilm,
        setIsShortSavedFilm,
        setIsShortFilm,
        searchAllMovies,
        addSavedMovie,
        removeSavedMovie,
        loadSavedMovies,
        savedKeyWord,
        setSavedKeyWord,
        keyWord,
        setKeyWord,
        searchMovies,
        setSearchServerError,
        isLoading,
        setSavedMovies,
        setSearchMovies,
        searchServerError,
        isSearchActive
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);

export default MovieProvider;
