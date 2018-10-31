import React from 'react';
import Navbar from '../components/Navbar';
import projects from '../projects-data.js';

class Projects extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
        <div className="container">
          <h1 className="makers-title">Projects</h1>
          {
            projects.map(project => (
              <div className="project-container" key={project.id}>
                <img src={project.img} className="project-img" alt={`Logo de ${project.name}`}/>
                <div className="project-info">
                  <h2 className="project-name">{project.name}</h2>
                  <p>{project.description}</p>
                  <p>{project.contact}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Projects;
