
import React from "react";
import { Link } from "react-router-dom";

function FeedbacksList({ feedbacks }) {
  return (
    <div>
      <h2>Feedback Submissions</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        feedbacks.map((fb, i) => (
          <div key={i}>
            <p><strong>Name:</strong> {fb.name}</p>
            <p><strong>Course:</strong> {fb.course}</p>
            <p><strong>Feedback:</strong> {fb.feedback}</p>
            <hr />
          </div>
        ))
      )}
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default FeedbacksList;
