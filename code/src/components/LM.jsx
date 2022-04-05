import React from "react";

const LearnMore = () => {
  return (
    <>
    <section class="relative mb-60 lg:mb-80">
        <div class="flex flex-col">
            <h1 class="text-3xl md:text-4 lg:text-4xl text-center mb-6 font-bold text-nord0">Say hello to decentralized storage</h1>
            <p class=" lg:text-xl text-center text-nord3"> Storing data on a centralized server is outdated</p>
            <p class=" lg:text-xl text-center text-nord3 mb-6"> It is time to store your data on the Blockchain</p>
            <button class="bg-nord2 rounded-xl text-white p-4 text-sm w-1/4 mx-auto hover:bg-transparent hover:text-nord2 hover:border-2 hover:border-nord2 hover:scale-110 duration-300"> {/* Style this better pls*/}
                Learn more
            </button>
        </div>
    </section>
    </>
  );
};

export default LearnMore;


