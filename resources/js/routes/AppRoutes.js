import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {PrivateRoute, PublicRoute} from '../routes/helpers';
import ProtectedRoutes from '../routes/ProtectedRoutes';

const LoginPage = lazy(() => import('../components/LoginPage'));
const Registration = lazy(() => import('../components/Register'));

export function AppRoutes({isAuthenticated}) {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute isAuthenticated={isAuthenticated}>
                <LoginPage/>
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute isAuthenticated={isAuthenticated}>
                <LoginPage/>
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute isAuthenticated={isAuthenticated}>
                <Registration/>
              </PublicRoute>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <ProtectedRoutes/>
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}
