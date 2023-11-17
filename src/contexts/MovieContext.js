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

  function loadSavedMovies(token) {
    mainApi
      .getSavedMovies(token)
      .then(res => {
        let findMovies = res.filter(
          movie =>
            movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(keyWord.toLowerCase())
        );

        if (findMovies.length > 0) {
          console.log('Найденные сохраненные фильмы:', findMovies);
          setSavedMovies(findMovies);
        } else {
          console.log('Сохраненные фильмы не найдены');
          setSavedMovies([]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    const storedData = localStorage.getItem('movies');
    if (storedData) {
      const searchData = JSON.parse(storedData);

      if (searchData) {
        setMovies(searchData.movies);
        setKeyWord(searchData.key);
        setIsShortFilm(searchData.isShortFilm);
        setSearchErrorNotFinded(false);
      }
    }
  }, []);

  function addSavedMovie(movie, token) {
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
      owner: currentUser
    };

    return mainApi
      .addSavedMovie(updatedMovieInfo, token)
      .then(res => {
        setSavedMovies(savedMovies => [...savedMovies, res]);
        console.log('Фильм успешно добавлен в сохраненные:', res);
        localStorage.setItem('savedMovies', JSON.stringify([...savedMovies, res]));
      })
      .catch(error => {
        console.error('Ошибка при добавлении фильма в сохраненные:', error);
      });
  }

  function removeSavedMovie(id, token) {
    return mainApi
      .removeSavedMovie(id, token)
      .then(res => {
        const updatedSavedMovies = savedMovies.filter(movie => movie.id !== id);
        console.log(updatedSavedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
        // setMovies(updatedSavedMovies);
        setSavedMovies(updatedSavedMovies);
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
