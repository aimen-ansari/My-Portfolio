import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Navbar from "./components/Navbar";
// import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Scroll from "./sections/Scroll";
import Popup from "./components/Popup";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      {/* <LogoShowcase /> */}
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
      <Scroll />
      <Popup />
    </>
  );
};

export default App;
