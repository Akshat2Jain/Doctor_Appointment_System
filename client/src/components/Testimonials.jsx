import React from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="testimonial">
        <p>
          "I had a great experience with the doctor. He was very knowledgeable
          and caring."
        </p>
        <p className="author">- John Doe</p>
      </div>
      {/* Add more testimonials */}
    </div>
  );
};

export default Testimonials;
