import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css"

const Header = () => {

  return (
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/explore">Explore</NavLink></li>
      <li><NavLink to="/cart">Cart</NavLink></li>
    </ul>
  );
};

export default Header;
