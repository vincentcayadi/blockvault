import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <body className="container">
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
        <div>Hello</div>
        <div>Wassa</div>
      </body>
    </>
  );
};

export default Dashboard;
