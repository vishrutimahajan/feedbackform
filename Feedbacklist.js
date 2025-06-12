import React from "react";
import { Link } from "react-router-dom";

function Feedbackslist({ feedbacks }) {
  return (
    <div>
      <h2>Feedback Submissions</h2>
      {feedbacks.map((fb, i) => (
        <div key={i}>
          <p>{fb.comment}</p>
       
        </div>
      ))}
    </div>
  );
}

export default Feedbackslist;
