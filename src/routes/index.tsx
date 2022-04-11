import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { Loading } from 'componets/Loading/loading.component';

const SignInPage = React.lazy(() => import(/* webpackChunkName: "home", webpackPrefech: true */ 'pages/auth/signin'));
const SignUnPage = React.lazy(() => import(/* webpackChunkName: "home", webpackPrefech: true */ 'pages/auth/signup'));
const HomePage = React.lazy(() => import(/* webpackChunkName: "home", webpackPrefech: true */ 'pages/app/home'));

const MyRoutes = () => (
  <Suspense fallback={<Loading />}>
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
