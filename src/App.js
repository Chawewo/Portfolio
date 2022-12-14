import React from 'react';
import {Footer, Contact, WhoChawewo, Header} from './containers';
import { Brand, Navbar} from './components';
import './App.css';


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

export default App