import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {
  const location = useLocation();
  const isSavedPage = location.pathname === '/saved-movies';

  const [isSaved, setIsSaved] = useState(false);
<<<<<<< HEAD

  useEffect(() => {
    setIsSaved(props.savedMovies.some(savedMovie => savedMovie.movieId === props.movie.id));
  }, [props.savedMovies, props.movie.id]);

  const handleDeleteClick = () => {
    console.log('delete');
    const savedMovie = props.savedMovies.find(
      savedMovie => savedMovie.movieId === props.movie.movieId || props.movie.id
    );
    if (savedMovie && savedMovie._id) {
      props.onDelete(savedMovie._id);
    } else {
      console.log('Не удалось удалить'); //
    }
  };

  const handleSaveClick = () => {
    if (!isSaved) {
      props.onAdd(props.movie);
      setIsSaved(true);
    } else {
      const movieIdToDelete = props.movie._id || props.movie.movieId;
      handleDeleteClick(movieIdToDelete);
    }
  };

  const movieUrl = isSavedPage
=======

  const isSavedMovie = props.savedMovies.some(savedMovie => savedMovie.id === props.movie.id);
  const movieUrl = isSavedMovie
>>>>>>> df4c11d4f936d217e838a12531af7185baeff8ad
    ? props.movie.image
    : `https://api.nomoreparties.co${props.movie.image.url}`;

  function changeToHoursAndMinutes(min) {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return hours > 0 ? `${hours} ч${minutes > 0 ? ` ${minutes} мин` : ''}` : `${minutes} мин`;
  }

  const durationInMinutesAndHours = changeToHoursAndMinutes(props.movie.duration);

  const buttonClassName = isSavedPage
    ? 'movie-card__delete'
    : isSaved
    ? 'movie-card__saved'
    : 'movie-card__not-saved';

  function handleDeleteClick() {
    props.onDelete(props.movie._id);
    setIsSaved(false);
  }

  function handleSaveClick() {
    if (!isSaved) {
      props.onAdd(props.movie);
      setIsSaved(true);
    } else {
      props.onDelete(props.movie.id);
    }
  }

  useEffect(() => {
    setIsSaved(props.savedMovies.some(savedMovie => savedMovie.movieId === props.movie.id));
  }, []);

  return (
    <section className="movie-card">
      <a href={props.movie.trailerLink} target="_blank" rel="noopener noreferrer">
        <img
          src={movieUrl}
          className="movie-card__image"
          alt={props.movie.description || 'Movie poster'}
        />
      </a>

      <div className="movie-card__about">
        <div className="movie-card__text">
          <h2 className="movie-card__title">{props.movie.nameRU}</h2>
          <p className="movie-card__duration">{durationInMinutesAndHours}</p>
        </div>
<<<<<<< HEAD
        <button
          type="button"
          className={`movie-card__button ${buttonClassName}`}
          onClick={isSavedPage ? handleDeleteClick : handleSaveClick}
        ></button>
=======

        {location.pathname === '/movies' && (
          <button
            type="button"
            className={`movie-card__button ${buttonClassName}`}
            onClick={handleSaveClick}
          ></button>
        )}

        {location.pathname === '/saved-movies' && (
          <button
            type="button"
            className={`movie-card__button ${buttonClassName}`}
            onClick={handleDeleteClick}
          ></button>
        )}
>>>>>>> df4c11d4f936d217e838a12531af7185baeff8ad
      </div>
    </section>
  );
}

export default MoviesCard;
