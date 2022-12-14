import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="container p-2" style={{ background: "black"}}>
      <div className="chawewo__footer-heading">
        <h1 className="gradient__text text-center">
          Thank you for visiting my first website
        </h1>
      </div>
      <div className="chawewo__footer-links">
        <div className="chawewo__footer-links-logo">
          <p className="p-2"></p>
        </div>
      </div>
      <h6 className="text-center">
      © Chawewo 2022
      </h6>
    </div>
  )
}

export default Footer