import React, { createContext, useState, useEffect, useContext } from 'react';
import moviesApi from '../utils/MoviesApi';
import mainApi from '../utils/MainApi';
import CurrentUserContext from '../contexts/CurrentUserContext';
const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const currentUser = useContext(CurrentUserContext);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isShortSavedFilm, setIsShortSavedFilm] = useState(false);
  const [searchErrorNotFinded, setSearchErrorNotFinded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [keyWord, setKeyWord] = useState('');
  const [searchMovies, setSearchMovies] = useState(false);

  function searchAllMovies(token) {
    setSearchMovies(false);
    setSearchErrorNotFinded(false);
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
        } else {
          console.log('Фильм не найден');
          setMovies([]);
          setSearchErrorNotFinded(true);
        }
      })
      .catch(() => {
        setSearchMovies(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    const storedData = localStorage.getItem('movies');
    if (storedData && searchMovies) {
      const searchData = JSON.parse(storedData);

      if (searchData) {
        setMovies(searchData.movies);
      }
    }
  }, []);

  function loadSavedMovies(token) {
    setSearchErrorNotFinded(false);
    mainApi
      .getSavedMovies(token)
      .then(savedMovies => {
        setSearchMovies(false);
        setSavedMovies(savedMovies);
      })
      .catch(err => {
        console.log(err);
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
        addSavedMovie,
        removeSavedMovie,
        searchAllMovies,
        loadSavedMovies,
        keyWord,
        setKeyWord,
        searchMovies,
        searchErrorNotFinded,
        isLoading,
        setSavedMovies
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);

export default MovieProvider;
