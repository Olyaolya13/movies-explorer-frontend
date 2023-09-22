import { useState } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Navigation from '../Navigation/Navigation';
import Movies from '../Movies/Movies';

function App() {
  const location = useLocation();

  const isRegisterPage =
    location.pathname === '/signup' ||
    location.pathname === '/signin' ||
    location.pathname === '/profile';

  // check isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {!isRegisterPage && (
        <div>
          <Navigation />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/"
          element={
            <ProtectedRoute
              element={Navigation}
              // isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movies" element={<Movies />} />
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
