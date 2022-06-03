import React from "react";
import "./navbar.css";
import Logo from "./logo.svg";

export const Navbar = () => {
  return (
    <nav className="container">
      <div className="title-container">
        <img src={Logo} className="title-logo" alt="Logo" />
        <h1 className="title-name">Le Khalil Le Cookies</h1>
      </div>

      <ul className="nav-items">
        <li className="nav-item">Contact us</li>
        <li className="nav-item">Who Are We </li>
      </ul>
    </nav>
  );
};
