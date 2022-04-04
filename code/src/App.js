import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Button } from '@mantine/core';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="dashboard" exact element={<Dashboard />} />
        <Route path="upload" exact element={<Upload />} />
        <Route path="transactions" exact element={<Transactions />} />
      </Routes>
    </div>
  );
}

// App.js
function Home() {
  return (
    <>
      <Hero />
    </>
  );
}

function Dashboard() {
  return (
    <>  
      <Navbar />
      <body>
        <div className="flex bg-nord6 w-5/6 rounded-md p-2 m-auto my-8 space-x-4">
          <div className="flex-auto border-2 rounded-md p-2">
            <h1>
              Hello
            </h1>
            <p  className="font-bold">
              Files Uploaded
            </p>
          </div>
          <div className="flex-auto border-2 rounded-md p-2">
            <div className="border-2">
              Insert the transaction thingy here
            </div>
            <div>
              Insert Gas Price Here:
            </div>
          </div>
        </div>
        <div>
          Hello
        </div>
        <div> 
          Wassa
        </div>
      </body>
    </>
  );
}

function Upload() {
  return (
    <>  
      <Navbar />
        <div>
        <h1>Upload</h1>
        <p>Little Shit</p>
        </div>
    </>
  );
}

function Transactions() {
  return (
    <>  
      <Navbar />
        <div>
        <h1>Transactions</h1>
        <p>Little Shit</p>
        </div>
    </>
  );
}

export default App;