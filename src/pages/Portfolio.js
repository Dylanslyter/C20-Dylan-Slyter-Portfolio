import React from 'react';
import Project from './Project';
import './Portfolio.css';
const projects = [
    {
      name: 'PWAs',
      description: 'A website that offers a chance to download a PWA.',
      link: 'https://github.com/Dylanslyter/19-DS-PWA-s.git',
      image: '/assets/pwa.jpg'
    },
    {
      name: 'Taskinator',
      description: 'A task-tracker application.',
      link: 'https://github.com/Dylanslyter/Daily-task-maker.git',
      image: '/assets/Task.jpg'
    },
    {
      name: 'Logo-creator',
      description: 'Create logos with SVGs.',
      link: 'https://github.com/Dylanslyter/SVG-logo-creator',
      image: '/assets/logomaker.jpg'
    },
    {
      name: 'Weather-Dashboard',
      description: 'A weather dashboard.',
      link: 'https://github.com/Dylanslyter/weather-application.git',
      image: '/assets/weather.jpg'
    },
    {
      name: 'README.md-Tool',
      description: 'A README.md creator.',
      link: 'https://github.com/Dylanslyter/README.md-Tool.git',
      image: '/assets/readme.jpg'
    },
    {
      name: 'Pokémon-deck-builder',
      description: 'A Pokémon deck builder.',
      link: 'https://github.com/Dylanslyter/Pok-mon-deck-builder.git',
      image: '/assets/pokemon.jpg'
    }
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
