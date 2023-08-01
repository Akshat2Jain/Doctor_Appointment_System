import React from "react";
import "../styles/Homepage.css";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonial";
import Services from "../components/Services";
import Banner from "../components/Banner";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="home-page">
        <h1>Welcome to the Doctor Appointment System</h1>
      </div>

    </>
  );
};

export default HomePage;
