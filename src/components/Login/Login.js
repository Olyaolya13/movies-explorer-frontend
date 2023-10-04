import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LoginData } from '../../utils/constants';
import Logo from '../../images/logo/header_logo.svg';
import './Login.css';
import useFormValidation from '../../hooks/FormValidation';

function Login({ onLogin }) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const { values, errors, isValid, handleChange, resetValidation } = useFormValidation();

  const { email, password } = values;
  const { email: emailError, password: passwordError } = errors;

  function handleSubmit(event) {
    event.preventDefault();
    if (isValid) {
      onLogin({ email, password });
    }
    resetValidation();
  }

  // function handleChangePassword(event) {
  //   setPassword(event.target.value);
  // }

  // function handleChangeEmail(event) {
  //   setEmail(event.target.value);
  // }
  return (
    <section className="login">
      <div className="login__content">
        <Link to="/">
          <img src={Logo} alt="Логотип" className="login__logo" />
        </Link>
        <h2 className="login__title">{LoginData.title}</h2>
        <form className="login__form">
          <label htmlFor="email" className="login__label">
            {LoginData.email}
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
            className="login__input"
            required
          />
          <span className="login__input-error" id="login__email-error">
            {emailError}
          </span>
          <label htmlFor="password" className="login__label">
            {LoginData.password}
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
            className="login__input"
            required
          />
          <span className="login__input-error" id="login__password-error">
            {passwordError}
          </span>
          <button type="submit" className="login__button" onClick={onLogin}>
            {LoginData.signin}
          </button>
        </form>
        <div className="login__text">
          <p className="login__subtitle">{LoginData.question}</p>
          <Link to="/signup" className="login__link">
            {LoginData.signup}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
