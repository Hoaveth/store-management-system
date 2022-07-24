import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./styles/Navbar.css";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container navContainer">
        <Link className="navbar-brand" to={"/sign-in"}>
          Store Management System
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          {!isAuthenticated && (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>
                  Sign up
                </Link>
              </li>
            </ul>
          )}
          {isAuthenticated && (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
