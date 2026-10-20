import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import robot from "../../assets/robot.png";
import "./Login.css";
import api from "../../api/api";


const Login = () => {
  const navigate = useNavigate();
  const [isTurning, setIsTurning] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = new FormData();

    form.append("username", loginData.username);
    form.append("password", loginData.password);

    try {
      const response = await api.post("/users/token", form);

      localStorage.setItem(
        "access_token",
        response.data.access_token
      );

      alert("Login Successful!");

      navigate("/home");

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.detail || "Login failed");
    }
  };

  const handleNavigateToSignup = () => {
    setIsTurning(true); // Trigger 3D flip-out animation on the card only
    setTimeout(() => {
      navigate("/signup"); // Navigate after animation completes
    }, 600); // Matches CSS transition duration
  };

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
  setLoginData({
    ...loginData,
    [e.target.name]: e.target.value,
  });
};

  return (
    <div className="auth-page">
      <div className="auth-container">
        
        {/* ROBOT SECTION (Stays Still) */}
        <div className="robot-section">
          <img
            src={robot}
            alt="PrepWise Robot"
            className="robot-image"
          />
        </div>

        {/* AUTH CARD CONTAINER (Animates Only) */}
        <div className={`auth-card-container ${isTurning ? "turning-out" : "turning-in"}`}>
          <div className="auth-card">
            <div className="auth-side">
              <div className="auth-content">
                
                {/* Logo */}
                <div className="auth-logo">
                  <img src={logo} alt="PrepWise" />
                </div>

                {/* Heading */}
                <h1>
                  Welcome to <span>PrepWise</span>
                </h1>

                <p className="auth-description">
                  AI-powered mock interviews to ace your dream job.
                </p>

                {/* Login Form */}
                <form onSubmit={handleLogin}>
                  <label htmlFor="login-email">Email</label>
                  <input
                    id="login-email"
                    name="username"
                    type="email"
                    placeholder="Enter your email"
                    value={loginData.username}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="login-password">Password</label>
                  <input
                    id="login-password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                  />

                  <button type="submit" className="submit-btn">
                    Login
                  </button>
                </form>

                {/* Bottom Navigation Link */}
                <p className="bottom-text">
                  Don't have an account?
                  <button type="button" onClick={handleNavigateToSignup}>
                    Sign Up
                  </button>
                </p>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;