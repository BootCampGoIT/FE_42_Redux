import React from "react";
import { Switch, Route } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";

const Main = () => {
  return (
    <Switch>
      {mainRoutes.map(({ path, exact, component }) => (
        <Route path={path} exact={exact} key={path} component={component} />
      ))}
    </Switch>
  );
};

export default Main;
