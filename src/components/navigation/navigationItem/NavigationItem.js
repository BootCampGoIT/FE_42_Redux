import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = ({
  isPrivate,
  restricted,
  path,
  exact,
  name,
  isAuth,
}) => {
  return (
    <>
      {isAuth && !restricted && isPrivate && (
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
      {!isAuth && !isPrivate && restricted && (
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
      {!isPrivate && !restricted && (
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
};

export default NavigationItem;
