import React from 'react';

export default function LearnMore() {
  return (
    <>
      <div className="h-screen">
        <div className="flex flex-col ">
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
              <p>Connect to your favourite Web3.0 Wallet</p>
            </div>
            <div className="p-4 rounded-md shadow-md bg-nord5">
              <div className="grid w-16 h-16 p-4 text-center rounded-full shadow-md bg-nord4 place-items-center">
                <p className="text-2xl font-semibold">2</p>
              </div>
              <p className="mt-4 mb-2 text-xl font-bold">Encrypt</p>
              <p>Encrypt your data using a file hash</p>
            </div>
            <div className="p-4 rounded-md shadow-md bg-nord5">
              <div className="grid w-16 h-16 p-4 text-center rounded-full shadow-md bg-nord4 place-items-center">
                <p className="text-2xl font-semibold">3</p>
              </div>
              <p className="mt-4 mb-2 text-xl font-bold">Upload</p>
              <p>Upload your data to IPFS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
