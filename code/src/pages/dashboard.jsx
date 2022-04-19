import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useMoralis } from 'react-moralis';

const Dashboard = () => {
  
  const { user, account, Moralis } = useMoralis();
  const username = user.get("ethAddress");
  
  
  return (
    <>
      <Navbar />
      <body className="container select-none bg-nord6">
        <div className="flex w-full my-8 rounded-md bg-nord6">
          <div className="flex-auto p-4 rounded-md">
            <h1 className="text-2xl font-bold">Welcome back,</h1>
            <p className="font-bold">{username}</p>
          </div>
          <div className="flex-auto p-2 border-2 rounded-md">
            <div className="border-2">Insert the transaction thingy here</div>
            
            <div>Insert Gas Price Here:</div>
          </div>
        </div>
        <div>
          <div class="algin">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <span class="text-xl p-2">Name</span>
          </div>
        </div>
        <div>This is the grid</div>
      </body>
      <Footer />
    </>
  );
};

export default Dashboard;
