import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

const SignInPage = React.lazy(() => import(/* webpackChunkName: "home", webpackPrefech: true */ 'pages/auth/signin'));
const SignUnPage = React.lazy(() => import(/* webpackChunkName: "home", webpackPrefech: true */ 'pages/auth/signup'));
const HomePage = React.lazy(() => import(/* webpackChunkName: "home", webpackPrefech: true */ 'pages/auth/app/home'));

const LoadingRoutesComponent = () => <p>loading...</p>;

const MyRoutes = () => (
  <Suspense fallback={<LoadingRoutesComponent />}>
    <Routes>
      {/* Auth routes */}
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUnPage />} />

      {/* Private routes */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />

      {/* No routes matched location */}
      <Route
        path="*"
        element={
          <PrivateRoute>
            <Navigate to="/home" />
          </PrivateRoute>
        }
      />
    </Routes>
  </Suspense>
);

export default MyRoutes;
