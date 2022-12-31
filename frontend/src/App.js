import React from 'react';
import {Footer, Contact, WhoChawewo, Header} from './containers';
import {Navbar, Background} from './components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';


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