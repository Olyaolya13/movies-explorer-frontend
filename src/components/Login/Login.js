import { Link } from 'react-router-dom';
import Logo from '../../images/logo/header_logo.svg';
import './Login.css';

const LoginData = {
  title: 'Рады видеть!',
  signup: 'Регистрация',
  question: 'Ещё не зарегистрированы?',
  name: 'Имя',
  email: 'E-mail',
  password: 'Пароль',
  signin: 'Войти'
};

function Login({ email, password }) {
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
            className="login__input"
            required
          />
          <span className="login__error" id="register__email-error"></span>
          <label htmlFor="password" className="login__label">
            {LoginData.password}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            className="login__input"
            required
          />
          <span className="login__error" id="register__password-error"></span>
          <Link to="/movies">
            <button type="submit" className="login__button">
              {LoginData.signin}
            </button>
          </Link>
        </form>
        <div>
          <p className="register__subtitle">
            {LoginData.question}{' '}
            <Link to="/signup" className="login__link">
              {LoginData.signup}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
