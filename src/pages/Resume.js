import React from 'react';
import './Resume.css'; // Import the CSS file

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="/path-to-resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Git</li>
      </ul>
    </section>
  );
};

export default Resume;
