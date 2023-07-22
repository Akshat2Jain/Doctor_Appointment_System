import React from "react";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import "../styles/Homepage.css";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <h1>Welcome to the Doctor Appointment System</h1>
        <Services />
        <Testimonials />
      </div>
    </>
  );
};

export default HomePage;
