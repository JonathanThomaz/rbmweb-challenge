import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from 'redux/root-store';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};
