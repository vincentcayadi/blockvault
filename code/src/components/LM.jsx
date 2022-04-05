import React from "react";

const LearnMore = () => {
  return (
    <>
    <section class="relative">
        <div class="flex flex-col">
            <h1 class="text-3xl md:text-4 lg:text-4xl text-center mb-6 font-bold">Say hello to decentralized storage</h1>
            <p class=" lg:text-xl text-center"> Storing data on a centralized server is outdated</p>
            <p class=" lg:text-xl text-center mb-6"> It is time to store your data on the Blockchain</p>
            <button class="bg-nord3 rounded-xl text-nord6 p-4 text-sm w-1/4 m-auto mb-12 hover:bg-transparent hover:text-nord3 hover:border-2 hover:border-nord3"> {/* Style this better pls*/}
                Learn more
            </button>
        </div>
    </section>
    </>
  );
};

export default LearnMore;


