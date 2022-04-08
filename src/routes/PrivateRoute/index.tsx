import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isAuth = false;
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};
