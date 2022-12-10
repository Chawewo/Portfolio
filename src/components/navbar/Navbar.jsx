import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Chawewo.png';
import './navbar.css';
const Menu = () => (
  <>
        <p><a href="#home">Home</a></p>
        <p><a href="#person">Who am I?</a></p>
        <p><a href="#linkedin">LinkedIn</a></p>
        <p><a href="#github">Github</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="chawewo__navbar">
      <div className="chawewo__navbar-links">
        <div className="chawewo__navbar-links_logo">
          <img src={logo} alt="logo" /> 
          </div>
        <div className="chawewo__navbar-links_container"> 
        <Menu />
        </div>
      </div>
      <div className="chawewo__navbar-send">
      <button type="button">Send a message</button>
      </div>
      <div className="chawewo__navbar-menu"> 
      {toggleMenu
       ? <RiCloseLine color="fff" size ={27} onClick ={() => setToggleMenu(false)} />
       : <RiMenu3Line color="fff" size ={27} onClick ={() => setToggleMenu(true)} />
      }
      {toggleMenu && (
        <div className="chawewo__navbar-menu_container scale-up-center">
          <div className="chawewo__navbar-menu_container-links">
            <Menu />
          </div>
          <div className="chawewo__navbar-menu_container-links-send"> 
      <button type="button">Send a message</button>
          </div>
        </div>
        
      )}
      </div>
    </div>
  )

}

export default Navbar;
 