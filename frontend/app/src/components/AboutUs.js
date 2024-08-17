// src/AboutUs.js
import React from 'react';
import './AboutUs.css'; // Import the updated CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>[Your Company Name]</strong>! We are a team of passionate professionals dedicated to delivering exceptional services and solutions. Our mission is to provide high-quality products and services that meet the needs of our clients and exceed their expectations.
        </p>
      </header>
      <section className="about-us-story">
        <h2>Our Story</h2>
        <p>
          [Your Company Name] was founded in [Year] with a vision to make a difference in the [Industry/Field]. Since then, we have been committed to innovation, excellence, and customer satisfaction. Our team consists of experienced experts who work tirelessly to achieve our goals and drive success for our clients.
        </p>
      </section>
      <section className="about-us-values">
        <h2>Our Values</h2>
        <ul>
          <li>Integrity: We conduct our business with honesty and transparency.</li>
          <li>Innovation: We embrace new ideas and technologies to stay ahead.</li>
          <li>Customer Focus: We put our clients' needs at the center of everything we do.</li>
          <li>Excellence: We strive for the highest quality in all our work.</li>
        </ul>
      </section>
      <section className="about-us-team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <img src="https://via.placeholder.com/120" alt="John Doe" className="team-member-img" />
          <div className="team-member-info">
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
            <p>John leads the team with his extensive experience in [Field/Industry] and a passion for innovation.</p>
          </div>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/120" alt="Jane Smith" className="team-member-img" />
          <div className="team-member-info">
            <h3>Jane Smith</h3>
            <p>Chief Technology Officer</p>
            <p>Jane oversees the technical aspects of our projects, ensuring cutting-edge solutions and high performance.</p>
          </div>
        </div>
        {/* Add more team members as needed */}
      </section>
    </div>
  );
};

export default AboutUs;
