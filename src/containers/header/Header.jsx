import React from 'react';
import './header.css';
const Header = () => {
  return (
    <div className="chawewo__header section__padding" id="home"> 
      <div className= "chawewo__header-content">
        <h1 className= "gradient__text">"Hello World"</h1>
        <p>Welcome to my website, it is still currently under production but if you could send a message about anything, errors, bugs, or even your thoughts. It would be appreciated, you can also place your email address below in order to recieve a cat picture that is grabbed from an API when I finally implement it</p>
        <div className="chawewo__header-content__input">
          <input type="email" placeholder="Your Email Address"/>
          <button type="button">Email Test</button>
        </div>
        </div>
      </div>
  )
}

export default Header