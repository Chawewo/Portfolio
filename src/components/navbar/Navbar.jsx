import React from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';

// BEM -> Block Elemen Modifier
const Navbar = () => {
  return (
    <div className="chawewo__navbar">
      <div className="chawewo__navbar-links">
        <div className="chawewo__navbar-links_logo">
        Navbar
        </div>
      </div>
    </div>
  )

}

export default Navbar