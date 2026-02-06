import React from "react";
import Hero from "../components/Hero/Hero";
import Highlights from '../components/Highlights/Highlights';
import Timeline from "../components/Timeline/Tineline";
import Languages from "../components/Languages/Languages";
import HardSkills from "../components/HardSkills/HardSkills";
import Contact from "../components/Contact/Contact";


const Home = () => {
  return (
    <>
      <Hero/>
      <Highlights/>
      <Timeline/>
      <Languages/>
      <HardSkills/>
      <Contact/>
      {/* outras seções da home aqui */}
    </>
  );
};

export default Home;
