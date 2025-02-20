import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "../Component/About";
import Skills from "../Component/Skill";
import Projects from "../Component/Project";
import Education from "../Component/Education";
import Contact from "../Component/Contact";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routing;
