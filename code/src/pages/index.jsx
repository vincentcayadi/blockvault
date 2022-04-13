import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar-landing';
import landingLight from '../components/images/landingDesign.svg';
import landingDark from '../components/images/landingDesignDark.svg';
import hexagonOneLight from '../components/images/landinghexagon1Light.svg';
import hexagonTwoLight from '../components/images/landinghexagon2Light.svg';
import hexagonOneDark from '../components/images/landingHexagon1Dark.svg';
import hexagonTwoDark from '../components/images/landingHexagon2Dark.svg';

const Index = () => {
  var landingDesign;
  var hexagon1;
  var hexagon2;
  if (localStorage.theme === 'dark') {
    landingDesign = landingLight;
    hexagon1 = hexagonOneLight;
    hexagon2 = hexagonTwoLight;
  } else {
    landingDesign = landingDark;
    hexagon1 = hexagonOneDark;
    hexagon2 = hexagonTwoDark;
  }

  return (
    <>
      <div className="absolute top-0 right-0 bg-nord6 dark:bg-nord0 sm:hidden">
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
