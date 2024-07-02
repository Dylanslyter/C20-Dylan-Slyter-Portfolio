import React from 'react';
import Project from './Project';
import './Portfolio.css';

const projects = [
  {
    name: 'PWAs',
    description: 'A website that offers a chance to download a PWA.',
    link: 'https://github.com/Dylanslyter/19-DS-PWA-s.git',
  },
  {
    name: 'Taskinator',
    description: 'A task-tracker application.',
    link: 'https://github.com/Dylanslyter/Daily-task-maker.git',
  },
    {
        name: 'Logo-creator',
        description: 'Create logos with SVGs.',
        link: 'https://github.com/Dylanslyter/SVG-logo-creator'
    },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
};

export default Portfolio;
