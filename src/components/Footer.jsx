import React from 'react';
import { FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <>
      <div className="px-12 py-4 mx-auto mt-12 border-b-2 select-none font-manrope bg-nord6 max-w-s font-mr border-nord5">
        <p className="inline-block text-sm font-bold ">BlockVault © 2022</p>
        <p className="inline-block px-4 text-xs text-nord2/25 ">
          Keep Your Data Secure
        </p>
        <a href="https://github.com/blockvaultdapp" className="inline-block">
          <FiGithub className="inline-block mx-0.5 text-s text-nord2/25 hover:text-nord2 duration-200" />
        </a>
      </div>
    </>
  );
};

export default Footer;
