import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useFormValidation from '../../hooks/FormValidation';
import './AuthForm.css';
import Logo from '../../images/logo/header_logo.svg';

function AuthForm(props) {
  const AuthFormData = {
    name: 'Имя',
    email: 'E-mail',
    password: 'Пароль'
  };

  const { value, error, isValid, handleChange, resetValidation } = useFormValidation();

  useEffect(() => {
    if (isValid) {
      props.setError('');
    }
  }, [isValid, props]);

  // ...

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      props.onSubmit(value);
      resetValidation();
    }
  }

  return (
    <section className="form__section">
      <div className="form__content">
        <Link to="/">
          <img src={Logo} alt="Логотип" className="register__logo" />
        </Link>
        <h2 className="form__title">{props.title}</h2>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <label className="form__label">
            {AuthFormData.name}
            <input
              name="name"
              type="text"
              onChange={handleChange}
              value={value.name}
              placeholder="Введите имя"
              minLength={2}
              maxLength={30}
              className={`form__input ${error.name ? 'form__input-text-error' : ''}`}
              required
            />
            <span className={`form__input-error ${error.name ? 'form__input-error_visible' : ''}`}>
              {error.name}
            </span>
          </label>
          <label className="form__label">
            {AuthFormData.email}
            <input
              name="email"
              type="email"
              onChange={handleChange}
              value={value.email}
              placeholder="Введите email"
              className={`form__input ${error.email ? 'form__input-text-error' : ''}`}
              required
            />
            <span className={`form__input-error ${error.email ? 'form__input-error_visible' : ''}`}>
              {error.email}
            </span>
          </label>
          <label className="form__label">
            {AuthFormData.password}
            <input
              name="password"
              type="password"
              onChange={handleChange}
              value={value.password}
              placeholder="Введите пароль"
              minLength={6}
              maxLength={30}
              className={`form__input ${error.password ? 'form__input-text-error' : ''}`}
              required
            />
            <span
              className={`form__input-error ${error.password ? 'form__input-error_visible' : ''}`}
            >
              {error.password}
            </span>
          </label>

          <div className="form__container">
            <span className="form__error-message">{props.error}</span>
            <button
              className={`form__button ${isValid ? '' : 'form__button_disabled'}`}
              type="submit"
              disabled={!isValid}
            >
              {props.buttonText}
            </button>
            <div className="form__text">
              <p className="form__subtitle">
                {props.subtitle}
                <Link className="form__link" to={props.link}>
                  {props.linkText}
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AuthForm;
