import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, element: Component }) => {
  return isLoggedIn ? <Component /> : <Navigate to="/404" />;
};

export default ProtectedRoute;
