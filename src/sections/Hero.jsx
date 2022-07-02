import React from 'react';
import Vault from './Vault';
import LearnMore from './LM';
import Wallet from './Wallet';

export const Hero = () => {
  return (
    <div class="select-none font-manrope subpixel-antialiased container bg-nord6 dark:bg-nord0 w-full overflow-x-hidden">
      <Vault />
      <LearnMore />
      <Wallet />
    </div>
  );
};

export default Hero;
