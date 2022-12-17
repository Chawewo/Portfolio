import React from 'react';
import {Footer, Contact, WhoChawewo, Header} from './containers';
import { Brand, Navbar} from './components';
import {BrowserRouter as BrowserRouter,Routes, Router, Route} from 'react-router-dom';
import './App.css';

/* deleted div app */
const App = () => {
  return (
    <BrowserRouter>
          <Navbar />
          <Routes> 
          <Route path='/home' component={<Header/>}  />
          <Route path='/whoChawewo' exact component={<WhoChawewo/>}  />
          <Route path='/Contact' exact component={<Contact/>}  />
          
        </Routes>
      </BrowserRouter>

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