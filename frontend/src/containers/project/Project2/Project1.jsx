import React from "react";
import './project1.css'; // Import your existing CSS
import CPU from '../../../assets/Cache.jpg';

const project1 = ({ title, description, imageUrl, githubLink }) => {
  const parallaxStyle = {
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${CPU})`,
    
  };

  return (
    <div className="project1-container">
         <div className="project1-details">
      <a href="https://github.com/Chawewo/Cache-Sim" target="_blank" rel="noopener noreferrer">
        
        <button >VitaMatch</button>
        </a>
        <p>This project is a C++ program simulating a simplified CPU cache hierarchy (L1, L2, and L3) and calculates the total number of CPU cycles required for accessing a series of memory addresses. The cache hierarchy follows a Least Recently Used (LRU) replacement policy which means items are organized in order of use, allowing us to identify which item has been used the most/least. The simulator accounts for cache misses and hits at each level before resorting to main memory to which the final output is the total number of CPU cycles used for all memory accesses.
            </p>
      </div>
      <div className="project1-image" style={parallaxStyle} />
     
    </div>
  );
};

export default project1;

