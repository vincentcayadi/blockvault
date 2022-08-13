import React from 'react';
import Hero from '../sections/Hero';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar-landing';
import landingLight from '../images/landingDesign.svg';
import hexagonOneLight from '../images/landinghexagon1Light.svg';
import hexagonTwoLight from '../images/landinghexagon2Light.svg';

export default function Index() {
  return (
    <>
      <div className="absolute top-0 right-0 z-0 invisible bg-nord6 sm:visible">
        <img src={landingLight} alt="landingDesign" />
      </div>

      <div className="absolute invisible top-16 sm:visible">
        <img src={hexagonOneLight} alt="hexagon1" />
      </div>
      <div className="hexagon">
       <img src={hexagonTwoLight} alt="hexagon2" />
      </div>
      <NavBar />
      <Hero />
      <Footer />
    </>
  );
}
