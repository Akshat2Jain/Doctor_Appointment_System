import React from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <span className="navbar-logo">HealthHub</span>
        </div>
        <div className="navbar-right">
          <ul className="navbar-links">
            <li className="navbar-link" onClick={() => navigate("/")}>
              <span>Home</span>
            </li>
            <li className="navbar-link" onClick={() => navigate("/login")}>
              <span>Login</span>
            </li>
            <li className="navbar-link" onClick={() => navigate("/register")}>
              <span>Sign Up</span>
            </li>
            <li className="navbar-link"onClick={() => navigate("/contsct-us")}>Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
