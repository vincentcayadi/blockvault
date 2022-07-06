import React from 'react';
import { Link } from 'react-router-dom';
import landingLight from '../images/landingDesign.svg';
import hexagonOneLight from '../images/landinghexagon1Light.svg';
import logo from '../graphics/icon/black-icon.png';
import logotext from '../graphics/icontext/black-icontext.png'
// import hexagonTwoLight from '../images/landinghexagon2Light.svg';

const NotFoundPage = () => {
  return (
    <>     
      <div className="grid w-full h-screen text-center place-items-center z-10 bg-nord6 font-manrope">    
        <div className="absolute top-0 right-0 bg-nord6 sm:hidden z-0">
          <img src={landingLight} alt="landingDesign" />
        </div>

        <div className="absolute top-16 bg-nord6 sm:hidden z-0 left-0">
          <img src={hexagonOneLight} alt="hexagon1" />
        </div>
        
        {/* <div className="absolute bottom-0 bg-nord6 sm:hidden z-0 left-0">
          <img src={hexagonTwoLight} alt="hexagon2" />
        </div> */}
  
        <img src={logotext} alt="logo" className="w-1/6 sm:hidden z-10 absolute left-16 top-16" />
        
        <div className="z-10">
          <h1 className="font-extrabold text-9xl my-3">404</h1>
          <h2 className="font-semibold text-5xl my-3">Page Not Found</h2>
          <p className="text-xl mt-6 font-light">Sorry, the content you are looking for does not exist.</p>
          <p className="text-xl font-light">It was either removed, or there was a typo in the link.</p>

          <div className="flex justify-center">
            <div className="flex w-full justify-between content-center my-6">
              <Link 
                exact 
                to="/" 
                className="w-1/3 p-4 text-center bg-nord3 rounded-xl text-nord6 mx-auto"
              >
                Homepage
              </Link>
              <Link 
                exact 
                to="/dashboard" 
                className="w-1/3 p-4 text-center bg-nord3 rounded-xl text-nord6 mx-auto"
              >
                Dashboard
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
