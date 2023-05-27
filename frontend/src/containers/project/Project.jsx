import './project.css';
import React, { useState } from 'react';

const projects = [
  {
  id: 1,
  title: "Cache-Sim",
  description: "This is a cache simulator",
  date: "2023-05-24",
  link: "#",
  image: "path to image"
  }
];

function ProjectItem({ project, onProjectClick, isSelected, onClose }) {
  const className = `project ${isSelected ? 'project-selected' : ''}`;

  return (
    <div className={className} onClick={() => onProjectClick(project)}>
      {isSelected && <button onClick={onClose} className="close-button">X</button>}
      <img src={project.image} alt={project.title} className="project-image" />
      <h2>{project.title}</h2>
      {isSelected && <p>{project.description}</p>}
    </div>
  );
}

function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setSelectedProject(null);
  };

  return (
    <div className="projects">
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          project={project}
          onProjectClick={handleProjectClick}
          isSelected={project === selectedProject}
          onClose={handleClose}
        />
      ))}
    </div>
  );
}

const Project = () => {
  return (
    <div className="project-timeline">
      <Projects projects={projects} />
    </div>
  );
};

export default Project;