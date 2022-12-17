import React from 'react';
import {Footer, Contact, WhoChawewo, Header} from './containers';
import { Brand, Navbar} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

/* deleted div app */
const App = () => {
  return (
    <Router>
          <Navbar />
          <Routes> 

          <Route  path="/" element={<Header/>}  />
          <Route path="/who"  element={<WhoChawewo/>}  />
          <Route path="/contact"  element={<Contact/>}  />
          
        </Routes> 
      </Router>

  )
}

export default App
/*
<Route path='/End' exact component={End} />
<Route path='/projects' exact component={Projects}  />
<Route path='/End' exact component={End} />
/*
const App = () => {
  return (
    
    <div className="App">
      <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhoChawewo />
        <div className="mt-5 col-md-12">
        <Contact />
        <div className="mt-5 col-md-12">

        
        <Footer />
      </div>
      </div>
      </div>
  )
}
*/