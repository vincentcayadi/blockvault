import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
// import logo from './images/black-icontext.png'

const children = "hello";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="md:flex justify-between items-center bg-white sticky top-0 z-20 select-none">
      <div className="flex items-center justify-between">
        <Link to="/" className="pl-8">
          BlockVault
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
          " md:static fixed bottom-0 top-12 md:flex md:space-x-7 items-center md:bg-transparent bg-gray-500 bg-opacity-90 md:w-auto w-10/12 md:text-gray-500 text-white md:space-y-0 space-y-5 p-2 transition-left"
        }
      >
        <li>
          <Link className="p-4" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="p-4" to="/upload">
            Upload
          </Link>
        </li>
        <li>
          <Link className="p-4" to="/transactions">
            Transactions
          </Link>
        </li>
        <li>
          <button className="p-4 rounded-full" to="/sign-in">
            {children}
          </button>
        </li>
      </ul>
    </nav>
  );
};

{
  /* <div className='px-4 cursor-pointer md:hidden' onClick={handleClick}>
                <svg className='w-6 h-6'
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}>
                    <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4" to='/dashboard' onClick={closeMobileMenu}>Dashboard</Link>
                <Link className="p-4" to='/upload'>Upload</Link>
                <Link className="p-4" to='/transactions'>Transactions</Link>
                <button className="p-4 rounded-full" to='/sign-in'>{children}</button>                                
            </div> */
}

export default Navbar;
