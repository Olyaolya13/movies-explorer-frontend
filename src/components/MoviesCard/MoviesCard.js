import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ title, hours, minutes, image }) {
  const location = useLocation();
  const isSavedPage = location.pathname === '/saved-movies';

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
    <div className="movie-card">
      <img src={image} className="movie-card__image" />
      <div className="movie-card__about">
        <div className="movie-card__text">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__duration">
            {hours}
            {minutes}
          </p>
        </div>
        <button
          className={`movie-card__button ${buttonClassName}`}
          onClick={handleSaveClick}
        ></button>
      </div>
    </div>
  );
}

export default MoviesCard;
