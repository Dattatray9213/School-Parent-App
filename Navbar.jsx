vimport React, { useState } from "react";

import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/circular">Circular</NavLink>
        </li>
        <li>
          <NavLink to="/holidayList">Holiday List</NavLink>
        </li>
        <li>
          <NavLink to="/feeDetails">FeeDetails</NavLink>
        </li>
      </ul>
      <ul>
        {/* <li>
          <NavLink to="/login">Log In</NavLink>
        </li> */}
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/circular">Circular</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/holidayList">Holiday List</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/feeDetails">Fee Details</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/login">Log In</NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">Register</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top custom-navbar">
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/circular">Circular</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/holidayList">Holiday List</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/feeDetails">Fee Details</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/login">Log In</NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">Register</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

.custom-navbar {
  width: 100%; /* or a fixed width like 1200px if you want it fixed to a specific size */
  max-width: 1200px; /* or the fixed width */
  margin: 0 auto; /* centers the navbar */
  left: 0;
  right: 0;
}

body {
  padding-top: 56px; /* Adjust this value if your navbar height is different */
}
