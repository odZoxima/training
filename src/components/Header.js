import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css"

const Header = (props) => {

  return (
    <ul>
      <li onClick={() => props.setText("Home")}><NavLink to="/">Home</NavLink></li>
      <li onClick={() => props.setText("Explore")}><NavLink to="/explore">Explore</NavLink></li>
      <li onClick={() => props.setText("Cart")}><NavLink to="/cart">Cart</NavLink></li>
    </ul>
  );
};

export default Header;
