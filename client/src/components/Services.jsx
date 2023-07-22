import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <ul>
        <li>General Checkup</li>
        <li>Specialized Treatments</li>
        <li>Vaccinations</li>
        {/* Add more services */}
      </ul>
    </div>
  );
};

export default Services;
