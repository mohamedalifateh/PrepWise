import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import robot from "../../assets/robot.png";
import logo from "../../assets/logo.svg";
import "./Signup.css";
import api from "../../api/api";

const Signup = () => {
  const navigate = useNavigate();
  const [isTurning, setIsTurning] = useState(false);
  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await api.post("/users", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      alert("Account created successfully!");
      navigate("/login");

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.detail || "Signup failed");
    }
  };

  const handleNavigateToLogin = () => {
    setIsTurning(true); // Trigger 3D flip-out animation on the card only
    setTimeout(() => {
      navigate("/login"); // Navigate after animation completes
    }, 600); // Matches CSS transition duration
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signup-page">
      <div className="auth-container">
        
        {/* ROBOT SECTION (Stays Still) */}
        <div className="robot-section">
          <img
            src={robot}
            alt="PrepWise Robot"
            className="robot-image"
          />
        </div>

        {/* SIGNUP CARD CONTAINER (Animates Only) */}
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
                  Join <span>PrepWise</span>
                </h1>

                <p className="auth-description">
                  Create your account and start practicing.
                </p>

                {/* Signup Form */}
                <form onSubmit={handleSubmit}>
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Minimum 8 characters"
                    minLength="8"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    minLength="8"
                    value={formData.confirmPassword || ""}
                    onChange={handleChange}
                    required
                  />

                  {/* Resume Upload Input */}
                  {/* <label htmlFor="resume">Resume (PDF, DOC, DOCX)</label> */}
                  {/* <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                  /> */}

              

                  <button type="submit" className="submit-btn">
                    Sign Up
                  </button>
                </form>

                {/* Bottom Link */}
                <p className="bottom-text">
                  Already have an account?
                  <button type="button" onClick={handleNavigateToLogin}>
                    Login
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

export default Signup;