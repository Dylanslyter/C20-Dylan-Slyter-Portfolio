import React from 'react';
import './Resume.css';

const Resume = () => {

  return (
    <section className="resume">
      <h2>Resume</h2>
      <a
        href="/assets/resume.pdf"
        download
      >
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Git</li>
      </ul>
      <div id="resume-image-container">
        <img src="/assets/resume.jpg" alt="Resume" className="resume-image" />
      </div>
    </section>
  );
};

export default Resume;


