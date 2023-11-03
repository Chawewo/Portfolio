import React from "react";
import { BrowserRouter } from "react-router-dom";
//import { StaticRouter } from "react-router-dom/server";
import { Footer, Contact, WhoChawewo, Header, Project, Vitamatch } from "./containers";
import { Background, Navbar } from "./components";
import {Route, Routes } from "react-router-dom";
import "./App.css";



const App = () => {
  return (
    <BrowserRouter>
    <Background/>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/about" element={<WhoChawewo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Header />} />
      </Routes>
      <Vitamatch />
      <Project />
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