import React from "react";
import "./Nav.css";



const Skills = () => {
  const skills = [
    {
      name: "HTML",
      logo: "public/5847f5bdcef1014c0b5e489c.png",
    },
    {
      name: "CSS",
      logo: "public/CSS3.png",
    },
    {
      name: "Javascript",
      logo: "public/JavaScript.png",
    },
    {
      name: "React Js",
      logo: "public/react.png",
    },
    {
      name: "SQL",
      logo: "public/555.png",
    },
    {
      name: "Bootstrap",
      logo: "public/Bootstrap.png",
    },
    {
      name: "Github",
      logo: "public/GitHub.png",
    },
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h1>Skills</h1>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
