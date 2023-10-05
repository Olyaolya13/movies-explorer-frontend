import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { NotFound } from '../../utils/pattern';
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

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [IsRegister, setIsRegister] = useState(false);

  const isRegisterPage =
    location.pathname === '/signup' ||
    location.pathname === '/signin' ||
    location.pathname === '/profile';

  const isNotFoundPage = NotFound(location.pathname);

  const handleIsLoggedIn = () => {
    navigate('/', { replace: true });
    setIsLoggedIn(true);
  };

  const handleIsLoggedOut = () => {
    setIsLoggedIn(false);
    navigate('/', { replace: true });
  };

  const handleIsRegister = () => {
    setIsRegister(true);
    navigate('/signin', { replace: true });
  };

  return (
    <>
      {!isRegisterPage && !isNotFoundPage && (
        <div>{!isLoggedIn ? <Header isLoggedIn={isLoggedIn} /> : <Navigation />}</div>
      )}
      <div className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile onLoggedOut={handleIsLoggedOut} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/signup" element={<Register onRegister={handleIsRegister} />} />
          <Route path="/signin" element={<Login onLogin={handleIsLoggedIn} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      {!isRegisterPage && !isNotFoundPage && (
        <div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
