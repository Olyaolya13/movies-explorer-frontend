import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/MainApi';

const MoviesContext = createContext();

export const useMovies = () => {
  return useContext(MoviesContext);
};

export default function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchErrorNotFinded, setSearchErrorNotFinded] = useState(false);
  const initialIsShortFilm = JSON.parse(localStorage.getItem('isShortFilm')) || false;
  const [isShortFilm, setIsShortFilm] = useState(initialIsShortFilm);
  const [keyWord, setKeyWord] = useState('');

  const handleCheckboxChange = () => {
    setIsShortFilm(!isShortFilm);
  };

  const updateSearchKeyword = keyword => {
    setKeyWord(keyword);
  };

  const fetchSavedMovies = () => {
    const token = localStorage.getItem('token');
    api
      .getSavedMovies(token)
      .then(data => setSavedMovies(data))
      .catch(err => setSearchErrorNotFinded(err));
  };

  const addMovieToSaved = movie => {
    const token = localStorage.getItem('token');

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

    api.addSavedMovie(movieInfo, token).then(res => {
      const savedMoviesData = JSON.parse(localStorage.getItem('savedMovies')) || [];
      const updatedSavedMovies = [
        ...savedMoviesData,
        {
          ...res,
          isSaved: true
        }
      ];

      localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
      setSavedMovies(updatedSavedMovies);
      console.log('Фильм успешно добавлен в сохраненные:', res);
    });
  };

  const removeMovieFromSaved = id => {
    const token = localStorage.getItem('token');
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
    const movieToRemove = savedMovies.find(movie => movie.movieId === id);
    if (movieToRemove) {
      movieToRemove.isSaved = false;
      const updatedSavedMovies = savedMovies.filter(movie => movie.movieId !== id);
      localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
      setSavedMovies(updatedSavedMovies);

      console.log('Фильм успешно удален:', movieToRemove);
    }
    api
      .removeSavedMovie(id, token)
      .then(res => {
        console.log('Фильм успешно удален на сервере:', res);
      })
      .catch(error => {
        console.error('Ошибка при удалении фильма из сохраненных:', error);
      });
  };

  useEffect(() => {
    const storedData = localStorage.getItem('movies');
    if (storedData) {
      const searchData = JSON.parse(storedData);

      if (searchData) {
        setMovies(searchData.movies);
        setKeyWord(searchData.key);
        setIsShortFilm(initialIsShortFilm);
        setSearchErrorNotFinded(false);
      }
    }
  }, [initialIsShortFilm]);

  return (
    <MoviesContext.Provider
      value={{
        savedMovies,
        isLoading,
        searchErrorNotFinded,
        isShortFilm,
        addMovieToSaved,
        removeMovieFromSaved,
        handleCheckboxChange,
        fetchSavedMovies,
        updateSearchKeyword,
        keyWord,
        setIsLoading,
        setKeyWord,
        setIsShortFilm,
        setSearchErrorNotFinded,
        setSavedMovies,
        movies,
        setMovies
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
