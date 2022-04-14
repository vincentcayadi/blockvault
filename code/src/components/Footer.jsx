import React from 'react';
import ghl from '../components/images/ghl.png';

const Footer = () => {
  return (
    <>
      <div className="container px-12 py-4 mx-auto my-12 border-b-2 select-none bg-nord6 max-w-s font-mr border-nord5 dark:bg-nord0">
        <p className="inline-block text-sm font-bold dark:text-nord6">
          BlockVault
        </p>
        <p className="inline-block px-4 text-xs text-nord2/25 dark:text-nord6">
          Keep Your Data Secure
        </p>
        <a
          className="inline-block p-0 m-0"
          href="https://github.com/Vincent-Cayadi/blockvault"
        >
          <img src={ghl} alt="github logo" />
        </a>
      </div>
    </>
  );
};

export default Footer;
