// Private route restrict to access public pages after login.
import {Navigate, useLocation} from 'react-router-dom';

export function PrivateRoute({children, isAuthenticated}) {
  const location = useLocation();

  if (isAuthenticated) {
    return children;
  }

  return (
    <Navigate
      to="/login"
      replace
      state={{from: location}}
    />
  );
}

// Public route restrict to access authenticated pages before login.
export function PublicRoute({children, isAuthenticated}) {
  const location = useLocation();

  if (!isAuthenticated) {
    return children;
  }

  return (
    <Navigate
      to="/dashboard"
      replace
      state={{from: location}}
    />
  );
}
