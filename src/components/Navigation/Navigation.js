import React from 'react';
import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo/header_logo.svg';
import profileLogo from '../../images/logo/profileLogo.svg';

const NavigationData = {
  film: 'Фильмы',
  savedFilm: 'Сохраненные фильмы',
  profile: 'Аккаунт'
};
function Navigation({ isLoggedIn }) {
  const { pathname } = useLocation();

  const isMainPage = pathname === '/';
  const isMoviesPage = pathname === '/movies';
  const isSavedMoviesPage = pathname === '/saved-movies';

  const navigationStyle = {
    backgroundColor: isMainPage ? '' : '#FAFAFA'
  };

  const activeStyleMoviesPage = {
    fontWeight: isMoviesPage ? '500' : ''
  };

  const activeStyleSavedMoviesPage = {
    fontWeight: isSavedMoviesPage ? '500' : ''
  };

  return (
    <section className="navigation" style={navigationStyle}>
      <div className="navigation__content">
        <div className="navigation__title">
          <Link to="/">
            <img src={logo} alt="Logo" className="navigation__logo" />
          </Link>
          <Link to="/movies" className="navigation__link">
            <p className="navigation__text" style={activeStyleMoviesPage}>
              {NavigationData.film}
            </p>
          </Link>
          <Link to="/saved-movies" className="navigation__link">
            <p className="navigation__text" style={activeStyleSavedMoviesPage}>
              {NavigationData.savedFilm}
            </p>
          </Link>
        </div>
        <div>
          <Link to="/profile" className="navigation__link">
            <button className="navigation__button">
              <img src={profileLogo} alt="" className="navigation__profile-logo" />
              <p className="navigation_text-button">{NavigationData.profile}</p>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
