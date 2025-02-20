import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Navpage = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo">
          Portfolio
        </NavLink>
        <div className="nav-links">
          <NavLink to="/">About</NavLink> {/* Corrected path */}
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navpage;
