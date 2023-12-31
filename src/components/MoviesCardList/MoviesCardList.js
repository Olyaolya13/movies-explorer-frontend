import { React } from 'react';
import { useLocation } from 'react-router-dom';
import { useMovieContext } from '../../contexts/MovieContext';
import './MoviesCardList.css';
import { MoviesCardListData } from '../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import useVisibleCardsMovies from '../../hooks/VisibleCardsMovies';

function MoviesCardList(props) {
  const location = useLocation();
  const isSavedPage = location.pathname === '/saved-movies';

  const { isLoading, searchServerError, isShortSavedFilm, isShortFilm, isSearchActive } =
    useMovieContext();

  const { visibleCardsRows, visibleCardsMovies, stepAddCardMovies, setVisibleCardsRows } =
    useVisibleCardsMovies();

  const loadMoreMovies = () => {
    setVisibleCardsRows(cardRow => cardRow + stepAddCardMovies);
  };

  const visibleCards = visibleCardsRows * visibleCardsMovies;

  const showMoreButton = !isSavedPage && isShortFilm ? visibleCards >= props.movies.length : true;

  const allSavedMovies =
    isSavedPage &&
    props.savedMovies.filter(movie => (isShortSavedFilm ? movie.duration <= 40 : true));

  const allMovies =
    !isSavedPage &&
    props.movies
      .filter(movie => (isShortFilm ? movie.duration <= 40 : true))
      .slice(0, visibleCardsRows * visibleCardsMovies);

  const filterMovie = !isSavedPage ? allMovies : allSavedMovies;

  return (
    <section className={isSavedPage ? 'movie-card-list-saved' : 'movie-card-list'}>
      {isLoading && <Preloader />}

      {searchServerError && !isLoading && !props.isSearchError && (
        <p className="movie-card-list__error">{MoviesCardListData.serverError}</p>
      )}
      {isSearchActive && allMovies.length === 0 && !isLoading && (
        <p className="movie-card-list__error">{MoviesCardListData.notFound}</p>
      )}

      {allSavedMovies.length === 0 && !isLoading && (
        <p className="movie-card-list__error">{MoviesCardListData.notFound}</p>
      )}

      <ul className="movie-card-list__section">
        {!isLoading &&
          filterMovie.map(movie => (
            <li className="movie-card-list__movies" key={movie && movie._id}>
              <MoviesCard
                movie={movie}
                onAdd={props.onMovieSave}
                onDelete={props.onMovieDelete}
                savedMovies={props.savedMovies}
              />
            </li>
          ))}
      </ul>

      {!isSavedPage &&
        !isLoading &&
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
