import React, { useState } from 'react';
import './header.css'; 
import emailjs from "emailjs-com";
import logo from '../../assets/Linkedin.png';
import logo2 from '../../assets/Github.png';
const url = 'https://api.thecatapi.com/v1/images/search';


const Header = () => {
  // Grabbing Url from cat api
  const [ catUrl, setCatUrl ] = useState('Testing'); // Returns testing, then a function, we access through array

  const getCat = () => {
    console.log('Hello World!');
    fetch(url)
    .then((res) => res.json()) // Fetch means it grabs the url from database
    .then((cats) => {
      console.log('Cats: ', cats);
      const catUrl = cats[0].url; //grabs the first element and url
      setCatUrl(catUrl);
    })
    .catch((error) => {
      console.log( 'Error: ', error);
    });
  }

 const [hasEmailSent, setHasEmailSent] = useState(false);
 function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm('service_vr8yezm',"ChawewoSend",e.target,"OR6W4MRW7Wh9k7RRt") 
  .then(res=>{console.log(res);})
  .catch(err=> console.log(err));
  setHasEmailSent(true);
 }
 
  return (
    
<section> 
    {hasEmailSent ? (
      <div className="chawewo__header section__padding" id="home"> 
      <div className= "chawewo__header-content">
        <h1 className= "chawewo__header gradient__text fade-in-main">"Hello World"</h1>
        <p>Welcome to my website, it is still currently under production but if you could send a message about anything, errors, bugs, or even your thoughts, it would be appreciated. You can also place your email address below in order to recieve a cat picture that is grabbed from an API, I've finally implemented it so please tell me if you do not recieve a cat!</p>
        <div>
          <p>
            Email has been sent!
          </p>
        </div>
        </div>
        </div>
    ) : (
    <div className="chawewo__header section__padding" id="home"> 
      <div className= "chawewo__header-content">
        <h1 className= "chawewo__header gradient__text fade-in-main">"Hello World"</h1>
        <p>Welcome to my website, it is still currently under production but if you could send a message about anything, errors, bugs, or even your thoughts, it would be appreciated. You can also place your email address below in order to recieve a cat picture that is grabbed from an API. I've finally implemented it so please tell me if you do not recieve a cat!</p>
        <form className="chawewo__header-content__input" onSubmit={sendEmail}>

          <input type="hidden" name="cat" value={catUrl} /> 

          <input onClick={getCat} type="email" name="user_email" placeholder="Your Email Address" required/>
          <button type="submit">Email Test</button>
        </form>
        </div>
        
      </div>
         
          
    
    )} 
     <div className="chawewo__header-footer" >
          <h4 className='chawewo__header-footer text-left section__padding'>
            Feel free to reach out to me on:
            <a href="https://www.linkedin.com/in/davidtrujillo-liprofile/" target="_blank" rel="noopener noreferrer" ><img style={{}} src={logo} alt="logo" /> 
          </a>
            <a href="https://github.com/Chawewo" target="_blank" rel="noopener noreferrer" ><img src={logo2} alt="logo"/> 
          </a>
         
          </h4>
           
          </div>
</section>
  )
}

export default Header