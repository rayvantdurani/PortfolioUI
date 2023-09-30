import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <React.Fragment>
      <div className="header_container">
        <div className="name_div">
          <h1 className="name_heading">R.Durani</h1>
        </div>

        <div className="header_menu_container">
          <nav className="menu_nav">
            <NavLink to="/" className="menu_options">
              Home
            </NavLink>
            <NavLink to="/AboutMe" className="menu_options">
              About Me
            </NavLink>
            <NavLink to="/SKills" className="menu_options">
              Skills
            </NavLink>
            <NavLink to="/ContactMe" className="menu_options">
              Contact Me
            </NavLink>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
