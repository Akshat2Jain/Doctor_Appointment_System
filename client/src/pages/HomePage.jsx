import React from "react";
import "../styles/Homepage.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner"
import Testimonials from "../components/Testimonial"
import Services from "../components/Services"


const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="home-page">
        <Banner/>
        <h1>Welcome to the Doctor Appointment System</h1>
        <Testimonials/>
        <Services/>
      </div>

    </>
  );
};

export default HomePage;
