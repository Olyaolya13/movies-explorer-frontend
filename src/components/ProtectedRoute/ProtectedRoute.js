import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, isLoggedIn, ...props }) => {
  return props.isLoggedIn ? <Component {...props} /> : <Navigate to="/sighin" replace />;
};

export default ProtectedRoute;
