import React from 'react';
import "./contact.css";
import emailjs from "emailjs-com";
const Contact = () => {
    function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('service_vr8yezm',"template_p9oq2ls",e.target,"OR6W4MRW7Wh9k7RRt")
      .then(res=>{console.log(res);})
      .catch(err=> console.log(err));
    }
  return (
    <section>
        <div className="container border" style={{marginTop: "50px",
      width: '50%', background: "#191919", }}>
            <h1 style={{marginTop: '25px', justifyContent: "center", fontFamily: 'Recoleta', color: "#fff"}}>
              Contact Me
            </h1>
            <form className="row" style={{margin:"25px 85px 75px 100px"}} 
            onSubmit={sendEmail}>
              <label style={{fontFamily: 'Recoleta', color: "#fff"}}> Name </label>
              <input type="text" name="name" className="form-control style ="/>

              <label style={{fontFamily: 'Recoleta', color: "#fff"}}> Email </label>
              <input type="email" name="user_email" className="form-control"/>

              <label style={{fontFamily: 'Recoleta', color: "#fff"}}> Message </label>
              <textarea name= "message" rows="4" className="form-control" /> 
              <input type='submit' value='Send' className="form-control btn btn-primary"
              style={{marginTop: "30px"}}/>
            </form>
        </div>
    </section>
  )
}

export default Contact