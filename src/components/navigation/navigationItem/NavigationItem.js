import React from "react";
import { NavLink } from "react-router-dom";


const NavigationItem = ({ restricted, path, exact, name, isAuth }) => {

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
};

export default NavigationItem;
