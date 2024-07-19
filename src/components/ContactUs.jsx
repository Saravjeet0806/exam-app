import React from 'react';
import './ContactUs.css'; // Import the CSS file for styling



const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-links">
        <div className="contact-link">
          <a href="https://www.linkedin.com/in/saravjeetsingh08/" target="_blank" rel="noopener noreferrer">
            <img src={linkedIcon} alt="LinkedIn" />
            LinkedIn
          </a>
        </div>
        <div className="contact-link">
          <a href="https://github.com/Saravjeet0806" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
            GitHub
          </a>
        </div>
        <div className="contact-link">
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
            <img src={instaIcon} alt="Instagram" />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
