import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardListData from '../../utils/constants';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';

function MoviesCardList() {
  return (
    <>
      <div className="movie-card__section">
        {MoviesCardListData.map((movie, index) => (
          <MoviesCard
            key={index}
            title={movie.title}
            hours={movie.hours}
            minutes={movie.minutes}
            image={movie.image}
          />
        ))}
      </div>
      <ShowMoreBtn />
    </>
  );
}

export default MoviesCardList;
