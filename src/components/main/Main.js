import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";
import { MainContainer } from "./MainStyled";

const Main = () => {
  return (
    <MainContainer>
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoute {...route} key={route.path} />
            ) : (
              <PublicRoute {...route} key={route.path} />
            )
            // <Route path={path} exact={exact} key={path} component={component} />
          )}
        </Switch>
      </Suspense>
    </MainContainer>
  );
};

export default Main;
