// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import './MoviesCard.css';

// function MoviesCard(props) {
//   console.log(props);
//   const location = useLocation();
//   const isSavedPage = location.pathname === '/saved-movies';
//   const isSavedMovie = props.savedMovies.some(savedMovie => savedMovie.id === props.movie.id);
//   const [isSaved, setIsSaved] = useState(isSavedMovie);
//   console.log(isSaved);

//   const buttonClassName = isSavedPage ? 'movie-card__delete' : isSaved ? 'movie-card__saved' : '';

//   const handleSaveClick = () => {
//     if (!isSaved && !isSavedPage) {
//       props.onAdd(props.movie);
//       setIsSaved(true);
//     } else {
//       props.onDelete(props.movie._id);
//       setIsSaved(false);
//     }
//   };

//   const movieUrl = isSavedMovie
//     ? props.movie.image
//     : `https://api.nomoreparties.co${props.movie.image.url}`;

//   function changeToHoursAndMinutes(min) {
//     const hours = Math.floor(min / 60);
//     const minutes = min % 60;
//     return `${hours} ч ${minutes} мин`;
//   }
//   const durationInMinutesAndHours = changeToHoursAndMinutes(props.movie.duration);

//   useEffect(() => {
//     const saved = localStorage.getItem('isSaved');
//     if (saved === 'true') {
//       setIsSaved(true);
//     } else {
//       setIsSaved(false);
//     }
//   }, [isSaved]);

//   return (
//     <section className="movie-card">
//       <a href={props.movie.trailerLink} target="blank">
//         <img src={movieUrl} className="movie-card__image" alt={props.movie.description} />
//       </a>
//       <div className="movie-card__about">
//         <div className="movie-card__text">
//           <h2 className="movie-card__title">{props.movie.nameRU}</h2>
//           <p className="movie-card__duration">{durationInMinutesAndHours}</p>
//         </div>
//         <button
//           type="submit"
//           className={`movie-card__not-saved ${buttonClassName}`}
//           // className={`movie-card__button ${
//           //   isSaved ? 'movie-card__saved' : 'movie-card__not-saved'
//           // }`}
//           onClick={handleSaveClick}
//         ></button>
//       </div>
//     </section>
//   );
// }

// export default MoviesCard;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {
  const location = useLocation();
  const isSavedPage = location.pathname === '/saved-movies';
  const isSavedMovie = props.savedMovies.some(savedMovie => savedMovie.id === props.movie.id);

  const [isSaved, setIsSaved] = useState(isSavedMovie);

  const handleSaveClick = () => {
    if (!isSaved && !isSavedPage) {
      props.onAdd(props.movie);
      setIsSaved(true);
      localStorage.setItem(`isSaved-${props.movie.id}`, 'true');
    } else {
      props.onDelete(props.movie._id);
      setIsSaved(false);
      localStorage.removeItem(`isSaved-${props.movie.id}`);
    }
  };

  const movieUrl = isSavedMovie
    ? props.movie.image
    : `https://api.nomoreparties.co${props.movie.image.url}`;

  function changeToHoursAndMinutes(min) {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return `${hours} ч ${minutes} мин`;
  }

  const durationInMinutesAndHours = changeToHoursAndMinutes(props.movie.duration);

  useEffect(() => {
    const movieId = props.movie.id;
    const saved = localStorage.getItem(`isSaved-${movieId}`);
    setIsSaved(saved === 'true');
  }, [props.movie.id]);

  const buttonClassName = isSavedPage
    ? 'movie-card__delete'
    : isSaved
    ? 'movie-card__saved'
    : 'movie-card__not-saved';

  return (
    <section className="movie-card">
      <a href={props.movie.trailerLink} target="_blank" rel="noopener noreferrer">
        <img src={movieUrl} className="movie-card__image" alt={props.movie.description} />
      </a>
      <div className="movie-card__about">
        <div className="movie-card__text">
          <h2 className="movie-card__title">{props.movie.nameRU}</h2>
          <p className="movie-card__duration">{durationInMinutesAndHours}</p>
        </div>
        <button
          type="button"
          className={`movie-card__button ${buttonClassName}`}
          onClick={handleSaveClick}
        ></button>
      </div>
    </section>
  );
}

export default MoviesCard;
