// src/components/InstantBooking.js
import React, { useState } from "react";
import "./InstantBooking.css";

function InstantBooking({ name, specialty, experience, rating }) {
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const handleBookNow = (e) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const handleCancelAppointment = () => {
    setIsBooked(false);
    setUserName("");
    setPhoneNumber("");
  };

  return (
    <div className="instant-booking-card">
      <div className="doctor-info">
        <h3>{name}</h3>
        <p>{specialty}</p>
        <p>{experience} years experience</p>
        <p>Ratings: {rating}</p>
      </div>

      {!isBooked ? (
        <form onSubmit={handleBookNow}>
          <input
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
      ) : (
        <div className="booking-confirmation">
          <h3>Appointment Booked!</h3>
          <p>Name: {userName}</p>
          <p>Phone Number: {phoneNumber}</p>
          <button onClick={handleCancelAppointment}>Cancel Appointment</button>
        </div>
      )}
    </div>
  );
}

export default InstantBooking;
