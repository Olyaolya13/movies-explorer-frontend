import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo/header_logo.svg';
import './Register.css';

const RegisterData = {
  title: 'Добро пожаловать!',
  signup: 'Зарегистрироваться',
  question: 'Уже зарегистрированы?',
  name: 'Имя',
  email: 'E-mail',
  password: 'Пароль',
  signin: 'Войти'
};

function Register({ userName, email, password }) {
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
