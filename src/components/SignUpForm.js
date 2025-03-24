// src/components/SignUpForm.js
import React, { useState } from "react";
import "./SignUpForm.css"; // Verify this import

function SignUpForm() {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Added success message state

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (replace console.log)
    console.log("Form submitted:", { role, name, email, password });
    setSuccessMessage("Sign up successful!"); // Set success message

    // Clear form fields
    setRole("");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}{" "}
      {/* Display success message */}
    </div>
  );
}

export default SignUpForm;
