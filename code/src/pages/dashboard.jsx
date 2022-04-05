import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <body className="container select-none">
        <div className="flex bg-nord6 rounded-md p-2 m-auto my-8 space-x-4">
          <div className="flex-auto border-2 rounded-md p-2">
            <h1>Hello</h1>
            <p className="font-bold">Files Uploaded</p>
          </div>
          <div className="flex-auto border-2 rounded-md p-2">
            <div className="border-2">Insert the transaction thingy here</div>
            <div>Insert Gas Price Here:</div>
          </div>
        </div>
        <div>
          <div class="algin">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            <a class="text-xl p-2">Name</a>
          </div>
        </div>
        <div>This is the grid</div>
      </body>
      <Footer />
    </>
  );
};

export default Dashboard;
