import React from 'react';
import metamask from '../images/metamask.svg';
import phantom from '../images/phantom-icon-purple.svg';
import { useMoralis } from 'react-moralis';

export default function Wallet() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const loginMetaMask = async () => {
    console.log('loginMetaMask');
    if (!isAuthenticated) {
      await authenticate({
        signingMessage: 'Hello sir i am under the water',
      }).then(function (user) {
        console.log('Logged in user:', user);
        console.log(user.get('ethAddress'));
      });
    }
    console.log(!isAuthenticated);
  };

  const loginPhantom = async () => {
    console.log('loginPhantom');
    if (!isAuthenticated) {
      await authenticate({
        signingMessage: 'Hello sir i am a phantom',
        type: 'sol',
      })
        .then(function (user) {
          console.log('Logged in user:', user);
          console.log(user.get('ethAddress'));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const logOut = async () => {
    await logout();
    console.log('Logged out');
  };

  return (
    <>
      <div>
        <h1 className="mb-8 text-3xl font-bold text-center sm:text-4xl dark:text-nord6">
          Crypto Wallets
        </h1>
        <div className="grid w-2/3 mx-auto place-items-center sm:w-full">
          <div className="relative invisible sm:visible">
            <p className="mb-6 text-center sm:text-xl ">
              BlockVault provides support for some commonly use crypto wallets
              for authentication
            </p>
            <section className="relative">
              <div className="grid grid-cols-2 gap-14">
                <div className="border-2 border-#DFDFDF rounded-xl p-12 h-96 text-left relative hover:-translate-y-2 duration-300 hover:shadow bg-nord5 dark:bg-nord3 dark:border-nord3">
                  <h1 className="inline-block mb-6 mr-2 font-bold sm:text-2xl">
                    Metamask
                  </h1>
                  <img
                    src={metamask}
                    className="inline-block w-10 h-10"
                    alt="MetaMask"
                  />
                  <p className="dark:text-nord5">Connect Using MetaMask</p>
                  <div>
                    <button
                      onClick={loginMetaMask}
                      className="absolute px-10 py-4 duration-100 border-2 rounded-full bottom-12 left-12 bg-nord3 text-nord5 text-8 hover:bg-transparent hover:text-nord3 hover:border-nord3 dark:hover:bg-nord6 dark:border-nord2 dark:bg-nord2 dark:hover:border-nord6"
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <div className="relative p-12 text-left duration-300 border-2 rounded-xl h-96 hover:-translate-y-2 hover:shadow bg-nord5 dark:bg-nord3 dark:border-nord3">
                  <h1 className="inline-block mb-6 mr-2 font-bold sm:text-2xl dark:text-nord6">
                    Phantom
                  </h1>
                  <img
                    src={phantom}
                    className="inline-block w-10 h-10"
                    alt="Phantom"
                  />
                  <p className="dark:text-nord5">Connect Using Phantom</p>
                  <button
                    onClick={logOut}
                    className="absolute px-10 py-4 duration-100 border-2 rounded-full bottom-12 left-12 bg-nord3 text-nord5 text-8 hover:bg-transparent hover:text-nord3 hover:border-nord3 dark:hover:bg-nord6 dark:border-nord2 dark:bg-nord2 dark:hover:border-nord6"
                  >
                    Connect
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div className="absolute visible sm:invisible">
            <h1> Please use a device with a larger viewport</h1>
          </div>
        </div>
      </div>
    </>
  );
}
