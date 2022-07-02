import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useMoralis } from 'react-moralis';

export default function Transactions() {
  const { user, account, Moralis } = useMoralis();
  const username = user.get('ethAddress');

  async function getAverageGasPrices() {
    const results = await Moralis.Cloud.run('getAvgGas');
    console.log('Average user gas prices:', results);
  }

  function getStats() {
    if (user) {
      getUserTransactions(user);
    }
    getAverageGasPrices();
  }

  async function getUserTransactions(user) {
    const query = new Moralis.Query('EthTransactions');
    query.equalTo('from_address', user.get('ethAddress'));

    const subscription = await query.subscribe();
    handleNewTransaction(subscription);

    const results = await query.find();
    console.log('User Transactions:', results);
  }
  async function handleNewTransaction(subscription) {
    subscription.on('create', function (data) {
      console.log('new transaction: ', data);
    });
  }
  return (
    <>
      <Navbar />
      <body className="container select-none bg-nord6">
        <div>Hello</div>
        <div>{username}</div>
        <button onClick={getStats} id="btn-get-stats">
          Refresh Stats
        </button>
      </body>
      <Footer />
    </>
  );
}
