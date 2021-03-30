import React from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authActions";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = () => {
  const isAuth = useSelector((state) => state.auth.idToken);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      <ul className='navigationList'>
        {mainRoutes.map(({ name, path, exact, restricted }) => {
          return (
            <>
              {isAuth && !restricted && (
                <li key={path} className='navigationListItem'>
                  <NavLink
                    to={path}
                    exact={exact}
                    className='navigationLink'
                    activeClassName='activeNavigationLink'>
                    {name}
                  </NavLink>
                </li>
              )}
              {!isAuth && restricted && (
                <li key={path} className='navigationListItem'>
                  <NavLink
                    to={path}
                    exact={exact}
                    className='navigationLink'
                    activeClassName='activeNavigationLink'>
                    {name}
                  </NavLink>
                </li>
              )}
              {!isAuth && !restricted && (
                <li key={path} className='navigationListItem'>
                  <NavLink
                    to={path}
                    exact={exact}
                    className='navigationLink'
                    activeClassName='activeNavigationLink'>
                    {name}
                  </NavLink>
                </li>
              )}
            </>
          );
        })}
        {isAuth && (
          <button type='button' onClick={() => dispatch(logout())}>
            Logout
          </button>
        )}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
