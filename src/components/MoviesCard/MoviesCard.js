import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {
  const location = useLocation();
  const isSavedPage = location.pathname === '/saved-movies';
  const movieUrl = `https://api.nomoreparties.co${props.movie.image.url}`;

  const [isSaved, setIsSaved] = useState(false);

  const buttonClassName = isSavedPage
    ? 'movie-card__delete'
    : isSaved
    ? 'movie-card__saved'
    : 'movie-card__not-saved';

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <section className="movie-card">
      <a href={props.movie.trailerLink} target="blank">
        <img src={movieUrl} className="movie-card__image" alt={props.movie.description} />
      </a>
      <div className="movie-card__about">
        <div className="movie-card__text">
          <h2 className="movie-card__title">{props.movie.nameRU}</h2>
          <p className="movie-card__duration">{props.movie.duration}</p>
        </div>
        <button
          type="submit"
          className={`movie-card__button ${buttonClassName}`}
          onClick={handleSaveClick}
        ></button>
      </div>
    </section>
  );
}

export default MoviesCard;
