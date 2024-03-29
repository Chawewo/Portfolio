import React, {useState} from 'react';
import emailjs from "emailjs-com";
import logo from '../../assets/Linkedin.png';
import logo2 from '../../assets/Github.png';
const Contact = () => {
    const [hasEmailSent, setHasEmailSent] = useState(false);
    function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('service_vr8yezm',"template_p9oq2ls",e.target,"OR6W4MRW7Wh9k7RRt")
      .then(res=>{console.log(res);})
      .catch(err=> console.log(err));
      setHasEmailSent(true);
      }
      return (
        <section>
          {hasEmailSent ? (
            <div className="container rounded text-center " style={{justifyContent: "center",width: "50%", background: '#191919'}}>
              <h3 style={{ fontFamily: 'Recoleta', color: '#fff', marginTop: "50px"}} id="contact">Thanks for contacting me!</h3>
            </div>
          ) : (
            <div className="container rounded text-center p-1" style={{justifyContent: "center", backgroundClip: "padding-box", maxWidth: "60%",width: 'auto', background: '#191919' }}>
              <h1 style={{ fontFamily: 'Recoleta', color: '#fff' }} id="contact">
                Contact Me
              </h1>
              <form className="row" style={{ margin: '25px  20px 100px' }} onSubmit={sendEmail}>
                <label style={{ fontFamily: 'Recoleta', color: '#fff' }}> Name </label>
                <input type="text" name="name" className="form-control style =" required />
    
                <label style={{ fontFamily: 'Recoleta', color: '#fff' }}> Email </label>
                <input type="email" name="user_email" className="form-control" required />
    
                <label style={{ fontFamily: 'Recoleta', color: '#fff' }}> Message </label>
                <textarea name="message" rows="4" className="form-control" required />
                <input type="submit" value="Send" className="form-control btn btn-primary" style={{ marginTop: '30px' }} />
              </form>
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
        
      );
    };
    
    /* Before Test
  return (
    <section>
        <div className="container rounded text-center" style={{ width: '80%',background: "#191919" }}>
            <h1 style={{fontFamily: 'Recoleta', color: "#fff"}} id>
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
              <input type="submit" value="Send" 
              className="form-control btn btn-primary"  style={{marginTop: "30px"}}/>
            </form>
        </div>
        
    </section>
  )
}
*/

export default Contact;