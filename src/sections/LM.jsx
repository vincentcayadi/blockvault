import React from 'react';

export default function LearnMore() {
  return (
    <>
      <section className="relative mb-60 lg:mb-80">
        <div className="flex flex-col">
          <h1 className="mb-6 text-3xl font-bold text-center md:text-4 lg:text-4xl text-nord0 ">
            Say hello to decentralized storage
          </h1>
          <p className="text-center lg:text-xl text-nord3">
            Storing data on a centralized server is outdated
          </p>
          <p className="mb-6 text-center lg:text-xl text-nord3">
            It is time to store your data on the Blockchain
          </p>
          <div className="grid h-full grid-cols-3 gap-4">
            <div className="p-4 rounded-md shadow-md bg-nord5">
              <div className="grid w-16 h-16 p-4 text-center rounded-full shadow-md bg-nord4 place-items-center">
                <p className="text-2xl font-semibold">1</p>
              </div>
              <p className="mt-4 mb-2 text-xl font-bold">Authenticate</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="p-4 rounded-md shadow-md bg-nord5">
              <div className="grid w-16 h-16 p-4 text-center rounded-full shadow-md bg-nord4 place-items-center">
                <p className="text-2xl font-semibold">2</p>
              </div>
              <p className="mt-4 mb-2 text-xl font-bold">Encrypt</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="p-4 rounded-md shadow-md bg-nord5">
              <div className="grid w-16 h-16 p-4 text-center rounded-full shadow-md bg-nord4 place-items-center">
                <p className="text-2xl font-semibold">3</p>
              </div>
              <p className="mt-4 mb-2 text-xl font-bold">Upload</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
