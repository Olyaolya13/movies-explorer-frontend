import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ title, hours, minutes, image, alt }) {
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
    <section className="movie-card">
      <img src={image} className="movie-card__image" alt={alt} />
      <div className="movie-card__about">
        <div className="movie-card__text">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__duration">
            {hours}
            {minutes}
          </p>
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
