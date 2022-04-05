import React from "react";
import { Link } from "react-router-dom";
import vaultLight from "../images/vaultLight.svg";


export const Hero = () => {
  return (
    <html class="select-none font-sans subpixel-antialiased container">
      <section class="relative mb-12">
        <div class="flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h2 class="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 font-semibold">
              Keep your data secure
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
                class="bg-nord3 text-nord5 py-4 px-10 rounded-full text-8"
              >
                Enter App
              </Link>
            </div>
          </div>
          <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
            <img src={vaultLight} alt="vaultLight" />
          </div>
        </div>
      </section>
      <section class="relative m-auto">
        <div class="flex flex-col">
          <h1 class="text-3xl md:text-4 lg:text-4xl text-center mb-6 font-bold">Say hello to decentralized storage</h1>
          <p class=" lg:text-xl text-center"> Storing data on a centralized server is outdated</p>
          <p class=" lg:text-xl text-center mb-6"> It is time to store your data on the Blockchain</p>
          <button class="bg-nord3 rounded-xl text-nord6 p-4 text-sm w-1/4 m-auto mb-12"> {/* Style this better pls*/}
            Learn more
          </button>
        </div>
      </section>
      <h1 class="text-3xl md:text-4 lg:text-4xl text-center mb-8 font-bold">Crypto Wallets</h1>
      <p class="lg:text-xl text-center mb-6">BlockVault provides support for some commonly use crypto wallets for authentication and login</p>      
      <section class="relative">
        <div class="grid grid-cols-2 gap-14">    
          <div class="border-2 rounded-xl p-12 h-96 text-left relative hover:-translate-y-2 duration-300 hover:shadow">
            <h1 class="font-medium text-2xl mb-6">
              Metamask (Etherium)
            </h1>
            <p>
              Use Metamask to interact with the Etherium, Polygon blockchain
            </p>
            <button class="absolute bottom-12 left-12 bg-nord3 text-nord5 py-4 px-10 rounded-full text-8 hover:bg-transparent hover:text-nord3 hover:border-2 hover:border-nord3 duration-100">
              Connect
            </button>
          </div>
          <div class="border-2 rounded-xl p-12 h-96 text-left relative hover:-translate-y-1 duration-300 hover:shadow">
            <h1 class="font-medium text-2xl mb-6">
              Phantom (Solana)
            </h1>
            <p>
              Use Phantom to interact with the Solana blockchain
            </p>
            <button class="absolute bottom-12 left-12 bg-nord3 text-nord5 py-4 px-10 rounded-full text-8 hover:bg-transparent hover:text-nord3 hover:border-2 hover:border-nord3 duration-100">
              Connect
            </button>
          </div>
        </div>
      </section>
      
    </html>
  );
};

export default Hero;
