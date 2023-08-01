import React from "react";
import "../styles/Homepage.css";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonial";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="home-page">
        <h1>Welcome to the Doctor Appointment System</h1>
      </div>
      <Testimonials/>
    </>
  );
};

export default HomePage;
