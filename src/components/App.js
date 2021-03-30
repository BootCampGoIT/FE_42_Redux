import React, { useEffect } from "react";
import { mainRoutes } from "../routes/mainRoutes";
import { NavLink, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/auth/authActions";
import axios from "axios";
import { getCourseActionCreator } from "../redux/courses/actions";
import Header from "./header/Header";

const App = ({  getCourseActionCreator }) => {
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
      <Header />

      <Switch>
        {mainRoutes.map(({ path, exact, component }) => (
          <Route path={path} exact={exact} key={path} component={component} />
        ))}
      </Switch>
    </div>
  );
};

export default connect(null, {  getCourseActionCreator })(App);
