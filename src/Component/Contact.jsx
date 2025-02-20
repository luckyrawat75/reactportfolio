import React from "react";
import "./Nav.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact</h1>
      </div>

      <div className="contact-content">
        <div className="connect-section">
          <h2>Let's Connect</h2>
          <p>Thank you for visiting my personal portfolio website.</p>
          <p>Connect with me over socials.</p>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/aryan-rawat-a4b957268"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
            <a href="mailto:rawataryan616@gmail.com" className="social-link">
              Email
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="contact-info">
          <h2>Contact Info</h2>
          <div className="info-item">
            <span>+91 8171902597</span>
          </div>
          <div className="info-item">
            <span>rawataryan616@gmail.com</span>
          </div>
          <div className="info-item">
            <span>Dehradun Uttarakhand, India</span>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>
          Designed by <span className="designer">Aryan Rawat</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
