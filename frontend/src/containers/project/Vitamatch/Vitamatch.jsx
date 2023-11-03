import React from "react";
import './vitamatch.css'; // Import your existing CSS
import NVita from '../../../assets/NVita.jpg';

const Vitamatch = ({ title, description, imageUrl, githubLink }) => {
  const parallaxStyle = {
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${NVita})`,
    
  };

  return (
    <div className="vitamatch-container">
    <div className="vitamatch-details">
    <a href="https://github.com/JeremiahHerring/VitaminApp" target="_blank" rel="noopener noreferrer">
     <button >Vitamatch</button>
    </a>
      <p>
        This project is a web program simulating a simplified CPU cache hierarchy (L1, L2, and L3) and calculates the total number of CPU cycles required for accessing a series of memory addresses. The cache hierarchy follows a Least Recently Used (LRU) replacement policy which means items are organized in order of use, allowing us to identify which item has been used the most/least. The simulator accounts for cache misses and hits at each level before resorting to main memory to which the final output is the total number of CPU cycles used for all memory accesses.
      </p>
    </div>
      <div className="vitamatch-image" style={parallaxStyle} />
    </div>
  );
};
export default Vitamatch;
