import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';

function MoviesCardList({ movies }) {
  return (
    <>
      <div className="movie-card__section">
        {movies.map(movie => (
          <MoviesCard
            key={movie.title}
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
