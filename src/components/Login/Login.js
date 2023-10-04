import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LoginData } from '../../utils/constants';
import Logo from '../../images/logo/header_logo.svg';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }
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
            onChange={handleChangeEmail}
            className="login__input"
            required
          />
          <span className="login__error" id="login__email-error"></span>
          <label htmlFor="password" className="login__label">
            {LoginData.password}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
            className="login__input"
            required
          />
          <span className="login__error" id="login__password-error"></span>
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
