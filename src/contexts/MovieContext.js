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
    if (storedData) {
      const searchData = JSON.parse(storedData);
      if (searchData && searchData.movies) {
        setMovies(searchData.movies);
      }
    }
  }, [keyWord, isShortFilm, searchMovies, savedMovies]);

  function loadSavedMovies(token) {
    setSearchMovies(false);
    setSearchErrorNotFinded(false);
    mainApi
      .getSavedMovies(token)
      .then(res => {
        setSavedMovies(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then(res => {
        setSavedMovies(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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

    return mainApi
      .addSavedMovie(movieInfo, currentUser._id)
      .then(res => {
        setSavedMovies(savedMovies => [...savedMovies, res]);
        updateLocalSavedMovies([...savedMovies, res]);
        console.log('Фильм успешно добавлен в сохраненные:', res);
      })
      .catch(error => {
        console.error('Ошибка при добавлении фильма в сохраненные:', error);
      });
  }

  const updateLocalSavedMovies = updatedSavedMovies => {
    localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
  };

  function removeSavedMovie(movieId) {
    const savedMovie = savedMovies.find(movie => movie.movieId === movieId);

    return mainApi
      .removeSavedMovie(movieId)
      .then(res => {
        console.log(savedMovie);
        setSavedMovies(movies => movies.filter(savedMovie => savedMovie._id !== movieId));
        console.log('Фильм успешно удален на сервере:', res);
      })
      .catch(error => {
        console.log('Ошибка при удалении фильма из сохраненных:', error);
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
        isLoading
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);

export default MovieProvider;
