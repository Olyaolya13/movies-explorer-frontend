import AuthForm from '../AuthForm/AuthForm';

function Register(props) {
  return (
    <AuthForm
      onSubmit={props.onRegister}
      error={props.error}
      setError={props.setError}
      title={'Добро пожаловать!'}
      btnText={'Зарегистрироваться'}
      subtitle={'Уже зарегистрированы?'}
      link={'/signin'}
      linkText={'Войти'}
      setIsSend={props.setIsSend}
      isSend={props.isSend}
      isRegistration={true}
    />
  );
}

export default Register;
