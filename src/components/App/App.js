import { useState } from 'react';
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import api from '../../utils/api.js';
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
  const navigate = useNavigate();

  const isRegisterPage =
    location.pathname === '/signup' ||
    location.pathname === '/signin' ||
    location.pathname === '/profile';

  // check isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //context
  const [currentUser, setCurrentUser] = useState({});
  //cards
  const [cards, setCards] = useState([]);

  // // Handle like on a card
  // function handleMovieSaved(card) {
  //   const isLiked = card.likes.some(i => i._id === currentUser._id);
  //   {
  //     if (!isLiked) {
  //       api
  //         .addNewMovieSaved(card._id)
  //         .then(newCard => {
  //           setCards(state => state.map(c => (c._id === card._id ? newCard : c)));
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         });
  //     } else {
  //       api
  //         .removeNewMovieSaved(card._id)
  //         .then(newCard => {
  //           setCards(state => state.map(c => (c._id === card._id ? newCard : c)));
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         });
  //     }
  //   }
  // }

  // function handleConfirmDelete(card) {
  //   const token = localStorage.getItem('token');
  //   api
  //     .removeCard(card._id, token)
  //     .then(() => {
  //       setCards(state => state.filter(c => c._id !== card._id));
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

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
        {/* <Route cards={cards} onCardSaved={handleMovieSaved} onCardDeleteSaved={handleMovieSaved} /> */}
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
