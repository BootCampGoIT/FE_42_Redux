import React, { Suspense } from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authActions";
import { NavigationContainer } from "./NavigationStyled";
import NavigationItem from "./navigationItem/NavigationItem";
import { Switch } from "react-router-dom";

const Navigation = () => {
  const isAuth = useSelector((state) => state.auth.idToken);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <ul className='navigationList'>
        {mainRoutes.map((route) => (
          <NavigationItem key={route.path} {...route} isAuth={isAuth} />
        ))}

        <li>
          {isAuth && (
            <button type='button' onClick={() => dispatch(logout())}>
              Logout
            </button>
          )}
        </li>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
