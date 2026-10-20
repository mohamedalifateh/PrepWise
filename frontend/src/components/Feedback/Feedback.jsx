import React, { useState } from "react";
import "./Feedback.css";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";

// Initial Feedback Data
const initialFeedbacks = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineering Applicant",
    avatar: avatar1,
    text: "PrepWise completely changed my interview prep! The AI mock interviews felt so realistic, and the instant feedback helped me catch my filler words and improve response structure.",
    likes: 12,
    liked: false,
    color: "yellow", // Options: yellow, purple, blue, green, pink
    rotation: -1.8,
  },
  {
    id: 2,
    name: "Mark Davis",
    role: "Product Manager Candidate",
    avatar: avatar2,
    text: "The tailored behavioral questions were spot-on. I used to freeze during situational questions, but after practicing 5 rounds on PrepWise, I aced my actual interview!",
    likes: 24,
    liked: false,
    color: "purple",
    rotation: 2.2,
  },
  {
    id: 3,
    name: "Dr. James Carter",
    role: "Data Science Lead",
    avatar: avatar3,
    text: "An incredible tool for technical and soft skills evaluation. The platform gives actionable tips on tone, clarity, and keyword coverage. Highly recommend to all job seekers!",
    likes: 31,
    liked: false,
    color: "blue",
    rotation: -2.5,
  },
];

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState(initialFeedbacks);
  const [showForm, setShowForm] = useState(false);
  const [newFeedback, setNewFeedback] = useState({
    name: "",
    role: "",
    text: "",
  });

  // Handle Like Toggle
  const handleLike = (id) => {
    setFeedbacks((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            likes: item.liked ? item.likes - 1 : item.likes + 1,
            liked: !item.liked,
          };
        }
        return item;
      })
    );
  };

  // Handle New Sticky Note Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newFeedback.text || !newFeedback.name) return;

    const colors = ["yellow", "purple", "blue", "green", "pink"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRot = (Math.random() * 6 - 3).toFixed(1); // Random angle between -3deg and +3deg

    const newNote = {
      id: Date.now(),
      name: newFeedback.name,
      role: newFeedback.role || "PrepWise User",
      avatar: avatar1, // Default fallback avatar
      text: newFeedback.text,
      likes: 0,
      liked: false,
      color: randomColor,
      rotation: parseFloat(randomRot),
    };

    setFeedbacks([newNote, ...feedbacks]);
    setNewFeedback({ name: "", role: "", text: "" });
    setShowForm(false);
  };

  return (
    <div className="feedbackContainer">
      <div className="feedbackContent">
        <div className="feedbackHeader">
          <h2 className="feedbackTitle">Community Feedback</h2>
          <p className="feedbackSubtitle">
            Sticky notes from candidates who aced their interviews with <span>PrepWise</span>.
          </p>
          <button
            className="addNoteBtn"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cancel" : "✍️ Post a Sticky Note"}
          </button>
        </div>

        {/* Optional Add Note Form */}
        {showForm && (
          <form className="newNoteForm" onSubmit={handleSubmit}>
            <h3>Leave Your Feedback</h3>
            <input
              type="text"
              placeholder="Your Name *"
              value={newFeedback.name}
              onChange={(e) =>
                setNewFeedback({ ...newFeedback, name: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Your Role / Target Job (e.g. Frontend Dev)"
              value={newFeedback.role}
              onChange={(e) =>
                setNewFeedback({ ...newFeedback, role: e.target.value })
              }
            />
            <textarea
              placeholder="Write your experience with PrepWise... *"
              rows="3"
              value={newFeedback.text}
              onChange={(e) =>
                setNewFeedback({ ...newFeedback, text: e.target.value })
              }
              required
            ></textarea>
            <button type="submit" className="postBtn">
              Stick It On Board 📌
            </button>
          </form>
        )}

        {/* Sticky Notes Grid */}
        <div className="stickyGrid">
          {feedbacks.map((item) => (
            <div
              key={item.id}
              className={`stickyNote ${item.color}`}
              style={{ transform: `rotate(${item.rotation}deg)` }}
            >
              {/* Decorative Tape Element */}
              <div className="stickyTape"></div>

              {/* 2. Feedback Text (MIDDLE) */}
              <div className="stickyText">“{item.text}”</div>

              {/* 1. Profile Picture (ON TOP) */}
              <div className="stickyAvatarContainer">
                <img src={item.avatar} alt={item.name} className="stickyAvatar" />
              </div>

              {/* 3. Name of the user (BELOW TEXT) */}
              <h3 className="stickyName">{item.name}</h3>

              {/* 4. Bottom Bar: Description on Left & Like Button on Right */}
              <div className="stickyFooter">
                <p className="stickyRole">{item.role}</p>

                {/* LIKE BUTTON (BOTTOM RIGHT) */}
                <button
                  type="button"
                  className={`likeBtn ${item.liked ? "liked" : ""}`}
                  onClick={() => handleLike(item.id)}
                  title="Like feedback"
                >
                  <svg
                    className="heartIcon"
                    viewBox="0 0 24 24"
                    fill={item.liked ? "#ff4d6d" : "none"}
                    stroke={item.liked ? "#ff4d6d" : "currentColor"}
                    strokeWidth="2"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="likeCount">{item.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;