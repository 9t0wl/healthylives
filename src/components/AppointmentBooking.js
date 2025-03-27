// src/components/AppointmentBooking.js
import React from "react";
import SearchDoctor from "./SearchDoctor";
import DoctorCard from "./DoctorCard";
import SimpleInstantConsultation from "./SimpleInstantConsultation";
import "./Appointment.css";

function AppointmentBooking() {
  return (
    <div className="appointment-booking">
      <SearchDoctor />
      <div className="doctor-cards">
        <DoctorCard
          name="Dr. Jiao Yang"
          specialty="Dentist"
          experience="6"
          rating="*****"
        />
        <DoctorCard
          name="Dr. Denis Raj"
          specialty="Dentist"
          experience="24"
          rating="****"
        />
        <DoctorCard
          name="Dr. Lyn Christie"
          specialty="Dentist"
          experience="11"
          rating="****"
        />
      </div>
      <SimpleInstantConsultation />
    </div>
  );
}

export default AppointmentBooking;
