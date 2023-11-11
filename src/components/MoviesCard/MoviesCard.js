import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {
  const location = useLocation();

  const isSavedPage = location.pathname === '/saved-movies';
  const isSavedMovie = props.savedMovies.some(savedMovie => savedMovie.id === props.movie.id);
  const [isSaved, setIsSaved] = useState(false);
  console.log(isSaved);

  const handleSaveClick = () => {
    if (!isSaved) {
      console.log('yes');
      props.onAdd(props.movie);
      setIsSaved(true);
    } else {
      console.log('no');
      props.onDelete(props.movie._id);
      setIsSaved(false);
    }
  };

  const handleDeleteClick = () => {
    console.log('delete');
    props.onSavedDelete(props.movie._id);
  };

  const movieUrl = isSavedMovie
    ? props.movie.image
    : `https://api.nomoreparties.co${props.movie.image.url}`;

  function changeToHoursAndMinutes(min) {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return `${hours} ч ${minutes} мин`;
  }

  const durationInMinutesAndHours = changeToHoursAndMinutes(props.movie.duration);

  const buttonClassName = isSavedPage
    ? 'movie-card__delete'
    : isSaved
    ? 'movie-card__saved'
    : 'movie-card__not-saved';

  return (
    <section className="movie-card">
      <a href={props.movie.trailerLink} target="_blank" rel="noopener noreferrer">
        <img src={movieUrl} className="movie-card__image" alt={props.movie.description} />
      </a>
      <div className="movie-card__about">
        <div className="movie-card__text">
          <h2 className="movie-card__title">{props.movie.nameRU}</h2>
          <p className="movie-card__duration">{durationInMinutesAndHours}</p>
        </div>
        <button
          type="button"
          className={`movie-card__button ${buttonClassName}`}
          onClick={!isSavedPage ? handleSaveClick : handleDeleteClick}
        ></button>
      </div>
    </section>
  );
}

export default MoviesCard;
