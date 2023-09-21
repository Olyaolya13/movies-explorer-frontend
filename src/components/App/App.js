// import logo from '../../logo.svg';
// import '../App/App.css';
import Header from '../Header/Header';
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { Routes, Route } from 'react-router-dom';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useLocation } from 'react-router-dom';
import Register from '../Register/Register'

function App() {
  const location = useLocation();

  const isRegisterPage = location.pathname === '/signup';

  return (
<>
{!isRegisterPage && (
  <div>
    <Header />
  </div>
  )}
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/signup" element={<Register/>}/>
  </Routes>
{!isRegisterPage && (
  <div>
     <Footer />
  </div>
  )}
</>

  ) ;
}

export default App;
