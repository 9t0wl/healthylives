// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import AppointmentBooking from "./components/AppointmentBooking"; // Import AppointmentBooking

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/appointments" element={<AppointmentBooking />} />{" "}
          {/* Add AppointmentBooking route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
