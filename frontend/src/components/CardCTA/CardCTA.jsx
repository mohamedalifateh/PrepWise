import React from "react";
import { Link } from "react-router-dom";
import "./CardCTA.css";
import robot from "../../assets/robot.png"; // Adjust path if needed

const CardCTA = () => {
  return (
    <section className="card-cta">

      <div className="card-cta-content">
        <h2>
          Get Interview-Ready with AI-Powered Practice & Feedback
        </h2>

        <p>
          Practice real interview questions and get instant AI-powered
          feedback to improve your confidence.
        </p>

        <Link to="/interview" className="btn-primary">
          Start an Interview
        </Link>
      </div>

      <div className="card-cta-image">
        <img src={robot} alt="Robot" />
      </div>

    </section>
  );
};

export default CardCTA;