// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import AppointmentBooking from "./components/AppointmentBooking";
import Reviews from "./components/Reviews";
import { AuthProvider } from "./AuthContext"; // Import AuthProvider

function App() {
  return (
    <AuthProvider>
      {" "}
      {/* Wrap your Router with AuthProvider */}
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/appointments" element={<AppointmentBooking />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
