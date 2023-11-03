import React from "react";
import './project.css'; // Import your existing CSS
import Cache from '../../assets/CPU.jpg';

const Project = ({ title, description, imageUrl, githubLink }) => {
  const parallaxStyle = {
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${Cache})`,
    
  };

  return (
    <div className="project-container">
      <div className="project-image" style={parallaxStyle} />
      <div className="project-details">
      <a href="https://github.com/Chawewo/Cache-Sim" target="_blank" rel="noopener noreferrer">
        <button >Cache Simulator</button>
        </a>
        <p>This project is a C++ program simulating a simplified CPU cache hierarchy (L1, L2, and L3) and calculates the total number of CPU cycles required for accessing a series of memory addresses. The cache hierarchy follows a Least Recently Used (LRU) replacement policy which means items are organized in order of use, allowing us to identify which item has been used the most/least. The simulator accounts for cache misses and hits at each level before resorting to main memory to which the final output is the total number of CPU cycles used for all memory accesses.
            </p>
      </div>
    </div>
  );
};

export default Project;


/*import React from "react";
import './project.css'; // import your css
import Cache from '../../assets/CPU.jpg';

const Project = () => {
    const projects = [
        {
            title: "Cache Simulator",
            description: "This project is a C++ program simulating a simplified CPU cache hierarchy (L1, L2, and L3) and calculates the total number of CPU cycles required for accessing a series of memory addresses. The cache hierarchy follows a Least Recently Used (LRU) replacement policy which means items are organized in order of use, allowing us to identify which item has been used the most/least. The simulator accounts for cache misses and hits at each level before resorting to main memory to which the final output is the total number of CPU cycles used for all memory accesses.",
            imageUrl: Cache,
            githubLink: "https://github.com/Chawewo/Cache-Sim"
        },
        
        {
            title: "",
            description: "This is a description of Project 2",
            imageUrl: "/path/to/image2.jpg",
            githubLink: "https://github.com/yourusername/project2"
        },*/ /*
    ];

    return (
        <div>
            {projects.map((project, index) => (
                <div key={index} className="project-container">
                    <div className="project" style={{backgroundImage: `url(${project.imageUrl})`}}></div>
                    <div className="project-content">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="button">{project.title}</a>
                    </div>
                    <div className={`project-description-card`}>
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Project;
*/
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