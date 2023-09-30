import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo/header_logo.svg';
import { RegisterData } from '../../utils/constants';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangeUserName(evt) {
    setUserName(evt.target.value);
  }

  return (
    <section className="register">
      <div className="register__content">
        <Link to={'/'}>
          <img src={Logo} alt="Логотип" className="register__logo" />
        </Link>
        <h2 className="register__title">{RegisterData.title}</h2>
        <form className="register__form">
          <label htmlFor="userName" className="register__label">
            {RegisterData.name}
          </label>
          <input
            id="userName"
            name="userName"
            type="text"
            value={userName}
            onChange={handleChangeUserName}
            className="register__input"
            required
          />
          <span className="register__error" id="register__userName-error"></span>
          <label htmlFor="email" className="register__label">
            {RegisterData.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChangeEmail}
            className="register__input"
            required
          />
          <span className="register__error" id="register__email-error"></span>
          <label htmlFor="password" className="register__label">
            {RegisterData.password}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
            className="register__input"
            required
          />
          <span className="register__error" id="register__password-error"></span>
          <Link to="/signin">
            <button type="submit" className="register__button">
              {RegisterData.signup}
            </button>
          </Link>
        </form>
        <div>
          <p className="register__subtitle">
            {RegisterData.question}{' '}
            <Link to="/signin" className="register__link">
              {RegisterData.signin}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
