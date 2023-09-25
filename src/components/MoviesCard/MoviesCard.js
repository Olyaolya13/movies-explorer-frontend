import React from 'react';
import './MoviesCard.css';

function MoviesCard({ title, hours, minutes, image }) {
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
        <button className="movie-card__not-saved"></button>
      </div>
    </div>
  );
}

export default MoviesCard;
