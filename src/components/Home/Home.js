import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
};

export default Home;
