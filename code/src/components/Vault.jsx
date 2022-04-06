import React from "react";
import { Link } from "react-router-dom";
import vaultLight from "./images/vaultLight.svg";
import Typical from 'react-typical'

const Vault = () => {
  return (
    <>
      <section className="relative mb-60 lg:mb-80">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          <div className="flex flex-1 flex-col items-center lg:items-start">
          <h1 className="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 font-extrabold">
              BlockVault
          </h1>
          <h1 className="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 font-extrabold">
              Keep your data
          </h1>
          <span className="font-mr text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 font-extrabold"> 
            <Typical /*https://dev.to/davidamunga/how-to-create-a-text-typing-animation-effect-in-react-49gl */
            steps={[
                  ' ',
                  1000,              
                  'Private.',
                  1000,
                  ' ',
                  1000,
                  'Secure.',
                  1000,
                  ' ',
                  1000,
                ]}
                loop={Infinity}
            />
            </span>
            <p className="font-medium lg:font-semibold text-center lg:text-left mb-12 text-nord3">
              You control your data. With the help of BlockVault, you can store
              your data securely on the decentralized Blockchain network.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <Link
                exact
                to="/dashboard"
                className="bg-nord1 text-white py-4 px-10 rounded-full text-8 shadow-xl hover:bg-transparent border-2 hover:border-nord1 hover:text-nord1 hover:scale-110% duration-200 delay-100"
              >
                Enter App
              </Link>
            </div>
          </div>
          <div className="flex justify-center flex-1">
            <img className="h-120" src={vaultLight} alt="vaultLight"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vault;
