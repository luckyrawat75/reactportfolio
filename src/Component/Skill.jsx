import React from "react";
import "./Nav.css";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      logo: "/5847f5bdcef1014c0b5e489c.png",
    },
    {
      name: "CSS",
      logo: "/CSS3.png",
    },
    {
      name: "Javascript",
      logo: "/JavaScript.png",
    },
    {
      name: "React Js",
      logo: "/react.png",
    },
    {
      name: "SQL",
      logo: "/555.png",
    },
    {
      name: "Bootstrap",
      logo: "/Bootstrap.png",
    },
    {
      name: "Github",
      logo: "/GitHub.png",
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
