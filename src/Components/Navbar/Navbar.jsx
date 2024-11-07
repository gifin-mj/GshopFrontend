import React from "react";
import "./Navbar.css";
import logo from "../Assets/Admin_Assets/nav-logo.svg";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo}></img>
      </div>

      <ul className="navmenu">
        <li>Home </li>
        <li> Men </li>
        <li> Women</li>
        <li> Kids </li>
      </ul>
    </div>
  );
}

export default Navbar;
