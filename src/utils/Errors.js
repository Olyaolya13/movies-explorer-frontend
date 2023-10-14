export const handleRegistrationError = err => {
  if (err) {
    if (err === 409) {
      return 'Пользователь с таким email уже существует';
    } else {
      return 'При регистрации пользователя произошла ошибка';
    }
  }
  return;
};
