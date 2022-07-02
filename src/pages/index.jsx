import React, { useRef } from 'react';
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
  const landingDesign = useRef();
  var hexagon1;
  var hexagon2;
  if (localStorage.theme === 'dark') {
    console.log(localStorage.theme);
    if (landingDesign.current) landingDesign.current.src = landingDark;
    hexagon1 = hexagonOneLight;
    hexagon2 = hexagonTwoLight;
  } else {
    console.log(localStorage.theme);
    if (landingDesign.current) landingDesign.current.src = landingLight;
    hexagon1 = hexagonOneDark;
    hexagon2 = hexagonTwoDark;
  }

  return (
    <>
      <div className="absolute top-0 right-0 bg-nord6 dark:bg-nord0 sm:hidden">
        <img src={landingLight} alt="landingDesign" ref={landingDesign} />
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
