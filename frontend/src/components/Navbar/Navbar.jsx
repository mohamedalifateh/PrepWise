import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/logo.svg";
import "./Navbar.css";
import Button from "../ui/Button/button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";
  const isLoggedIn = !!localStorage.getItem("access_token");

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="PrepWise Logo" width={38} height={38} />
        <h2 className="text-primary-100">PrepWise</h2>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to={isLoggedIn ? "/home" : "/"} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/feedback" onClick={() => setMenuOpen(false)}>
            Feedback
          </Link>
        </li>

        <li>
          <Link to="/connect" onClick={() => setMenuOpen(false)}>
            Connect
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
        </li>
      </ul>

      <div className="navbar-middle">
        <input
          type="text"
          placeholder="Search..."
          className="search-box"
        />
      </div>


      <div className="navbar-right">
        {!isLoginPage && !isSignupPage && (
          isLoggedIn ? (
            <Button
              variant="secondary"
              size="md"
              onClick={() => {
                localStorage.removeItem("access_token");
                setMenuOpen(false);
                navigate("/");
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                setMenuOpen(false);
                navigate("/login");
              }}
            >
              Login
            </Button>
          )
        )}
        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;