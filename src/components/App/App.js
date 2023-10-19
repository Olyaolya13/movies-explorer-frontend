import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NotFound } from '../../utils/pattern';
import api from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import * as auth from '../../utils/Auth';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Navigation from '../Navigation/Navigation';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState('');
  const [isSend, setIsSend] = useState(false);

  // const [savedMovies, setSavedMovies] = useState([]);
  // const [checkToken, setCheckToken] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [isEdit, setIsEdit] = useState(false);

  const isRegisterPage =
    location.pathname === '/signup' ||
    location.pathname === '/signin' ||
    location.pathname === '/profile';

  const isNotFoundPage = NotFound(location.pathname);

  function handleToken(token) {
    auth
      .checkToken(token)
      .then(res => {
        setIsLoggedIn(true);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      handleToken(token);
    }
  }, []);

  function handleOnLogin({ email, password }) {
    setIsSend(true);
    setIsError('');
    return auth
      .login(email, password)
      .then(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          setIsLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch(error => {
        if (error.statusCode === 401) {
          setIsError('Неправильные почта или пароль');
        } else {
          console.log(error.statusCode);
          setIsError('При авторизации пользователя произошла ошибка');
        }
      })
      .finally(() => setIsSend(false));
  }

  function handleOnRegister({ name, password, email }) {
    setIsSend(true);
    setIsError('');
    auth
      .register(name, password, email)
      .then(res => {
        handleOnLogin({ password, email });
        return res;
      })
      .catch(error => {
        if (error.statusCode === 409) {
          setIsError('Пользователь с таким email уже существует');
        } else {
          console.log(error.statusCode);
          setIsError('При регистрации пользователя произошла ошибка');
        }
      })
      .finally(() => setIsSend(false));
  }

  //logout
  function handleLogOut() {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    navigate('/', { replace: true });
  }

  function handleUpdateUser({ email, name }) {
    const token = localStorage.getItem('token');
    api
      .editProfile({ name, email }, token)
      .then(res => {
        setCurrentUser(res);
        setIsError('');
      })
      .catch(() => {
        setIsError('Произошла ошибка при обновлении данных');
      })

      .finally(() => {
        setIsSend(false);
      });
  }

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem('token');
      Promise.all([api.getUserInfo(token)])
        .then(([userInfo]) => {
          setCurrentUser(userInfo);
          setIsLoggedIn(true);
        })
        .catch(err => {
          console.log('Ошибка при получении информации:', err);
        });
    }
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {!isRegisterPage && !isNotFoundPage && (
        <div>{!isLoggedIn ? <Header isLoggedIn={isLoggedIn} /> : <Navigation />}</div>
      )}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/signup"
          element={
            <Register
              onRegister={handleOnRegister}
              error={isError}
              setError={setIsError}
              setIsSend={setIsSend}
              isSend={isSend}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login
              onLogin={handleOnLogin}
              error={isError}
              setError={setIsError}
              setIsSend={setIsSend}
              isSend={isSend}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              isLoggedIn={true}
              element={Profile}
              onLoggedOut={handleLogOut}
              onSave={handleUpdateUser}
              error={isError}
              setError={setIsError}
              setIsSend={setIsSend}
              isSend={isSend}
            />
          }
        />
        <Route path="/movies" element={<ProtectedRoute isLoggedIn={true} element={Movies} />} />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              isLoggedIn={true}
              element={SavedMovies}
              onLoggedOut={handleLogOut}
              onSave={handleUpdateUser}
              error={isError}
              setError={setIsError}
              setIsSend={setIsSend}
              isSend={isSend}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!isRegisterPage && !isNotFoundPage && (
        <div>
          <Footer />
        </div>
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
