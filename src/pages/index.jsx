import React, { useRef } from 'react';
import Hero from '../sections/Hero';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar-landing';
import landingLight from '../images/landingDesign.svg';
import landingDark from '../images/landingDesignDark.svg';
import hexagonOneLight from '../images/landinghexagon1Light.svg';
import hexagonTwoLight from '../images/landinghexagon2Light.svg';
import hexagonOneDark from '../images/landingHexagon1Dark.svg';
import hexagonTwoDark from '../images/landingHexagon2Dark.svg';

export default function Index() {
  return (
    <>
      <div className="absolute top-0 right-0 bg-nord6 sm:hidden">
        <img src={landingLight} alt="landingDesign" />
      </div>

      <div className="absolute top-16 sm:hidden">
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
