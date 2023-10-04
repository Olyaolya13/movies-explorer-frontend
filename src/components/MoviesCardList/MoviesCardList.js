import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { MoviesCardLisShowMoreBtnData } from '../../utils/constants';

function MoviesCardList({ movies }) {
  const location = useLocation();
  const isSavedPage = location.pathname === '/saved-movies';

  return (
    <section className="movie-card-list">
      <ul className="movie-card-list__section">
        {movies.map((movie, index) => (
          <li className="movie-card-list__movies" key={index}>
            <MoviesCard
              title={movie.title}
              hours={movie.hours}
              minutes={movie.minutes}
              image={movie.image}
              alt={movie.alt}
            />
          </li>
        ))}
      </ul>
      {!isSavedPage && (
        <div className="movie-card-list__show-button">
          <button type="submit" className="movie-card-list__text-button">
            {MoviesCardLisShowMoreBtnData.title}
          </button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
