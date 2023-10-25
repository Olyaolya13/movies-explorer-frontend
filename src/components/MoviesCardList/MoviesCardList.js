import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { MoviesCardLisShowMoreBtnData } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {
  const location = useLocation();
  const isSavedPage = location.pathname === '/saved-movies';

  return (
    <section className={!isSavedPage ? 'movie-card-list' : 'movie-card-list-saved'}>
      {props.isLoading && <Preloader />}
      {props.isMovieNotFound && !props.isLoading && (
        <p className="movie-card-list__error">Ничего не найдено</p>
      )}
      <ul className="movie-card-list__section">
        {Array.isArray(props.movies) &&
          !props.isLoading &&
          props.movies.map(movie => (
            <li className="movie-card-list__movies" key={movie.movieId}>
              <MoviesCard key={movie.movieId} movie={movie} />
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
