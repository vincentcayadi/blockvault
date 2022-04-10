import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar-landing';
import landingDesign from '../components/images/landingDesign.svg';
import hexagon1 from '../components/images/landinghexagon1.svg';
import hexagon2 from '../components/images/landinghexagon2.svg';

const Index = () => {
  return (
    <>
      <div className="absolute top-0 right-0 bg-nord6 sm:hidden">
        <img src={landingDesign} alt="landingDesign" />
      </div>

      <div className="absolute top-16 sm:hidden">
        <img src={hexagon1} alt="hexagon1" />
      </div>

      <div className="hexagon">
        <img src={hexagon2} alt="hexagon2" />
      </div>
      <NavBar />
      <Hero />
      <Footer />
    </>
  );
};

export default Index;
