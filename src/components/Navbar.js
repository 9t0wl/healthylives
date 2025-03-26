// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">StayHealthy</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link> {/* Add Home link */}
        </li>
        <li>
          <Link to="/appointments">Appointments</Link>
        </li>
        <li>
          <a href="#">Health Blog</a>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link> {/* Add Reviews link */}
        </li>
      </ul>
      <div className="nav-buttons">
        <Link to="/signup" className="signup-btn">
          Sign Up
        </Link>
        <Link to="/login" className="login-btn">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
