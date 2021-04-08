import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ path, exact, component }) => {
  const isAuth = useSelector((state) => state.auth.idToken);
  return isAuth ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to='/signin' />
  );
};

export default PrivateRoute;
