import React from 'react';
import {Footer, Contact, WhoChawewo, Header} from './containers';
import {Navbar, Background} from './components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

/* deleted div app */
const App = () => {
  return (
    <BrowserRouter>
   <Navbar />
    <Routes>
     
          <Route exact path='/' element={< Header />}> </Route>
          <Route path='/about' element={< WhoChawewo />}> </Route>
          <Route path='/contact' element={< Contact />}> </Route> 
   </Routes>
   <Footer/>

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
 /* Before
    <Router>
          <Navbar />
          <Routes> 
          <Route path="/" element={<Header/>}  />
          <Route path="/about"  element={<WhoChawewo/>}  />
          <Route path="/contact"  element={<Contact/>}  />
          {/*<Route path="/project" element={<Project/>} /> awaiting implementation}
        </Routes> 
        <Footer />
      </Router>
  */ 
