import React from 'react';
import metamask from './images/metamask.svg';
import phantom from './images/phantom-icon-purple.svg';
import { useMoralis } from 'react-moralis';

function Wallet() {
  
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
  
  const loginMetaMask = async () => {
    console.log("loginMetaMask");
    if (!isAuthenticated) {

      await authenticate({signingMessage: "Hello sir i am under the water" }).then(function (user) {
          console.log("Logged in user:", user);
          console.log(user.get("ethAddress"));
          
          
        })
        console.log("if runs")
        .catch(function (error) {
          console.log(error);
        });
      
    }
    console.log("outside if")
    console.log(!isAuthenticated)
  }
  
  const loginPhantom = async () => {
    console.log("loginPhantom");
    if (!isAuthenticated) {

      await authenticate({signingMessage: "Hello sir i am a phantom", type: "sol" }).then(function (user) {
          console.log("Logged in user:", user);
          console.log(user.get("ethAddress"));
          
          
        })
        .catch(function (error) {
          console.log(error);
        });
      
    }
  }
  
  const logOut = async () => {
    await logout();
    console.log("Logged out");
  }
  
  return (
    <>
      <h1 className="mb-8 text-3xl font-bold text-center md:text-4 lg:text-4xl dark:text-nord6">
        Crypto Wallets
      </h1>
      <p className="mb-6 text-center lg:text-xl dark:text-nord5">
        BlockVault provides support for some commonly use crypto wallets for
        authentication and login
      </p>
      <section className="relative">
        <div className="grid grid-cols-2 gap-14">
          <div className="border-2 border-#DFDFDF rounded-xl p-12 h-96 text-left relative hover:-translate-y-2 duration-300 hover:shadow bg-nord5 dark:bg-nord3 dark:border-nord3">
            <h1 className="inline-block mb-6 mr-2 font-bold lg:text-2xl dark:text-nord6">
              Metamask (Ethereum)
            </h1>
            <img
              src={metamask}
              className="inline-block w-10 h-10"
              alt="MetaMask"
            />
            <p className="dark:text-nord5">
              Use Metamask to interact with the Ethereum, Polygon blockchain
            </p>
            <div>
              <button onClick={loginMetaMask} className="absolute px-10 py-4 duration-100 border-2 rounded-full bottom-12 left-12 bg-nord3 text-nord5 text-8 hover:bg-transparent hover:text-nord3 hover:border-nord3 dark:hover:bg-nord6 dark:border-nord2 dark:bg-nord2 dark:hover:border-nord6">
                Connect
              </button>
            </div>
          </div>
          <div className="relative p-12 text-left duration-300 border-2 rounded-xl h-96 hover:-translate-y-2 hover:shadow bg-nord5 dark:bg-nord3 dark:border-nord3">
            <h1 className="inline-block mb-6 mr-2 font-bold lg:text-2xl dark:text-nord6">
              Phantom (Solana)
            </h1>
            <img
              src={phantom}
              className="inline-block w-10 h-10"
              alt="Phantom"
            />
            <p className="dark:text-nord5">
              Use Phantom to interact with the Solana blockchain
            </p>
            <button onClick={loginPhantom} className="absolute px-10 py-4 duration-100 border-2 rounded-full bottom-12 left-12 bg-nord3 text-nord5 text-8 hover:bg-transparent hover:text-nord3 hover:border-nord3 dark:hover:bg-nord6 dark:border-nord2 dark:bg-nord2 dark:hover:border-nord6">
              Connect
            </button>
            <button onClick={logOut} className="absolute px-10 py-4 duration-100 border-2 rounded-full bottom-12 left-12 bg-nord3 text-nord5 text-8 hover:bg-transparent hover:text-nord3 hover:border-nord3 dark:hover:bg-nord6 dark:border-nord2 dark:bg-nord2 dark:hover:border-nord6">
              logout
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wallet;