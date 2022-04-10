import React from 'react';

const LearnMore = () => {
  return (
    <>
      <section className="relative mb-60 lg:mb-80">
        <div className="flex flex-col">
          <h1 className="mb-6 text-3xl font-bold text-center md:text-4 lg:text-4xl text-nord0">
            Say hello to decentralized storage
          </h1>
          <p className="text-center lg:text-xl text-nord3">
            {' '}
            Storing data on a centralized server is outdated
          </p>
          <p className="mb-6 text-center lg:text-xl text-nord3">
            {' '}
            It is time to store your data on the Blockchain
          </p>
          <button className="w-1/4 p-4 mx-auto text-sm text-white duration-300 bg-nord2 rounded-xl hover:bg-transparent hover:text-nord2 hover:border-2 hover:border-nord2 hover:scale-110">
            {' '}
            {/* Style this better pls*/}
            Learn more
          </button>
        </div>
      </section>
    </>
  );
};

export default LearnMore;
