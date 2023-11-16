import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useMovieContext } from '../../contexts/MovieContext';
import { MoviesCardListData } from '../../utils/constants';
import useVisibleCardsMovies from '../../hooks/VisibleCardsMovies';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {
  const location = useLocation();

  const { isLoading, searchErrorNotFinded, isShortSavedFilm, isShortFilm } = useMovieContext();

  const { visibleCardsRows, visibleCardsMovies, stepAddCardMovies, setVisibleCardsRows } =
    useVisibleCardsMovies();
  const visibleCards = visibleCardsRows * visibleCardsMovies;

  const movies = isShortFilm
    ? Array.isArray(props.movies)
      ? props.movies.filter(i => i.duration <= 40)
      : []
    : Array.isArray(props.movies)
    ? props.movies.slice(0, visibleCards)
    : [];

  const savedMovies = isShortSavedFilm
    ? Array.isArray(props.savedMovies)
      ? props.savedMovies.filter(i => i.duration <= 40)
      : []
    : Array.isArray(props.savedMovies)
    ? props.savedMovies
    : [];

  const moviesRoute = location.pathname === '/movies' ? movies : savedMovies;

  const loadMoreMovies = () => {
    setVisibleCardsRows(cardRow => cardRow + stepAddCardMovies);
  };

  const showMoreButton =
    location.pathname === '/movies' && isShortFilm ? visibleCards >= props.movies.length : true;

  return (
    <section
      className={
        location.pathname === '/saved-movies' ? 'movie-card-list-saved' : 'movie-card-list'
      }
    >
      {isLoading && <Preloader />}
      {searchErrorNotFinded && !isLoading && (
        <p className="movie-card-list__error">{MoviesCardListData.notFound}</p>
      )}
      {props.isSearchError && !isLoading && (
        <p className="movie-card-list__error">{MoviesCardListData.Error}</p>
      )}
      <ul className="movie-card-list__section">
        {!isLoading &&
          moviesRoute.map((movie, index) => (
            <li className="movie-card-list__movies" key={index}>
              <MoviesCard
                movie={movie}
                onAdd={props.onMovieSave}
                onDelete={props.onMovieDelete}
                savedMovies={props.savedMovies}
              />
            </li>
          ))}
      </ul>
      {location.pathname === '/movies' &&
        showMoreButton &&
        visibleCardsRows * visibleCardsMovies < props.movies.length && (
          <div className="movie-card-list__show-button">
            <button type="button" className="movie-card-list__text-button" onClick={loadMoreMovies}>
              {MoviesCardListData.buttonText}
            </button>
          </div>
        )}
    </section>
  );
}

export default MoviesCardList;
