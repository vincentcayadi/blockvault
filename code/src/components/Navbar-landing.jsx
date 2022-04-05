import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import logo from './images/blackIconText.png';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="font-manrope md:flex justify-between items-center bg-nord6 sticky top-0 z-20 select-none py-4 px-10 bg-opacity-0">
      <div className="flex items-center justify-between pl-8">
        <Link to="/" className="pl-8">
          <img src={logo} className="max-h-6 w-full" alt="blockvaultlogo"/>
        </Link>
        {showNav ? (
          <HiOutlineMenuAlt3
            onClick={() => setShowNav(!showNav)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        ) : (
          <HiOutlineMenuAlt2
            onClick={() => setShowNav(!showNav)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        )}
      </div>

      <ul
        className={
          (showNav ? "left-0" : "-left-full") +
          " md:static fixed bottom-0 top-12 md:flex md:space-x-7 items-center md:bg-transparent bg-nord3 bg-opacity-90 md:w-auto w-1/3 md:text-nord3 text-nord6 md:space-y-0 space-y-5 p-2 transition-left"
        }
      >
        <li className="md:p-0 py-4 items-center text-center md:hover:underline underline-offset-15">
          <Link className="md:p-4 p-8" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="md:p-0 py-4 items-center text-center md:hover:underline underline-offset-15">
          <Link className="md:p-4 p-8" to="/transactions">
            Transactions
          </Link>
        </li>
        <li className="p-3 items-center text-center rounded-xl bg-nord1 text-white font-semibold hover:scale-125 duration-300">
          <Link className="md:p-4 p-8" to="/sign-in">
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// {
//   /* <div className='px-4 cursor-pointer md:hidden' onClick={handleClick}>
//                 <svg className='w-6 h-6'
//                 xmlns="http://www.w3.org/2000/svg" 
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 stroke="currentColor" 
//                 strokeWidth={2}>
//                     <path strokeLinecap="round" 
//                     strokeLinejoin="round" 
//                     d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//             </div>
//             <div className="pr-8 md:block hidden">
//                 <Link className="p-4" to='/dashboard' onClick={closeMobileMenu}>Dashboard</Link>
//                 <Link className="p-4" to='/upload'>Upload</Link>
//                 <Link className="p-4" to='/transactions'>Transactions</Link>
//                 <button className="p-4 rounded-full" to='/sign-in'>{children}</button>                                
//             </div> */
// }

export default Navbar;
