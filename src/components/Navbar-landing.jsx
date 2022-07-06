import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from 'react-icons/hi';
import darklighticon from '../images/darklighttoggle.svg';
import lightdarkicon from '../images/lightdarktoggle.svg';
import darklogo from '../graphics/icontext/black-icontext.png';
import lightlogo from '../graphics/icontext/eceff4-icontext.png';
import './navbar-hover.css';

const Navbar = () => {
  // const iconRef = useRef();
  // const logoRef = useRef();
  // if (localStorage.theme === 'dark') {
  //   if (iconRef.current) iconRef.current.src = darklighticon;
  //   if (logoRef.current) logoRef.current.src = lightlogo;
  // } else {
  //   if (iconRef.current) iconRef.current.src = lightdarkicon;
  //   if (logoRef.current) logoRef.current.src = darklogo;
  // }
  const [showNav, setShowNav] = useState(false);
  // const toggletheme = () => {
  //   if (document.documentElement.classList.contains('dark')) {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.theme = 'light';
  //     if (iconRef.current) iconRef.current.src = lightdarkicon;
  //     if (logoRef.current) logoRef.current.src = darklogo;
  //   } else {
  //     document.documentElement.classList.add('dark');
  //     localStorage.theme = 'dark';
  //     if (iconRef.current) iconRef.current.src = darklighticon;
  //     if (logoRef.current) logoRef.current.src = lightlogo;
  //   }
  // };

  return (
    <nav className="sticky top-0 z-20 items-center justify-between px-10 py-4 bg-opacity-0 select-none font-manrope md:flex bg-nord6">
      <div className="flex items-center justify-between">
        <Link to="/" className="pl-8 md-6">
          <img
            // src={localStorage.theme === 'dark' ? darklogo : lightlogo}
            src={darklogo}
            className="w-full max-h-6"
            // ref={logoRef}
            alt="logo"
          />
        </Link>
        {showNav ? (
          <HiOutlineMenuAlt3
            onClick={() => setShowNav(!showNav)}
            className="block w-10 h-10 p-2 cursor-pointer md:hidden"
          />
        ) : (
          <HiOutlineMenuAlt2
            onClick={() => setShowNav(!showNav)}
            className="block w-10 h-10 p-2 cursor-pointer md:hidden"
          />
        )}
      </div>

      <ul
        className={
          (showNav ? 'left-0' : '-left-full') +
          ' md:static fixed bottom-0 top-16 md:flex md:space-x-7 items-center md:bg-transparent bg-nord3 bg-opacity-90 md:w-auto w-full md:text-nord3 text-nord6 md:space-y-0 space-y-5 p-2 transition-left sm:p-7'
        }
      >
        <li className="items-center py-4 text-center rounded-md md:p-0 sm:hover:bg-nord1 dark:text-nord6">
          <Link className="navbar-underline" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="items-center py-4 text-center rounded-md md:p-0 sm:hover:bg-nord1 dark:text-nord6">
          <Link className="navbar-underline" exact to="/transactions">
            Transactions
          </Link>
        </li>

        {/* <li className="items-center py-4 text-center rounded-md md:p-0 sm:hover:bg-nord1 dark:text-nord6">
          <img
            src={localStorage.theme === 'dark' ? darklighticon : lightdarkicon}
            ref={iconRef}
            onClick={toggletheme}
            className="m-auto"
            alt="logo"
          />
        </li> */}
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
//             <div className="hidden pr-8 md:block">
//                 <Link className="p-4" to='/dashboard' onClick={closeMobileMenu}>Dashboard</Link>
//                 <Link className="p-4" to='/upload'>Upload</Link>
//                 <Link className="p-4" to='/transactions'>Transactions</Link>
//                 <button className="p-4 rounded-full" to='/sign-in'>{children}</button>
//             </div> */
// }

export default Navbar;
