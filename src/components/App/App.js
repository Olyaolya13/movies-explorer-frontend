import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
import { useState } from 'react';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isRegisterPage =
    location.pathname === '/signup' ||
    location.pathname === '/signin' ||
    location.pathname === '/profile';

  const handleIsLoggedIn = () => {
    setIsLoggedIn(true);
    navigate('/', { replace: true });
    console.log(isLoggedIn);
  };

  const handleIsLoggedOut = () => {
    setIsLoggedIn(false);
    navigate('/', { replace: true });
    console.log(isLoggedIn);
  };

  return (
    <>
      {!isRegisterPage && (
        <div>{!isLoggedIn ? <Header isLoggedIn={isLoggedIn} /> : <Navigation />}</div>
      )}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile onLoggedOut={handleIsLoggedOut} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login onlogin={handleIsLoggedIn} />} />
      </Routes>
      {!isRegisterPage && (
        <div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
