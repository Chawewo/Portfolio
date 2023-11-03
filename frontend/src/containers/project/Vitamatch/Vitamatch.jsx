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
      Vitamatch is a project I'm incredibly proud to be part of. Our team, consisting of five talented individuals, came together to create a web application that harnesses the power of MySQL, JavaScript, React, Node.js, and Express.js. With Vitamatch, users can input their health and dietary details to receive personalized vitamin supplement recommendations. Vitamatch simplifies the complex process of choosing the right supplements, making it easier for individuals to make informed decisions about their health.
      </p>
    </div>
      <div className="vitamatch-image" style={parallaxStyle} />
    </div>
  );
};
export default Vitamatch;
