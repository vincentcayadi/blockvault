import React from 'react';
import { Link } from 'react-router-dom';
import landingLight from '../images/landingDesign.svg';
import hexagonOneLight from '../images/landinghexagon1Light.svg';
import Footer from '../components/Footer';

const NotFoundPage = () => {
  return (
    <>
      <div className="z-10 grid w-full h-screen text-center place-items-center bg-nord6 font-manrope">
        <div className="absolute top-0 right-0 z-0 bg-nord6 sm:hidden">
          <img src={landingLight} alt="landingDesign" />
        </div>

        <div className="absolute left-0 z-0 top-16 bg-nord6 sm:hidden">
          <img src={hexagonOneLight} alt="hexagon1" />
        </div>
        <div className="z-10">
          <h1 className="my-3 font-extrabold text-9xl">404</h1>
          <h2 className="my-3 text-5xl font-semibold">Page Not Found</h2>
          <p className="mt-6 text-xl font-light">
            Sorry, the content you are looking for does not exist.
          </p>
          <p className="text-xl font-light">
            It was either removed, or there was a typo in the link.
          </p>

          <div className="flex justify-center">
            <div className="flex content-center justify-between w-full my-6">
              <Link
                exact
                to="/"
                className="w-1/3 p-4 mx-auto text-center duration-300 border-2 bg-nord3 rounded-xl text-nord6 hover:bg-transparent hover:text-nord3 hover:border-nord3"
              >
                Homepage
              </Link>
              <Link
                exact
                to="/dashboard"
                className="w-1/3 p-4 mx-auto text-center duration-300 border-2 bg-nord3 rounded-xl text-nord6 hover:bg-transparent hover:text-nord3 hover:border-nord3"
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
