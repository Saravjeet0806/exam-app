import React from 'react';
import './ContactUs.css'; // Import the CSS file for styling

import linkedinIcon from './linkedin.png';
import githubIcon from './github.png';
import instagramIcon from './instagram.png';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-links">
        <div className="contact-link">
          <a href="https://www.linkedin.com/in/saravjeetsingh08/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="" />    
          </a>
        </div>
        <div className="contact-link">
          <a href="https://github.com/Saravjeet0806" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="" />
          </a>
        </div>
        <div className="contact-link">
          <a href="https://www.instagram.com/saravjeet_rathore/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="" />       
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
