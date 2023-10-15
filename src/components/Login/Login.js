import AuthForm from '../AuthForm/AuthForm';

function Login(props) {
  return (
    <AuthForm
      onSubmit={props.onLogin}
      error={props.error}
      setError={props.setError}
      title={'Рады видеть!'}
      buttonText={'Войти'}
      subtitle={'Ещё не зарегистрированы?'}
      link={'/signup'}
      linkText={'Регистрация'}
      setIsSend={props.setIsSend}
      isSend={props.isSend}
    />
  );
}

export default Login;
