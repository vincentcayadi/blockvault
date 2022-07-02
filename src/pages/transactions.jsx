import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useMoralis } from 'react-moralis';

export default function Transactions() {
  return (
    <>
      <Navbar />
      <body className="container select-none bg-nord6">
        <div>Hello</div>
        <div></div>
        <button id="btn-get-stats">Refresh Stats</button>
      </body>
      <Footer />
    </>
  );
}
