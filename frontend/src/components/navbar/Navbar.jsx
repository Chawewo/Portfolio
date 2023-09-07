import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Chawewo.png';
import './navbar.css';
import { Link } from 'react-router-dom';
const Menu = () => (

  <>
        <p><Link to= "/">Home </Link></p>
        <p><Link to= "/about"> Who Am I? </Link></p>
        <p><Link to= "/contact"> Contact Me</Link></p> 
        <p><a href="https://www.linkedin.com/in/chawewo" target="_blank" rel="noopener noreferrer" >LinkedIn</a></p>
        <p><a href="https://github.com/Chawewo" target="_blank" rel="noopener noreferrer" >Github</a></p>
        <p><a href="https://thecatapi.com/" target="_blank" rel="noopener noreferrer"> CatApi</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="chawewo__navbar " >
      <div className="chawewo__navbar-links">
        <div className="chawewo__navbar-links_logo" >
        <Link to= "/"><img  src={logo} alt="logo" /> </Link>
          </div>
        <div className="chawewo__navbar-links_container"> 
        <Menu />
        </div>
      </div>
      <div className="chawewo__navbar-send">
      <Link to= "/contact"><button type="button">Send a message</button>
      </Link>
      </div>
      <div className="chawewo__navbar-menu"> 
      {toggleMenu
       ? <RiCloseLine color="0000" size ={27} onClick ={() => setToggleMenu(false)}  />
       : <RiMenu3Line color="0000" size ={27} onClick ={() => setToggleMenu(true)} />
      }
      {toggleMenu && (
        <div className="chawewo__navbar-menu_container fade-in">
          <div className="chawewo__navbar-menu_container-links">
            <Menu />
          </div>
          <div className="chawewo__navbar-menu_container-links-send"> 
          <Link to="/contact"><button type="button">Send a message</button></Link>
          </div>
        </div>
      ) 

      }
      </div>
    </div>
  )

}

export default Navbar;
 