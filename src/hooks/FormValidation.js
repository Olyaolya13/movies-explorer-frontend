// import { useState, useCallback, useEffect } from 'react';
// import { emailPattern } from '../utils/pattern';

// const useFormValidation = initialValues => {
//   const [value, setValue] = useState(initialValues || {});
//   const [error, setError] = useState({});
//   const [isValid, setIsValid] = useState(false);
//   const [isInputValid, setIsInputValid] = useState({});

//   const validateField = (name, value) => {
//     let errorMessage = '';

//     switch (name) {
//       case 'name':
//         if (value.length < 2 || value.length > 30) {
//           errorMessage = 'Имя должно содержать от 2 до 30 символов';
//         }
//         break;
//       case 'email':
//         if (!emailPattern.test(value)) {
//           errorMessage = 'Введите корректный email: ya@ya.ru';
//         }
//         break;
//       case 'password':
//         if (value.length < 6) {
//           errorMessage = 'Пароль должен содержать минимум 6 символов';
//         }
//         break;
//       case 'search':
//         if (value.length < 2) {
//           errorMessage = 'Нужно ввести ключевое слово';
//         }
//         break;
//       default:
//         break;
//     }

//     return errorMessage;
//   };

//   const handleChange = evt => {
//     const { name, value } = evt.target;
//     const errorMessage = validateField(name, value);

//     setValue(obj => ({
//       ...obj,
//       [name]: value
//     }));

//     setError(err => ({
//       ...err,
//       [name]: errorMessage
//     }));
//     setIsInputValid(obj => ({
//       ...obj,
//       [name]: !errorMessage
//     }));

//     setIsValid(
//       Object.values(isInputValid).every(valid => valid) &&
//         Object.values(error).every(err => !err) &&
//         Object.values(value).every(val => !!val)
//     );
//   };
//   // useEffect(() => {
//   //   const formIsValid =
//   //     Object.keys(error).every(key => !error[key]) &&
//   //     Object.values(isInputValid).every(valid => valid) &&
//   //     value.name &&
//   //     value.email &&
//   //     value.password;
//   //   setIsValid(formIsValid);
//   // }, [error, value, isInputValid]);

//   useEffect(() => {
//     const isInput = Object.values(isInputValid).every(valid => valid);
//     const isErrorsEmpty = Object.values(error).every(err => !err);
//     const isFormFieldsNotEmpty = !!value.name && !!value.email && !!value.password;
//     const formIsValid = isInput && isErrorsEmpty && isFormFieldsNotEmpty;
//     setIsValid(formIsValid);
//   }, [error, value, isInputValid]);

//   const resetValidation = useCallback(() => {
//     setValue(initialValues || {});
//     setError({});
//     setIsValid(false);
//   }, [initialValues]);

//   return {
//     value,
//     error,
//     isValid,
//     isInputValid,
//     handleChange,
//     resetValidation
//   };
// };

// export default useFormValidation;

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
      case 'search':
        if (value.length < 2) {
          errorMessage = 'Нужно ввести ключевое слово';
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
