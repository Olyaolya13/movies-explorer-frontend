import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderData } from '../../utils/constants';
import './Header.css';
import logo from '../../images/logo/header_logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="header__logo" />
      </Link>
      {!isLoggedIn ? (
        <nav className="header__nav">
          <Link to="/signup" className="header__link header__text">
            {HeaderData.signup}
          </Link>
          <Link to="/signin" className="header__link header__button">
            {HeaderData.signin}
          </Link>
        </nav>
      ) : (
        <Navigation />
      )}
    </header>
  );
}

export default Header;
