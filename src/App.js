import React from 'react';
import {Footer, Contact, Blog, Possibility, Features, WhoChawewo, Header} from './containers';
import { CTA, Brand, Navbar} from './components';
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
        <Contact />
        <Footer />
      </div>
  )
}

export default App