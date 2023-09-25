import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardListData from '../../utils/constants';

function MoviesCardList() {
  return (
    <article className="movie-card__section">
      {MoviesCardListData.map((movie, index) => (
        <MoviesCard
          key={index}
          title={movie.title}
          hours={movie.hours}
          minutes={movie.minutes}
          image={movie.image}
        />
      ))}
    </article>
  );
}

export default MoviesCardList;
