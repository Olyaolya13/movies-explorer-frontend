import React from 'react';
import './Navigation.css';
import logo from '../../images/logo/header_logo.svg';
import { Link } from 'react-router-dom';
import profileLogo from '../../images/logo/profileLogo.svg';

const NavigationData = {
  film: 'Фильмы',
  savedFilm: 'Сохраненные фильмы',
  profile: 'Аккаунт'
};

function Navigation({ isLoggedIn }) {
  return (
    <section className="navigation">
      <div className="navigation__content">
        <div className="navigation__title">
          <img src={logo} alt="Logo" className="navigation__logo" />
          <Link to="/movies" className="navigation__link">
            <p className="navigation__text">{NavigationData.film}</p>
          </Link>
          <Link to="/saved-movies" className="navigation__link">
            <p className="navigation__text">{NavigationData.savedFilm}</p>
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
