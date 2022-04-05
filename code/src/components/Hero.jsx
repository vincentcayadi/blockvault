import React from "react";
import Vault from "../components/Vault";
import LearnMore from "../components/LM";
import Wallet from "../components/Wallet";

export const Hero = () => {
  return (
    <div class="select-none font-manrope subpixel-antialiased container bg-nord6 w-full overflow-x-hidden">
      <Vault/>
      <LearnMore />
      <Wallet />
    </div>
  );
};

export default Hero;
