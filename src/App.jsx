import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Anuj Chaudhary",
  title: "Web Designer & Web Developer",
  email: "anujchaudhary3112@gmail.com",
  gitHub: "Anuj579",
  linkedIn: "anujchaudhary549/",
  twitter: "anuj_549",
};

const primaryColor = "#000";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor}/>
    </div>
  );
};

export default App
