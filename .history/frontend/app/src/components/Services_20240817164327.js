// src/Services.js
import React from 'react';
import './Services.css'; // Import a CSS file for styling

const services = [
  {
    title: 'Web Development',
    description: 'We build responsive and dynamic websites tailored to your business needs.'
  },
  {
    title: 'Mobile App Development',
    description: 'Our team develops high-quality mobile applications for both iOS and Android platforms.'
  },
  {
    title: 'SEO Optimization',
    description: 'We provide SEO services to improve your website’s visibility on search engines.'
  },
  {
    title: 'Digital Marketing',
    description: 'Our digital marketing strategies help you reach a broader audience and grow your brand.'
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
