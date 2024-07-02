import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="about-me-content">
        <img src="/assets/avatar.jpg" alt="Dylan Slyter" className="avatar" />
        <div className="bio">
          <p>Hello! I am Dylan Slyter, a passionate web developer. I started web design at the beginning of 2024. I have completed 20 coding homework assignments through MSU and 2 projects. I have a pet turtle, and I am 25 years old. I enjoy learning new technologies and building amazing web applications.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

