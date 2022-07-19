import React from "react";
import "./navbar.css";
import Logo from "./logo.svg";
import { Outlet ,Link } from "react-router-dom";
import { Fragment } from "react";
import { Cart } from "../cart/cart";
import { Cartdropdown } from "../cartdropdown/cartdropdown";
export const Navbar = () => {
  return (
    <Fragment>
      <nav className="container">
        <Link className="nav-link" to= './' >
          <div className="title-container">
            <img src={Logo} className="title-logo" alt="Logo" />
            <h1 className="title-name">Le Khalil Le Cookies</h1>
          </div>
        </Link>

                  <ul className="nav-items active">
                    
                    <Link className="nav-link" to= './contactus' >
                      <li className="nav-item">Contact us</li>
                    </Link>

                  <Link className="nav-link" to= './whoarewe' >
                  <li className="nav-item">Who Are We </li>
                  </Link>
                  <Link className="nav-link" to= './Signinpage' >
                  <li className="nav-item">SignIn</li>
                  </Link>
                  <li className="nav-item">
                  <Cart />
                  </li>
                  
                  </ul>
                  <div className="hamburger" >
                    <span className="bar" ></span>
                    <span className="bar" ></span>
                    <span className="bar" ></span>
                  </div>
      </nav>
    </Fragment>
  );
};
