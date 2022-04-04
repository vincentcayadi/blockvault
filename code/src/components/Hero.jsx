import React from "react";
import { Link } from "react-router-dom";
import vaultLight from "../images/vaultLight.svg";
import curlyLight from "../images/curlyLight.svg";

export const Hero = () => {
  return (
    <html class="select-none font-sans subpixel-antialiased container">
      <section class="relative">
        <div class="flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h2 class="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 font-semibold">
              Keep your data secure.
            </h2>
            <p class="text-base text-center lg:text-left mb-12">
              You control your data. With the help of BlockVault, you can store
              your data securely on the decentralized Blockchain network.
            </p>
            <p></p>
            <div class="flex justify-center flex-wrap gap-6">
              <Link
                exact
                to="/dashboard"
                class="bg-nord3 text-nord5 py-5 px-10 rounded-full text-8"
              >
                Enter App
              </Link>
              <Link
                exact
                to="/dashboard"
                class="bg-nord3 text-nord5 py-4 px-10 rounded-full text-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <a class="px-2">Documentation</a>
              </Link>
            </div>
          </div>
          <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
            <img src={vaultLight} alt="vaultLight" />
          </div>
        </div>
        <div class="hidden lg:block absolute h-80 w-1/3 right-0 top-0 -z-1">
          <img src={curlyLight} alt="curlyLight" />
        </div>
      </section>
    </html>
  );
};

export default Hero;
