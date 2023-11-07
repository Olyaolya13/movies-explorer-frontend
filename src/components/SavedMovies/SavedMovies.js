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
