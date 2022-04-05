import React from "react";
import { Link } from "react-router-dom";
import vaultLight from "./images/vaultLight.svg";


const Vault = () => {
  return (
    <>
      <section class="relative mb-60 lg:mb-80">
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
                class="bg-nord3 text-nord5 py-4 px-10 rounded-full text-8 shadow-xl hover:bg-transparent hover:border-2 hover:border-nord1 hover:text-nord1 hover:scale-110% duration-200 delay-100"
              >
                Enter App
              </Link>
            </div>
          </div>
          <div class="flex justify-center flex-1">
            <img class="h-120" src={vaultLight} alt="vaultLight"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vault;
