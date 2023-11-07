import { createContext } from 'react';

const CurrentUserContext = createContext();

export default CurrentUserContext;

// import { createContext } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { NotFound } from '../utils/pattern';
// import api from '../utils/MainApi';
// import * as auth from '../utils/Auth';

// export const CurrentUserContext = createContext({});

// export const CurrentUserProvider = ({ children }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [currentUser, setCurrentUser] = useState({});
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isError, setIsError] = useState('');
//   const [isSend, setIsSend] = useState(false);

//   // const isRegisterPage =
//   //   location.pathname === '/signup' ||
//   //   location.pathname === '/signin' ||
//   //   location.pathname === '/profile';

//   // const isNotFoundPage = NotFound(location.pathname);

//   //Получение токена и проброс в локальное хранилище
//   function handleToken(token) {
//     auth
//       .checkToken(token)
//       .then(res => {
//         setIsLoggedIn(true);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       handleToken(token);
//     }
//   }, []);

//   function handleLogOut() {
//     setIsLoggedIn(false);
//     localStorage.clear();
//     localStorage.removeItem('token');
//     navigate('/', { replace: true });
//   }
//   //   function handleSignOut() {
//   //     setCurrentUser(null);
//   //     setApiErrMsg('');
//   //     localStorage.removeItem('jwt');
//   //     localStorage.removeItem('searchKeyword');
//   //     localStorage.removeItem('isChecked');
//   //     localStorage.removeItem('movies');
//   //     localStorage.removeItem('savedMoviesIsChecked');
//   //     window.scrollTo(0, 0);
//   //   }

//   function handleOnLogin({ email, password }) {
//     setIsSend(true);
//     setIsError('');
//     return auth
//       .login(email, password)
//       .then(res => {
//         if (res.token) {
//           console.log(res.token);
//           localStorage.setItem('token', res.token);
//           setIsLoggedIn(true);
//           navigate('/movies', { replace: true });
//         }
//       })
//       .catch(error => {
//         if (error.statusCode === 401) {
//           setIsError('Неправильные почта или пароль');
//         } else {
//           console.log(error.statusCode);
//           setIsError('При авторизации пользователя произошла ошибка');
//         }
//       })
//       .finally(() => setIsSend(false));
//   }

//   function handleOnRegister({ name, password, email }) {
//     setIsSend(true);
//     setIsError('');
//     auth
//       .register(name, password, email)
//       .then(res => {
//         handleOnLogin({ password, email });
//         return res;
//       })
//       .catch(error => {
//         if (error.statusCode === 409) {
//           setIsError('Пользователь с таким email уже существует');
//         } else {
//           console.log(error.statusCode);
//           setIsError('При регистрации пользователя произошла ошибка');
//         }
//       })
//       .finally(() => setIsSend(false));
//   }

//   function handleUpdateUser({ email, name }) {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       setIsLoggedIn(false);
//       return;
//     }
//     api
//       .editProfile({ name, email }, token)
//       .then(res => {
//         setCurrentUser(res);
//         setIsError('');
//       })
//       .catch(error => {
//         if (error.statusCode === 409) {
//           setIsError('Пользователь с таким email уже существует');
//         } else {
//           console.log(error.statusCode);
//           setIsError('Произошла ошибка при обновлении данных');
//         }
//       })
//       .finally(() => {
//         setIsSend(false);
//       });
//   }
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (isLoggedIn && token) {
//       Promise.all([api.getUserInfo(token)])
//         .then(([userInfo]) => {
//           setCurrentUser(userInfo);
//         })
//         .catch(err => {
//           console.log('Ошибка при получении информации:', err);
//         });
//     }
//   }, [isLoggedIn]);

//   return (
//     <CurrentUserContext.Provider
//       value={{
//         currentUser,
//         // isRegisterPage,
//         // isNotFoundPage,
//         isLoggedIn,
//         handleOnRegister,
//         isError,
//         setIsError,
//         setIsSend,
//         isSend,
//         handleOnLogin,
//         handleLogOut,
//         handleUpdateUser
//       }}
//     >
//       {children}
//     </CurrentUserContext.Provider>
//   );
// };

// export default CurrentUserProvider;
