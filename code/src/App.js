import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="upload" element={<Upload />} />
        <Route path="transactions" element={<Transactions />} />
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
        <div>
        <h1>Dashboard</h1>
        <p>Little Shit</p>
        </div>
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