import React from "react";
import { Link } from "react-router-dom";
import creditCard from "./creditcard.svg";

export const Hero = () => {
    return (
    <>
        <section class="bg-nord6 select-none font-mono subpixel-antialiased">
            <div class="containter flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                <div class="flex flex-1 flex-col items-center ig:items-start p-10 justify-start">
                <h2 class="text-nord1 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 w-full">
                    Keep your data secure
                </h2>
                <p class="text-nord2 text-lg text-center lg:text-left mb-6">
                    Store your data securely on the decentralised Blockchain network
                    using Blockvault.
                </p>
                <Link class="subpixel-antialiased px-4 py-2 font-semibold text-xl bg-blue-500 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out delay-150 duration-300" to="./pages/dashboard">
                    Enter App
                </Link>
                </div>
                <div class="flex flex-2 flex-col items-center ig:items-start w-1/2">
                <img
                    src={creditCard}
                    alt="credit card"
                    class="w-full h-auto mb-6"
                />
                </div>
            </div>
        </section>
    </>
    );
};

export default Hero;