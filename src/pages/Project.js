import React from 'react';
import './Project.css';

const Project = ({ project }) => {
  return (
    <div className="project-item">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default Project;
