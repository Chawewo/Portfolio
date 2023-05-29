// ../frontend/assets/Headshot.jpg
import React from "react";
import './project.css'; // import your css
import Headshot from '../../assets/Headshot.jpg';

const Project = () => {
    const projects = [
        {
            title: "Project 1",
            description: "This is a description of Project 1",
            imageUrl: Headshot,
            githubLink: "https://github.com/yourusername/project1"
        },
        {
            title: "Project 2",
            description: "This is a description of Project 2",
            imageUrl: "/path/to/image2.jpg",
            githubLink: "https://github.com/yourusername/project2"
        },
        // add more projects here
    ];

    return (
        <div>
            {projects.map((project, index) => (
                <div key={index} className="project-container">
                    <div className="project" style={{backgroundImage: `url(${project.imageUrl})`}}></div>
                    <div className="project-content">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="button">{project.title}</a>
                    </div>
                    <div className="project-description-card">
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Project;

/*
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

export default Project; */