import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import logo from '../../assets/Chawewo.png';
import './navbar.css';
const Menu = () => (
  <>
        <p><a href="/">Home</a></p>
        <p><a href="/about">Who am I?</a></p>
        <p><a href="/contact"> Contact </a></p>
       {/* <p><a href="projects"> Projects </a></p> awaiting implementation*/} 
        <p><a href="https://www.linkedin.com/in/davidtrujillo-liprofile/" target="_blank" rel="noopener noreferrer" >LinkedIn</a></p>
        <p><a href="https://github.com/Chawewo" target="_blank" rel="noopener noreferrer" >Github</a></p>
        <p><a href="https://thecatapi.com/" target="_blank" rel="noopener noreferrer"> CatApi</a></p>

  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="chawewo__navbar border-bottom border-secondary" >
      <div className="chawewo__navbar-links">
        <div className="chawewo__navbar-links_logo" >
          <img src={logo} alt="logo" /> 
          </div>
        <div className="chawewo__navbar-links_container"> 
        <Menu />
        </div>
      </div>
      <div className="chawewo__navbar-send">
      <a href="contact"><button type="button">Send a message</button>
      </a>
      </div>
      <div className="chawewo__navbar-menu"> 
      {toggleMenu
       ? <RiCloseLine color="fff" size ={27} onClick ={() => setToggleMenu(false)}  />
       : <RiMenu3Line color="fff" size ={27} onClick ={() => setToggleMenu(true)} />
      }
      {toggleMenu && (
        <div className="chawewo__navbar-menu_container fade-in">
          <div className="chawewo__navbar-menu_container-links">
            <Menu />
          </div>
          <div className="chawewo__navbar-menu_container-links-send"> 
          <a href="contact"><button type="button">Send a message</button>
      </a>
          </div>
        </div>
      ) 

      }
      </div>
    </div>
  )

}

export default Navbar;
 