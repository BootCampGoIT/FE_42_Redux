import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ path, exact, component, restricted }) => {
  const isAuth = useSelector((state) => state.auth.idToken);
  return isAuth && restricted ? (
    <Redirect to='/products' />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoute;
