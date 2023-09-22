import { useState } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';

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
          <Header />
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
