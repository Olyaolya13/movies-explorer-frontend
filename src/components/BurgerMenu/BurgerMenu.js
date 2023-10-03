import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import closeIcon from '../../images/CloseIcon.svg';
import profileLogo from '../../images/logo/profileLogo.svg';

import './BurgerMenu.css';

function BurgerMenu() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <section className="burger">
      {isBurgerOpen && <div className="burger-menu__overlay" onClick={toggleBurgerMenu}></div>}
      <div className={`burger-menu ${isBurgerOpen ? 'burger-menu__open' : ''}`}>
        <div onClick={toggleBurgerMenu}>
          {isBurgerOpen ? (
            <img src={closeIcon} alt="Cross" className="burger-menu__close-icon" />
          ) : (
            <div className="burger-menu__icon">
              <div className="burger-menu__line"></div>
              <div className="burger-menu__line"></div>
              <div className="burger-menu__line"></div>
            </div>
          )}
        </div>
        <ul className="burger-menu__items">
          <Link to="/" onClick={toggleBurgerMenu} className="burger-menu__link">
            <li className="burger-menu__title">Главная</li>
          </Link>
          <Link to="/movies" onClick={toggleBurgerMenu} className="burger-menu__link">
            <li className="burger-menu__title">Фильмы</li>
          </Link>
          <Link to="/saved-movies" onClick={toggleBurgerMenu} className="burger-menu__link">
            <li className="burger-menu__title">Сохраненные фильмы</li>
          </Link>
          <Link to="/profile" onClick={toggleBurgerMenu} className="burger-menu__link">
            <button className="burger-menu__link-button">
              <img src={profileLogo} alt="" className="burger-menu__link-logo" />
              <p className="burger-menu__title burger-menu__button-title">Аккаунт</p>
            </button>
          </Link>
        </ul>
      </div>
    </section>
  );
}

export default BurgerMenu;
