 import React from 'react';
 
 const Project = ({ project }) => {
   return (
     <div>
       <h3>{Dylan-slyter}</h3>
       <img src={project.image} alt={project.title} />
       <a href={project.deployed} target="Deploy" rel="Deploy">View Deployed</a>
       <a href={project.github} target="Git" rel="GitHub">GitHub Repository</a>
     </div>
   );
 };
 
 export default Project;