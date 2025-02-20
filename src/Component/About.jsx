import React from "react";
import "./Nav.css";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Project";
import Skills from "./Skill";

const About = () => {
  const openResume = () => {
    window.open("public/my resume.jpg", "_blank");
  };

  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <p className="about-greeting">Hello, My name is</p>
            <h1 className="about-name">Aryan Rawat</h1>
            <h2 className="about-title">WEB DEVELOPER</h2>
            <p className="about-description">
              I design, build, and maintain websites, ensuring functionality,
              user experience, and performance across various devices and
              browsers.
            </p>
            <p className="about-description">
              Open for work and collaborations.
            </p>
            <button className="resume-btn" onClick={openResume}>
              Resume
            </button>
          </div>
          <div className="about-image">
            <img src="public/aryan rwt 1 copy.jpg" alt="Profile" />
          </div>
        </div>
      </section>
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
};

export default About;
