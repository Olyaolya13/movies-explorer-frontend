import { Link } from 'react-router-dom';
import Logo from '../../images/logo/header_logo.svg';
import { RegisterData } from '../../utils/constants';
import './Register.css';
import useFormValidation from '../../hooks/FormValidation';

function Register({ onRegister }) {
  const { values, errors, isValid, handleChange, resetValidation } = useFormValidation();

  const { name, email, password } = values;
  const { name: nameError, email: emailError, password: passwordError } = errors;

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!isValid) {
      onRegister({ name, email, password });
    }
    resetValidation();
  }

  return (
    <section className="register">
      <div className="register__content">
        <Link to="/">
          <img src={Logo} alt="Логотип" className="register__logo" />
        </Link>
        <h2 className="register__title">{RegisterData.title}</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="register__label">
            {RegisterData.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            placeholder="Введите имя"
            minlength="2"
            maxlength="20"
            onChange={handleChange}
            className={`register__input ${nameError ? 'register__input-text-error' : ''}`}
            required
          />
          <span
            className={`register__input-error ${nameError ? 'register__input-error_visible' : ''}`}
          >
            {nameError}
          </span>
          <label htmlFor="email" className="register__label">
            {RegisterData.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="Введите е-mail"
            minlength="6"
            maxlength="20"
            onChange={handleChange}
            className={`register__input ${emailError ? 'register__input-text-error' : ''}`}
            required
          />
          <span
            className={`register__input-error ${emailError ? 'register__input-error_visible' : ''}`}
          >
            {emailError}
          </span>
          <label htmlFor="password" className="register__label">
            {RegisterData.password}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            placeholder="Введите пароль"
            minlength="6"
            maxlength="20"
            onChange={handleChange}
            className={`register__input ${passwordError ? 'register__input-text-error' : ''}`}
            required
          />
          <span
            className={`register__input-error ${
              passwordError ? 'register__input-error_visible' : ''
            }`}
          >
            {passwordError}
          </span>
          <button type="submit" className="register__button">
            {RegisterData.signup}
          </button>
        </form>
        <div>
          <div className="register__text">
            <p className="register__subtitle">{RegisterData.question}</p>
            <Link to="/signin" className="register__link">
              {RegisterData.signin}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
