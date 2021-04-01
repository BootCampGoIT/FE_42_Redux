import React, { useEffect } from "react";
import { mainRoutes } from "../routes/mainRoutes";
import { NavLink, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/auth/authActions";
import axios from "axios";
// import { getCourseActionCreator } from "../redux/courses/actions";
import Header from "./header/Header";
import { getCoursesOperation } from "../redux/courses/operation";

const App = ({ getCoursesOperation }) => {
  useEffect(() => {
    getCoursesOperation();
  }, []);

  return (
    <div>
      <Header />

      <Switch>
        {mainRoutes.map(({ path, exact, component }) => (
          <Route path={path} exact={exact} key={path} component={component} />
        ))}
      </Switch>
    </div>
  );
};

export default connect(null, { getCoursesOperation })(App);
