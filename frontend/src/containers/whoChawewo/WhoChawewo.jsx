import React from 'react';
import './whoChawewo.css';
import Headshot from '../../assets/Headshot.jpg';
const WhoChawewo = () => {
  return (
 <div className="chawewo__who section__padding" id="about">
  <div className= "chawewo__who-content" style={{zIndex: "-1"}}>
  <h1 className="gradient__text subtitle text-center">
     Hello, my name is David.
     </h1>
     
  <h5 className="gradient__text fade">
I am a student at Fullerton College with a passion for becoming a full stack developer. I am currently enrolled in a computer science program at Fullerton College and have been working hard to develop my skills in programming.
I have always been interested in technology and how it can be used to make a difference in the world. That's why I decided to pursue a career in full stack development. I am eager to learn as much as I can about all aspects of web development, from front-end design to back-end programming.
<br/>
<br/>
In addition to my coursework, I have also been actively learning on my own through online resources and tutorials. I am particularly interested in full stack development and have been focusing on learning languages such as HTML, CSS, and JavaScript. I have also dabbled in server-side languages like SQL and Python

<br/>
<br/>
I am driven and self-motivated, and I am always looking for opportunities to challenge myself and improve my skills. In the future, I hope to use my knowledge and expertise to create innovative and useful applications that solve real-world problems.
I am excited to continue my journey as a full stack developer and make a positive impact through my work. Thank you for visiting my website. Feel free to reach out to me if you have any questions or just want to chat about technology and programming.
   </h5>
  <img className="fade"  src={Headshot} alt = " " />
 
  </div>
  </div>
  )
}

export default WhoChawewo
