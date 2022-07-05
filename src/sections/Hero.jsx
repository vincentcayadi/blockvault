import React from 'react';
import Vault from './Vault';
import LearnMore from './LM';
import Wallet from './Wallet';

export const Hero = () => {
  return (
    <div className="container w-full subpixel-antialiased select-none font-manrope bg-nord6 dark:bg-nord0">
      <Vault />
      <LearnMore />
      <Wallet />
    </div>
  );
};

export default Hero;
