import React from 'react';
import Footer from '../components/Footer';
import { useMoralis } from 'react-moralis';

export default function Transactions() {
  return (
    <>
      <body className="container select-none bg-nord6">
        <div>Hello</div>
        <div></div>
        <button id="btn-get-stats">Refresh Stats</button>
      </body>
      <Footer />
    </>
  );
}
