import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMovieContext } from '../../contexts/MovieContext';
import './MoviesCardList.css';
import { MoviesCardListData } from '../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import useVisibleCardsMovies from '../../hooks/VisibleCardsMovies';

function MoviesCardList(props) {
  console.log(props);
  const location = useLocation();
  const isSavedPage = location.pathname === '/saved-movies';

  const { isLoading, searchErrorNotFinded, isShortSavedFilm, isShortFilm } = useMovieContext();

  const { visibleCardsRows, visibleCardsMovies, stepAddCardMovies, setVisibleCardsRows } =
    useVisibleCardsMovies();

  const loadMoreMovies = () => {
    setVisibleCardsRows(cardRow => cardRow + stepAddCardMovies);
  };

  const visibleCards = visibleCardsRows * visibleCardsMovies;

  const showMoreButton = !isSavedPage && isShortFilm ? visibleCards >= props.movies.length : true;

  const allMovies =
    !isSavedPage &&
    props.movies.filter(movie => (isShortFilm ? movie.duration <= 40 : props.movies));

  const allSavedMovies =
    isSavedPage &&
    props.savedMovies.filter(movie =>
      isShortSavedFilm ? movie.duration <= 40 : props.savedMovies
    );

  return (
    <section className={isSavedPage ? 'movie-card-list-saved' : 'movie-card-list'}>
      {isLoading && <Preloader />}

      {props.isSearchError && !searchErrorNotFinded && !isLoading && (
        <p className="movie-card-list__error">{MoviesCardListData.Error}</p>
      )}
      {searchErrorNotFinded && allMovies && !isLoading && (
        <p className="movie-card-list__error">{MoviesCardListData.notFound}</p>
      )}

      {isSavedPage && !props.isSearchError && allSavedMovies.length === 0 && !props.isLoading && (
        <p className="movie-card-list__error">{MoviesCardListData.notFound}</p>
      )}

      {!isSavedPage && allMovies && (
        <ul className="movie-card-list__section">
          {!isLoading &&
            allMovies.slice(0, visibleCards).map(movie => (
              <li className="movie-card-list__movies" key={movie._id}>
                <MoviesCard
                  movie={movie}
                  onAdd={props.onMovieSave}
                  onDelete={props.onMovieDelete}
                  savedMovies={props.savedMovies}
                />
              </li>
            ))}
        </ul>
      )}
      {isSavedPage && allSavedMovies && (
        <ul className="movie-card-list__section">
          {!props.isLoading &&
            allSavedMovies.map(movie => (
              <li className="movie-card-list__movies" key={movie._id}>
                <MoviesCard
                  movie={movie}
                  savedMovies={props.savedMovies}
                  onSavedDelete={props.onSavedMovieDelete}
                />
              </li>
            ))}
        </ul>
      )}

      {!isSavedPage &&
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

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './MoviesCardList.css';
// import MoviesCard from '../MoviesCard/MoviesCard';
// import { useMovieContext } from '../../contexts/MovieContext';
// import { MoviesCardListData } from '../../utils/constants';
// import useVisibleCardsMovies from '../../hooks/VisibleCardsMovies';
// import Preloader from '../Preloader/Preloader';

// function MoviesCardList(props) {
//   const location = useLocation();
//   const isSavedPage = location.pathname === '/saved-movies';

//   const { isLoading, searchErrorNotFinded, isShortSavedFilm, isShortFilm } = useMovieContext();

//   const { visibleCardsRows, visibleCardsMovies, stepAddCardMovies, setVisibleCardsRows } =
//     useVisibleCardsMovies();
//   const visibleCards = visibleCardsRows * visibleCardsMovies;

//   const movies = props.movies.filter(movie => (isShortFilm ? movie.duration <= 40 : props.movies));

//   const savedMovies = props.savedMovies.filter(movie =>
//     isShortSavedFilm ? movie.duration <= 40 : props.savedMovies
//   );

//   const moviesRoute = location.pathname === '/movies' ? movies : savedMovies;

//   const loadMoreMovies = () => {
//     setVisibleCardsRows(cardRow => cardRow + stepAddCardMovies);
//   };

//   const showMoreButton =
//     location.pathname === '/movies' && isShortFilm ? visibleCards >= props.movies.length : true;

//   return (
//     <section
//       className={
//         location.pathname === '/saved-movies' ? 'movie-card-list-saved' : 'movie-card-list'
//       }
//     >
//       {isLoading && <Preloader />}

//       {searchErrorNotFinded && !isLoading && (
//         <p className="movie-card-list__error">{MoviesCardListData.notFound}</p>
//       )}

//       {isSavedPage &&
//         !props.isSearchError &&
//         !movies &&
//         savedMovies.length === 0 &&
//         !props.isLoading && <p className="movie-card-list__error">{MoviesCardListData.notFound}</p>}
//       {props.isSearchError && !isLoading && (
//         <p className="movie-card-list__error">{MoviesCardListData.Error}</p>
//       )}
//       <ul className="movie-card-list__section">
//         {!isLoading &&
//           moviesRoute.map((movie, index) => (
//             <li className="movie-card-list__movies" key={index}>
//               <MoviesCard
//                 movie={movie}
//                 onAdd={props.onMovieSave}
//                 onDelete={props.onMovieDelete}
//                 savedMovies={props.savedMovies}
//                 onSavedDelete={props.onSavedMovieDelete}
//               />
//             </li>
//           ))}
//       </ul>
//       {!isSavedPage &&
//         showMoreButton &&
//         visibleCardsRows * visibleCardsMovies < props.movies.length && (
//           <div className="movie-card-list__show-button">
//             <button type="button" className="movie-card-list__text-button" onClick={loadMoreMovies}>
//               {MoviesCardListData.buttonText}
//             </button>
//           </div>
//         )}
//     </section>
//   );
// }

// export default MoviesCardList;
