import React from "react";
import metamask from "./images/metamask.svg";

const Wallet = () => {
  return (
    <>
      <h1 class="text-3xl md:text-4 lg:text-4xl text-center mb-8 font-bold">Crypto Wallets</h1>
      <p class="lg:text-xl text-center mb-6">BlockVault provides support for some commonly use crypto wallets for authentication and login</p>      
      <section class="relative">
        <div class="grid grid-cols-2 gap-14">
          <div class="border-2 border-#DFDFDF rounded-xl p-12 h-96 text-left relative hover:-translate-y-2 duration-300 hover:shadow bg-nord5">
            <h1 class="font-bold lg:text-2xl mb-6 inline-block mr-2">
              Metamask (Ethereum) 
            </h1>
            <img src={metamask} class="inline-block h-10 w-10" alt="MetaMask"/>
            <p>
              Use Metamask to interact with the Ethereum, Polygon blockchain
            </p>
            <div>
              <button class="absolute bottom-12 left-12 bg-nord3 text-nord5 py-4 px-10 rounded-full text-8 hover:bg-transparent hover:text-nord3 hover:border-2 hover:border-nord3 duration-100">
                Connect
              </button>
            </div>
          </div>
          <div class="border-2 rounded-xl p-12 h-96 text-left relative hover:-translate-y-1 duration-300 hover:shadow bg-nord5">
            <h1 class="font-bold lg:text-2xl mb-6">
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
    </>
  );
};

export default Wallet;
