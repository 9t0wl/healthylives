// src/components/SimpleInstantConsultation.js
import React, { useState } from "react";
import "./SimpleInstantConsultation.css"; // Create this CSS file

function SimpleInstantConsultation() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [appointment, setAppointment] = useState(null);

  const handleStartConsultation = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAppointment({ name, phoneNumber });
    setShowForm(false);
  };

  const handleCancelAppointment = () => {
    setAppointment(null);
  };

  return (
    <div className="simple-consultation-container">
      <h2>Instant Consultation</h2>
      <p>Doctor: Dr. Example Name</p>
      <p>Specialty: Example Specialty</p>

      {!showForm && !appointment && (
        <button onClick={handleStartConsultation}>Start Consultation</button>
      )}

      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <button type="submit">Book Now</button>
        </form>
      )}

      {appointment && (
        <div className="appointment-details">
          <h3>Appointment Booked!</h3>
          <p>Name: {appointment.name}</p>
          <p>Phone: {appointment.phoneNumber}</p>
          <button onClick={handleCancelAppointment}>Cancel Appointment</button>
        </div>
      )}
    </div>
  );
}

export default SimpleInstantConsultation;
