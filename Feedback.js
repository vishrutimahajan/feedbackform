
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FeedbackForm({ addFeedback }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("Select");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && course !== "Select" && feedback) {
      addFeedback({ name, course, feedback });
      setName("");
      setCourse("Select");
      setFeedback("");
      alert("Feedback submitted!");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Enter Your Course:
          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="Select">Select</option>
            <option value="React JS">React JS</option>
            <option value="Data Administration">Data Administration</option>
            <option value="Node JS">Node JS</option>
          </select>
        </label>
        <br />
        <h4>Provide Your Feedback in detail:</h4>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows="5"
          cols="50"
        ></textarea>
        <br />
        <button type="submit">Submit</button>
        <br />
        <Link to="/submissions">
          <button type="button">View Submissions</button>
        </Link>
      </form>
    </div>
  );
}
