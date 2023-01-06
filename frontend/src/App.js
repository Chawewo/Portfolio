import React from "react";
import { StaticRouter } from "react-router-dom/server";
import { Footer, Contact, WhoChawewo, Header } from "./containers";
import { Navbar, Background } from "./components";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = (props) => {
  return (
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