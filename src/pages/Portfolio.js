 import React from 'react';
 import Project from './Project';
 
 const projects = [
   { title: 'Project 1', image: '/path-to-image1.jpg', deployed: 'https://deployed-link1.com', github: 'https://github.com/dylan-slyter/project1' },
   { title: 'Project 2', image: '/path-to-image2.jpg', deployed: 'https://deployed-link2.com', github: 'https://github.com/dylan-slyter/project2' },
   // Add 4 more projects
 ];
 
 const Portfolio = () => {
   return (
     <section>
       <h2>Portfolio</h2>
       {projects.map((project, index) => (
         <Project key={index} project={project} />
       ))}
     </section>
   );
 }; 
 export default Portfolio;