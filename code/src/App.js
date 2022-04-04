import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Button } from "@mantine/core";
import Hero from "./components/Hero";

// Pages
import Dashboard from "./pages/dashboard";
import Upload from "./pages/upload";
import Transactions from "./pages/transactions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="dashboard" element={<Dashboard />} />
        <Route exact path="upload" element={<Upload />} />
        <Route exact path="transactions" element={<Transactions />} />
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

export default App;
