import React from 'react';
import Footer from '../components/Footer';
import { RiHome6Fill } from 'react-icons/ri';
import { FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <>
      <div className="w-full p-4 text-center bg-nord4">
        <form>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
            <input
              className="w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none mx-autoblock focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      <div className="flex h-screen text-center">
        <div className="w-1/5 bg-nord4">
          <div className="w-1/2 mx-auto my-8 h-3/5">
            <div className="px-2 py-4 bg-white border-white border-solid rounded-md drop-shadow-2xl">
              <p className="pb-1 text-3xl font-bold">907</p>
              <p className="text-sm font-light">Files</p>
            </div>
            <div className="grid w-full grid-cols-2 gap-2 mt-12 text-center gird-rows-2 justify-items-center">
              <Link exact to="/dashboard">
                <div className="w-12 h-12 p-2 mx-auto rounded-md bg-nord0">
                  <div>
                    <RiHome6Fill className="mx-auto" />
                  </div>
                </div>
                <p className="text-center font-sm">Home</p>
              </Link>
              <Link exact to="/transactions">
                <div className="w-12 h-12 p-2 mx-auto rounded-md bg-nord0">
                  <FiClock className="mx-auto" />
                </div>
                <p className="text-center font-sm">History</p>
              </Link>
              <Link exact to="/upload">
                <div className="w-12 h-12 p-2 mx-auto rounded-md bg-nord0">
                  <div>
                    <RiHome6Fill className="mx-auto" />
                  </div>
                </div>
                <p className="text-center font-sm">Upload</p>
              </Link>
              <Link exact to="Transactions">
                <div className="w-12 h-12 p-2 mx-auto rounded-md bg-nord0">
                  <FiClock className="mx-auto" />
                </div>
                <p className="text-center font-sm">History</p>
              </Link>
            </div>
            <div className="px-2 py-4 mt-12 rounded-md bg-nord6">
              <span>Gas Prices(Gwei)</span>
              <div className="grid gap-2 gird-rows-2">
                <div className="bg-nord5 drop-shadow-s">
                  <span>ETH : 90Gwei</span>
                </div>
                <div>MATIC : 90Gwei</div>
              </div>
            </div>
          </div>
          <div className="w-1/2 mx-auto mt-12 h-1/5">
            <div className="px-2 py-4 bg-white border-white border-solid rounded-md drop-shadow-2xl">
              <p className="p-2 text-xl font-bold">Wallet Info</p>
              <p className="p-2 text-sm font-light">Linked To</p>
              <p className="p-2 text-sm font-light">Metamask</p>
              <p className="p-2 text-sm font-light">Wallet Address</p>
              <p className="p-2 text-sm font-light">XXXXX12345AB</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-nord5">
          <p>Folders</p>
          <div className="grid grid-cols-4">
            <div>Documents</div>
            <div>Images</div>
            <div>Music</div>
            <div>Videos</div>
          </div>
          <p>Files</p>
          <div className="grid grid-flow-row grid-cols-4 auto-rows-max">
            <div>Documents</div>
            <div>Images</div>
            <div>Music</div>
            <div>Documents</div>
            <div>Images</div>
            <div>Music</div>
            <div>Documents</div>
            <div>Images</div>
            <div>Music</div>
            <div>Documents</div>
            <div>Images</div>
            <div>Music</div>
            <div>Documents</div>
            <div>Images</div>
            <div>Music</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
