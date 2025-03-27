// src/components/DoctorCard.js
import React from "react";
import "./Appointment.css";

function DoctorCard({ name, specialty, experience, rating, onBook }) {
  return (
    <div className="doctor-card">
      <h3>{name}</h3>
      <p>{specialty}</p>
      <p>{experience} years experience</p>
      <p>Rating: {rating}</p>
      <button onClick={onBook}>Book Appointment</button> {/* Added onClick */}
      <p>No Booking Fee</p>
    </div>
  );
}

export default DoctorCard;
