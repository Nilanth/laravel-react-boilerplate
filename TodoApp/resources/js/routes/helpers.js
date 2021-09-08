// Private route restrict to access public pages after login.
import {Redirect, Route} from 'react-router-dom';

export function PrivateRoute({children, isAuthenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={({location}) =>
        (isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {from: location},
            }}
          />
        ))
      }
    />
  );
}

// Public route restrict to access authenticated pages before login.
export function PublicRoute({children, isAuthenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={
        ({location}) =>
          (!isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/dashboard',
                state: {from: location},
              }}
            />
          ))
      }
    />
  );
}
