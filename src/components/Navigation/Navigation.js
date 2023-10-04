import React from 'react';
import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo/header_logo.svg';
import profileLogo from '../../images/logo/profileLogo.svg';
import { NavigationData } from '../../utils/constants';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation() {
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
          <Link
            to="/movies"
            className="navigation__link navigation__text"
            style={activeStyleMoviesPage}
          >
            {NavigationData.film}
          </Link>
          <Link
            to="/saved-movies"
            className="navigation__link navigation__text"
            style={activeStyleSavedMoviesPage}
          >
            {NavigationData.savedFilm}
          </Link>
        </div>
        <div>
          <Link to="/profile" className="navigation__link navigation__text-button">
            <div className="navigation__button">
              <img src={profileLogo} alt="" className="navigation__profile-logo" />
              {NavigationData.profile}
            </div>
          </Link>
        </div>
      </div>
      <BurgerMenu />
    </section>
  );
}

export default Navigation;
