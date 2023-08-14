import React, { useState, useEffect } from 'react';
import background from '../../assets/background.jpg';
import './background.css';

const Background = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerStyles = {
    width: '100%',
    height: '100vh', // Adjust this based on your design
    overflow: 'hidden',
  };

  // Calculate the vertical position of the image based on the scroll
  const imageYPosition = `${scrollPosition * 0.5}px`;

  const imageStyles = {
    width: '100%',
    minHeight: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    transform: `translateY(${imageYPosition})`, // Apply parallax effect
  };

  return (
    <div className="background-container" style={containerStyles}>
      <img src={background} alt="Background" style={imageStyles} />
    </div>
  );
};

export default Background;
