import React, { useState } from "react";
import "./Nav.css"; // Assuming this is correct

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: "Digital Clock",
      description:
        "A digital clock displays time in a numeric format, ensuring precise, easy-to-read, and modern timekeeping compared to traditional analog clocks.",
      technologies: "HTML, CSS, JavaScript",
      image: "/digital clock.jpg", // Corrected image path
      link: "https://github.com/luckyrawat75/stop-watch.git",
      likes: 0,
    },
    {
      title: "Portfolio",
      description:
        "A personal portfolio website showcasing web development projects and skills. Built with React JS and Tailwind CSS, it also includes contact information for potential job opportunities..",
      technologies: "React,css",
      image: "/myportflo.png", // Corrected image path
      link: "http://localhost:5173/",
      likes: 0,
    },
    {
      title: "MEME Generator",
      description:
        "Our meme generator project creates fun and creative memes easily by adding custom text to images, perfect for sharing laughs!",
      technologies: "React, API, CSS",
      image: "/memes generator.png", // Corrected image path
      link: "https://github.com/luckyrawat75/joke-Generator-using-React.git",
      likes: 0,
    },
    {
      title: "Coming Soon Page",
      description:
        "Our coming soon page builds excitement, collects visitor emails, shares updates, and offers a countdown to our project launch.",
      technologies: "HTML, CSS, JavaScript",
      image: "/comeing soon page.jpg", // Corrected image path
      link: "https://github.com/luckyrawat75/Coming-Soon-Page-Generator-.git",
      likes: 0,
    },
    {
      title: "Healthy Food Website",
      description:
        "Our healthy food website provides nutritious recipes, meal plans, wellness tips, and promotes mindful eating for a healthier lifestyle.",
      technologies: "HTML, CSS, JavaScript",
      image: "/healthy food.png", // Corrected image path
      link: "#",
      likes: 0,
    },
  ]);

  const handleLikeClick = (index) => {
    const updatedProjects = [...projects];
    updatedProjects[index].likes += 1;
    setProjects(updatedProjects);
  };

  return (
    <div className="projects-section">
      <h1 className="top">Projects</h1>
      {projects.map((project, index) => (
        <div
          className={`project-card ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
      
          <div className="project-details">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p className="technologies">{project.technologies}</p>
            <div className="project-actions">
              <button
                className="like-button"
                onClick={() => handleLikeClick(index)}
              >
                Like ❤️ {project.likes}
              </button>
              <a href={project.link} target="_blank" className="view-project">
                View Project
              </a>
            </div>
          </div>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
