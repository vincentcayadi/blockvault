import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { RiHome6Fill } from 'react-icons/ri';
import { FiClock } from 'react-icons/fi';

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen text-center">
        <div className="w-1/4 bg-nord4">
          <div className="w-1/2 h-full mx-auto my-8">
            <div className="px-2 py-4 bg-white border-white border-solid rounded-md drop-shadow-2xl">
              <p className="pb-1 text-3xl font-bold">907</p>
              <p className="text-sm font-light">Files</p>
            </div>
            <div className="inline-grid grid-cols-2 gap-6 mt-12 text-center">
              <div>
                <div className="w-16 h-16 p-2 rounded-md bg-nord0">
                  <div>
                    <RiHome6Fill className="mx-auto" />
                  </div>
                </div>
                <p className="text-sm">Dashboard</p>
              </div>
              <div>
                <div className="w-16 h-16 p-2 rounded-md bg-nord0">
                  <FiClock className="mx-auto " />
                </div>
                <p className="text-sm">History</p>
              </div>
            </div>
            <div className="px-2 py-4 mt-12 rounded-md bg-nord6">
              <span>Gas Prices</span>
              <div className="grid gap-2 gird-rows-2">
                <div className="bg-nord5 drop-shadow-s">Hi</div>
                <div>Hi</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-nord7"></div>
      </div>
      <Footer />
    </>
  );
}
