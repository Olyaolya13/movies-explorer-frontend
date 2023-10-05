import { Link } from 'react-router-dom';
import { LoginData } from '../../utils/constants';
import Logo from '../../images/logo/header_logo.svg';
import './Login.css';
import useFormValidation from '../../hooks/FormValidation';

function Login({ onLogin }) {
  const { values, errors, isValid, handleChange, resetValidation } = useFormValidation();

  const { email, password } = values;
  const { email: emailError, password: passwordError } = errors;

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!isValid) {
      onLogin({ email, password });
    }
    resetValidation();
  }
  return (
    <section className="login">
      <div className="login__content">
        <Link to="/">
          <img src={Logo} alt="Логотип" className="login__logo" />
        </Link>
        <h2 className="login__title">{LoginData.title}</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="login__label">
            {LoginData.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="Введите е-mail"
            minLength="6"
            maxLength="20"
            onChange={handleChange}
            className={`login__input ${emailError ? 'login__input-text-error' : ''}`}
            required
          />
          <span className={`login__input-error ${emailError ? 'login__input-error_visible' : ''}`}>
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
            minLength="6"
            maxLength="20"
            onChange={handleChange}
            className={`login__input ${passwordError ? 'login__input-text-error' : ''}`}
            required
          />
          <span
            className={`login__input-error ${passwordError ? 'login__input-error_visible' : ''}`}
          >
            {passwordError}
          </span>
          <button type="submit" className="login__button">
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
