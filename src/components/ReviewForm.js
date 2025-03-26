// ReviewForm.js
import React, { useState } from "react";
import "./Reviews.css";

function ReviewForm() {
  const [patientName, setPatientName] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h2>Write a Review</h2>
      <label htmlFor="patientName">Patient Name:</label>
      <input
        type="text"
        id="patientName"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
      />
      <label htmlFor="feedback">Feedback:</label>
      <textarea
        id="feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      ></textarea>
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
