import React from 'react';
import '../styles/Services.css'; // Import the CSS file for this component

const Services = () => {

    //sample for services
    const services = [
        {
            title: 'General Checkup',
            description: 'Comprehensive general health checkup and consultation.',
        },
        {
            title: 'Vaccinations',
            description: 'Vaccinations for children and adults.',
        },

        {
            title: 'Pediatric Care',
            description: 'Specialized medical care for infants and children.',
        },
        {
            title: 'Women\'s Health',
            description: 'Gynecological exams and women\'s health services.',
        },
        {
            title: 'Health Screenings',
            description: 'Various health screenings and diagnostic tests.',
        },
    ];

    return (
        <div className="services-container">
            <h2 className="services-title">Our Services</h2>
            <ul className="services-list">
                {services.map((service, index) => (
                    <li className="service" key={index}>
                        <div className='service-text-container'>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                        <div className='service-icon'>icon here</div>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;
