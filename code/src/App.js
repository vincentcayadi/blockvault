import { Link, Routes, Route } from "react-router-dom";
import { Button } from "@mantine/core";
import Hero from "./components/Hero";
// Pages
import Dashboard from "./pages/dashboard";
import Upload from "./pages/upload";
import Transactions from "./pages/transactions";
import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, fetch()); // Use fetch to get data from API or render the website https://www.youtube.com/watch?v=SR8755C0bME
  }, []);
  return (
    <>
      {loading ? (
        <ReactLoading
          type={"cubes"}
          color={"FFFFF"}
          height={"20%"}
          width={"20%"}
          loading={loading}
        />
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route exact path="upload" element={<Upload />} />
          <Route exact path="transactions" element={<Transactions />} />
        </Routes>
      )}
    </>
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
