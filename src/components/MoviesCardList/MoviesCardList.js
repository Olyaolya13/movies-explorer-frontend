import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { MoviesCardLisShowMoreBtnData } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';
import useVisibleCardsMovies from '../../hooks/VisibleCardsMovies';

function MoviesCardList(props) {
  const location = useLocation();
  const isSavedPage = location.pathname === '/saved-movies';
  const movies = props.isShortFilm
    ? props.movies.filter(movie => movie.duration <= 40)
    : props.movies;

  const MoviesCardListData = {
    movieNotFound: 'Ничего не найдено',
    searchError:
      'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.Подождите немного и попробуйте ещё раз'
  };

  const { visibleCardsRows, visibleCardsMovies, stepAddCardMovies, setVisibleCardsRows } =
    useVisibleCardsMovies();
  const visibleCardsMoviesRows = () => {
    setVisibleCardsRows(cardRow => cardRow + stepAddCardMovies);
  };
  const visibleCards = visibleCardsRows * visibleCardsMovies;

  const hideShowMoreButton = visibleCards >= props.movies.length;

  return (
    <section className={!isSavedPage ? 'movie-card-list' : 'movie-card-list-saved'}>
      {props.isLoading && <Preloader />}
      {props.isMovieNotFound && !props.isLoading && (
        <p className="movie-card-list__error">{MoviesCardListData.movieNotFound}</p>
      )}
      {props.isSearchError && !props.isLoading && (
        <p className="movie-card-list__error">{MoviesCardListData.searchError}</p>
      )}
      <ul className="movie-card-list__section">
        {!props.isLoading &&
          movies.slice(0, visibleCards).map(movie => (
            <li className="movie-card-list__movies" key={movie.movieId}>
              <MoviesCard key={movie.movieId} movie={movie} />
            </li>
          ))}
      </ul>
      {/* <ul className="movie-card-list__section">
        {!props.isLoading &&
          props.movies.slice(0, visibleCards).map(movie => (
            <li className="movie-card-list__movies" key={movie.movieId}>
              <MoviesCard key={movie.movieId} movie={movie} />
            </li>
          ))}
      </ul> */}

      {!isSavedPage && !hideShowMoreButton && (
        <div className="movie-card-list__show-button">
          <button
            type="submit"
            className="movie-card-list__text-button"
            onClick={visibleCardsMoviesRows}
          >
            {MoviesCardLisShowMoreBtnData.title}
          </button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
