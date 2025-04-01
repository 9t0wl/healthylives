// src/components/Navbar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { AuthContext } from "../AuthContext";

function Navbar() {
  const { isLoggedIn, handleLogout } = useContext(AuthContext); // Get handleLogout

  return (
    <nav className="navbar">
      <div className="logo">StayHealthy</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/appointments">Appointments</Link>
        </li>
        <li>
          <a href="#">Health Blog</a>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
      </ul>
      <div className="nav-buttons">
        {isLoggedIn ? (
          <LogoutButton onLogout={handleLogout} /> // Pass handleLogout as prop
        ) : (
          <>
            <Link to="/signup" className="signup-btn">
              Sign Up
            </Link>
            <Link to="/login" className="login-btn">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
