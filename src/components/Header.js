import React from "react";
import "./Header.css";
import Logo from "../assets/OIP.jpeg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="path" className="logo">
        <img src={Logo} alt="" />
        <span>Vegito Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
      <span>Cart: 2</span>
      </Link>
    </header>
  );
};

export default Header;
