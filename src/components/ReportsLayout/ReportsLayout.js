import React from "react";
import "./ReportsLayout.css";

const ReportsLayout = () => {
  // Sample data for reports
  const reports = [
    {
      serialNumber: 1,
      doctorName: "Dr. John Doe",
      doctorSpeciality: "Cardiology",
      viewReport: "/report/1", // Replace with actual report URLs
      downloadReport: "/download/1", // Replace with actual download URLs
    },
    {
      serialNumber: 2,
      doctorName: "Dr. Jane Smith",
      doctorSpeciality: "Dermatology",
      viewReport: "/report/2", // Replace with actual report URLs
      downloadReport: "/download/2", // Replace with actual download URLs
    },
    // Add more reports as needed
  ];

  return (
    <div className="reports-layout">
      <h2>Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.serialNumber}>
              <td>{report.serialNumber}</td>
              <td>{report.doctorName}</td>
              <td>{report.doctorSpeciality}</td>
              <td>
                <a
                  href={report.viewReport}
                  className="view-button"
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "8px 12px",
                    textDecoration: "none",
                    borderRadius: "4px",
                    marginRight: "10px",
                  }}
                >
                  View Report
                </a>
              </td>
              <td>
                <a
                  href={report.downloadReport}
                  className="download-button"
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "8px 12px",
                    textDecoration: "none",
                    borderRadius: "4px",
                  }}
                >
                  Download Report
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;
