
import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <>
      <h1>Welcome Student!</h1>
      <h4>Click on the link below to fill the feedback form:</h4>
      <nav>
        <li>
          <Link to="/feedback">Feedback Form</Link>
        </li>
      </nav>
    </>
  );
};

export default Home;
