import { useState, useCallback } from 'react';
import { emailPattern } from '../utils/pattern';

const useFormValidation = initialValues => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validateField = (name, value) => {
    let errorMessage = '';

    switch (name) {
      case 'name':
        if (value.length < 2 || value.length > 30) {
          errorMessage = 'Имя должно содержать от 2 до 30 символов';
        }
        break;
      case 'email':
        if (!emailPattern.test(value)) {
          errorMessage = 'Введите корректный email: ya@ya.ru';
        }
        break;
      case 'password':
        if (value.length < 8) {
          errorMessage = 'Пароль должен содержать минимум 6 символов';
        }
        break;
      default:
        break;
    }

    return errorMessage;
  };

  const handleChange = event => {
    const { name, value } = event.target;
    const errorMessage = validateField(name, value);
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: errorMessage });

    const formIsValid = Object.keys(errors).every(key => !errors[key]);
    setIsValid(formIsValid);
  };

  const resetValidation = useCallback(() => {
    setValues(initialValues || {});
    setErrors({});
    setIsValid(false);
  }, [initialValues]);

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetValidation
  };
};

export default useFormValidation;
