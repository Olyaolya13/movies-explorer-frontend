import React from 'react';
import './Header.css';
import logo from '../../images/logo/header_logo.svg';
import { Link } from 'react-router-dom';

const HeaderData = {
  signup: 'Регистрация',
  signin: 'Войти'
};

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="header__logo" />
      </Link>
      <nav className="header__nav">
        <Link to="/signup" className="header__link">
          <p className="header__text">{HeaderData.signup}</p>
        </Link>
        <Link to="/signin" className="header__link">
          <button className="header__button">
            <p className="header__text-button">{HeaderData.signin}</p>
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
