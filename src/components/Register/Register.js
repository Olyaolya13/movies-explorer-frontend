import {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo/header_logo.svg'
import './Register.css'

const RegisterData = {
    title: 'Добро пожаловать!',
    signup:'Зарегистрироваться',
    question: 'Уже зарегистрированы?',
    name: 'Имя',
    email:'E-mail',
    password:'Пароль',
    signin: 'Войти'
}

function Register({ onRegister }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        userName: '',
      });

    const [errors, setErrors] = useState({});
    const { email, password, userName } = formData;

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(formData);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <section className="register">
    <div className="register__content">
      <img src={Logo} alt="Логотип" className="register__logo"/>
      <h2 className="register__title">{RegisterData.title}</h2>
      <form onSubmit={handleSubmit} className="register__form">
      <label htmlFor="userName" className="register__label">
          {RegisterData.name}
        </label>
        <input
          id="userName"
          name="userName"
          type="text"
          value={userName}
          onChange={handleChange}
          className="register__input"
          required
        />
        <span className="register__error" id="register__userName-error">
          {errors.userName}
        </span>
        <label htmlFor="email" className="register__label">
          {RegisterData.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          className="register__input"
          required
        />
        <span className="register__error" id="register__email-error">
          {errors.email}
        </span>
        <label htmlFor="password" className="register__label">
        {RegisterData.password}
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          className="register__input"
          required
        />
        <span className="register__error" id="register__password-error">
          {errors.password}
        </span>
        <button type="submit" className="register__button">
          {RegisterData.signup}
        </button>
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
