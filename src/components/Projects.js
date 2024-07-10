// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <a href="https://ojds2022.github.io/goat_calorie_tracker/" target="_blank" rel="noopener noreferrer" className="project-item">
          <h3>Project 1</h3>
          <p>Goat Calorie Tracker</p>
          
        </a>
        <a href="https://agile-anchorage-91815-86c9ccb72548.herokuapp.com/products" target="_blank" rel="noopener noreferrer" className="project-item">
          <h3>Project 2</h3>
          <p>Goat Ecom website</p>
       
        </a>
      </div>
    </section>
  );
};

export default Projects;
