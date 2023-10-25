import { useState, useCallback } from 'react';
import { emailPattern, namePattern } from '../utils/pattern';

const useFormValidation = () => {
  const [value, setValue] = useState({});
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validateField = (name, value) => {
    let errorMessage = '';

    switch (name) {
      case 'name':
        if (value.length < 2 || value.length > 30 || !namePattern.test(value)) {
          errorMessage = 'Введите от 2 до 30 символов: Ivan,Иван,И-ван, И_ван';
        }
        break;

      case 'email':
        if (!emailPattern.test(value)) {
          errorMessage = 'Введите корректный email: ya@ya.ru';
        }
        break;
      case 'password':
        if (value.length < 6) {
          errorMessage = 'Пароль должен содержать минимум 6 символов';
        }
        break;
      default:
        break;
    }

    return errorMessage;
  };

  const handleChange = evt => {
    const { name, value, form } = evt.target;
    const errorMessage = validateField(name, value);

    setValue(obj => ({
      ...obj,
      [name]: value
    }));
    setError(err => ({
      ...err,
      [name]: errorMessage
    }));

    setIsValid(form.checkValidity());
  };

  const resetValidation = useCallback(initialValues => {
    setValue(initialValues || {});
    setError({});
    setIsValid(false);
  }, []);

  return {
    value,
    error,
    isValid,
    handleChange,
    resetValidation
  };
};

export default useFormValidation;
