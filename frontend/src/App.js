import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { Footer, Contact, WhoChawewo, Header } from "./containers";
import { Navbar, Background } from "./components";
import {Route, Routes } from "react-router-dom";
import "./App.css";


/*
const App = (props) => {
  return (
    // Recieves location and context from server to display 
    <StaticRouter location={props.location} context={props.context}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/about" element={<WhoChawewo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </StaticRouter>
    
  );
};
*/

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/about" element={<WhoChawewo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Header />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App;


/*
const App = (props) => {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/about" element={<WhoChawewo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
*/