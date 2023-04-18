import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="chawewo__footer section__padding ">
      <div className="chawewo__footer-content">
      
     <h5 className='gradient__text text-center ' style={{transform: "translateY(-20px"}}>
      <p >
         This entire website was made by me, thanks for visiting!
      </p>
     © Chawewo 2023
     </h5>
    </div>
    </div>
    /*
    <div className="container p-4 " style={{background: "black", width: "20px", height: "200px"}}>
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
  */
  )
}

export default Footer