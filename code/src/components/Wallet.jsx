import React from 'react';
import metamask from './images/metamask.svg';
import phantom from './images/phantom-icon-purple.svg';

const Wallet = () => {
  return (
    <>
      <h1 className="mb-8 text-3xl font-bold text-center md:text-4 lg:text-4xl">
        Crypto Wallets
      </h1>
      <p className="mb-6 text-center lg:text-xl">
        BlockVault provides support for some commonly use crypto wallets for
        authentication and login
      </p>
      <section className="relative">
        <div className="grid grid-cols-2 gap-14">
          <div className="border-2 border-#DFDFDF rounded-xl p-12 h-96 text-left relative hover:-translate-y-2 duration-300 hover:shadow bg-nord5">
            <h1 className="inline-block mb-6 mr-2 font-bold lg:text-2xl">
              Metamask (Ethereum)
            </h1>
            <img
              src={metamask}
              className="inline-block w-10 h-10"
              alt="MetaMask"
            />
            <p>
              Use Metamask to interact with the Ethereum, Polygon blockchain
            </p>
            <div>
              <button className="absolute px-10 py-4 duration-100 rounded-full bottom-12 left-12 bg-nord3 text-nord5 text-8 hover:bg-transparent hover:text-nord3 hover:border-2 hover:border-nord3">
                Connect
              </button>
            </div>
          </div>
          <div className="relative p-12 text-left duration-300 border-2 rounded-xl h-96 hover:-translate-y-2 hover:shadow bg-nord5">
            <h1 className="inline-block mb-6 mr-2 font-bold lg:text-2xl">
              Phantom (Solana)
            </h1>
            <img
              src={phantom}
              className="inline-block w-10 h-10"
              alt="Phantom"
            />
            <p>Use Phantom to interact with the Solana blockchain</p>
            <button className="absolute px-10 py-4 duration-100 rounded-full bottom-12 left-12 bg-nord3 text-nord5 text-8 hover:bg-transparent hover:text-nord3 hover:border-2 hover:border-nord3">
              Connect
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wallet;
