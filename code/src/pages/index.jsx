import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar-landing";

const Index = () => {
  return (
    <>
        <div className="absolute bg-nord6 right-0 top-0 sm:hidden">
          <svg width="846" height="749" viewBox="0 0 846 749" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M70.4613 184C1.66127 145.2 -13.5387 -10 10.9613 -62H912.461L968.461 742C905.128 751.167 756.261 758 667.461 712C556.461 654.5 555.854 616.797 525.961 551.5C493 479.5 442.5 433.5 339 433.5C269.457 433.5 226.182 366.365 206.961 313C160.5 184 156.461 232.5 70.4613 184Z" fill="#D8DEE9"/>
          </svg>
        </div>

        <div className="absolute top-16 sm:hidden">
          <svg width="190" height="405" viewBox="0 0 190 405" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dddddd_1_389)">
            <path d="M-2.5 5.21688C5.23502 0.751059 14.765 0.751058 22.5 5.21688L97.0929 48.2831C104.828 52.7489 109.593 61.0021 109.593 69.9338V156.066C109.593 164.998 104.828 173.251 97.0929 177.717L22.5 220.783C14.765 225.249 5.23502 225.249 -2.5 220.783L-77.0929 177.717C-84.8279 173.251 -89.5929 164.998 -89.5929 156.066V69.9338C-89.5929 61.0021 -84.8279 52.7489 -77.0929 48.2831L-2.5 5.21688Z" fill="#E5E9F0"/>
            </g>
            <defs>
            <filter id="filter0_dddddd_1_389" x="-169.593" y="0.571219" width="359.186" height="403.561" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1.85185"/>
            <feGaussianBlur stdDeviation="1.57407"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_389"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="8.14815"/>
            <feGaussianBlur stdDeviation="3.25926"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0117778 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_1_389" result="effect2_dropShadow_1_389"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="20"/>
            <feGaussianBlur stdDeviation="6.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.015 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_1_389" result="effect3_dropShadow_1_389"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="38.5185"/>
            <feGaussianBlur stdDeviation="12.7407"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0182222 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_1_389" result="effect4_dropShadow_1_389"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="64.8148"/>
            <feGaussianBlur stdDeviation="23.4259"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0227778 0"/>
            <feBlend mode="normal" in2="effect4_dropShadow_1_389" result="effect5_dropShadow_1_389"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="100"/>
            <feGaussianBlur stdDeviation="40"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
            <feBlend mode="normal" in2="effect5_dropShadow_1_389" result="effect6_dropShadow_1_389"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_1_389" result="shape"/>
            </filter>
            </defs>
          </svg>

        </div>
        <NavBar />
        <Hero/>
        <Footer/>
    </>
  );
};

export default Index;
