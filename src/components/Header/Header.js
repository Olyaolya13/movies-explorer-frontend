import React from 'react';
import './Header.css';
import logo from '../../images/logo/header_logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const HeaderData = {
  signup: 'Регистрация',
  signin: 'Войти'
};

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="header__logo" />
      </Link>
      {!isLoggedIn ? (
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
      ) : (
        <Navigation />
      )}
    </header>
  );
}

export default Header;

// import React from 'react';
// import './Header.css';
// import logo from '../../images/logo/header_logo.svg';
// import { Link } from 'react-router-dom';

// function Header({ isLoggedIn }) {
//   return (
//     <header className="header">
//       <Link to="/">
//         <img src={logo} alt="Logo" className="header__logo" />
//       </Link>
//       {isLoggedIn ? (
//         <nav className="header__nav">
//           <Link to="/profile" className="header__link">
//             Профиль
//           </Link>
//           {/* Другие ссылки для зарегистрированных пользователей */}
//         </nav>
//       ) : (
//         <div className="header__auth">
//           <Link to="/signup" className="header__link">
//             Регистрация
//           </Link>
//           <Link to="/signin" className="header__link">
//             Войти
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;
