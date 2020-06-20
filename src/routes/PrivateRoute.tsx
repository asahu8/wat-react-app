import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({component, ...rest}: any) => {
  const { isUserLoggedIn } = useContext(AuthContext);
  const routeComponent = (props: any) => (
    isUserLoggedIn()
      ? React.createElement(component, props)
      : <Redirect to={{pathname: '/login'}}/>
  );
  return <Route {...rest} render={routeComponent}/>;
};

export default PrivateRoute;