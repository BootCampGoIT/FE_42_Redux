import React from "react";
import Navigation from "../navigation/Navigation";
import { HeaderContainer } from "./HeaderStyled";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to='/'>
        <img src={logo} alt='logo' className="logo"/>
      </Link>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
