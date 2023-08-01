import React from 'react';
import styles from "../styles/Testimonials.css"
const Testimonials = () => {
  // Sample testimonial data
  const testimonials = [
    {
      name: 'John Doe',

      comment: '"The doctor was very professional and caring. I had a great experience."'
    },
    {
      name: 'Jane Smith',

      comment: '"The staff was friendly, and the doctor explained everything clearly."'
    },
    {
      name: 'Dan Harris',
      comment: '"Her dedication and hard work were evident and greatly appreciated"'
    }
  ];

  return (
    <div className='testimonials-section'>
      <h2>Success Stories</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <p className="testimonial-comment">{testimonial.comment}</p>
            <div className="testimonial-info">
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-designation">{testimonial.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
