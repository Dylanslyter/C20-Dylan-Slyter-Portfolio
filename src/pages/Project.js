import React from 'react';
import './Project.css';

const Project = ({ project }) => {
  return (
    <div className="project-item">
      <img src={project.image} alt={project.name} className="project-image" />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default Project;

