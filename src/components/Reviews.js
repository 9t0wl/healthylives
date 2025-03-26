// Reviews.js
import React from "react";
import ReviewForm from "./ReviewForm";
import "./Reviews.css";

function Reviews() {
  const doctors = [
    {
      id: 1,
      name: "Dr. John Doe",
      specialty: "Cardiology",
      reviewGiven: false,
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      specialty: "Dermatology",
      reviewGiven: true,
    },
  ];

  return (
    <div className="reviews-section">
      <h2>Reviews</h2>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Doctor Name</th>
            <th>Doctor Specialty</th>
            <th>Provide Review</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>
                <button>Give Review</button>
              </td>
              <td>{doctor.reviewGiven ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReviewForm />
    </div>
  );
}

export default Reviews;
