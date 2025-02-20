import React from "react";
import "./Nav.css";

const Education = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <h1>Education</h1>
      </div>

      <div className="education-grid">
        <div className="education-card">
          <h2 className="degree">10th - UK Board</h2>
          <p className="year">2018-2019</p>
          <p className="grade">Percentage - 70.4%</p>
          <p className="school">G.I.C. BHAGWATI TALLIYA</p>
        </div>

        <div className="education-card">
          <h2 className="degree">12th - Science</h2>
          <p className="year">2020-2021</p>
          <p className="grade">Percentage - 70.6%</p>
          <p className="school">G.I.C. SYUNSI</p>
        </div>

        <div className="education-card">
          <h2 className="degree">Bachelor of Computer Application</h2>
          <p className="year">2022-2025</p>
          <p className="grade">CGPA - 7.00</p>
          <p className="school">
            HEMVATI NANDAN BAHUGUNA GARHWAL UNIVERSITY (A Central University)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
