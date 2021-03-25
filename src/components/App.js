import React, { useEffect } from "react";
import { mainRoutes } from "../routes/mainRoutes";
import { NavLink, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/auth/authActions";
import axios from "axios";
import { getCourseActionCreator } from "../redux/courses/actions";

const App = ({ isAuth, logout, getCourseActionCreator }) => {
  useEffect(() => {
    axios
      .get("https://myproject-d33c4-default-rtdb.firebaseio.com/courses.json")
      .then(({ data }) =>
        getCourseActionCreator(
          Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        )
      );
  }, []);
  return (
    <div>
      <ul className='navigationList'>
        {mainRoutes.map(({ name, path, exact, restricted }) => {
          return (
            <>
              {isAuth && !restricted && (
                <li key={path}>
                  <NavLink to={path} exact={exact}>
                    {name}
                  </NavLink>
                </li>
              )}
              {!isAuth && restricted && (
                <li key={path}>
                  <NavLink to={path} exact={exact}>
                    {name}
                  </NavLink>
                </li>
              )}
              {!isAuth && !restricted && (
                <li key={path}>
                  <NavLink to={path} exact={exact}>
                    {name}
                  </NavLink>
                </li>
              )}
            </>
          );
        })}
        {isAuth && (
          <button type='button' onClick={logout}>
            Logout
          </button>
        )}
      </ul>
      <Switch>
        {mainRoutes.map(({ path, exact, component }) => (
          <Route path={path} exact={exact} key={path} component={component} />
        ))}
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.idToken,
  };
};

export default connect(mapStateToProps, { logout, getCourseActionCreator })(App);
