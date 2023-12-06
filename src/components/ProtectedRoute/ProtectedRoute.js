import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...props }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return isLoggedIn ? <Component {...props} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
