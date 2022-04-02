import React from 'react'
import { Link } from 'react-router-dom'
// import logo from './images/black-icontext.png'

const children = "hello"

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-16 bg-whitetext-black
        relative shadow-sm' role='navigation'>
            <Link to='/' className='pl-8'>
                BlockVault
            </Link>
            <div className='px-4 cursor-pointer md:hidden'>
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
                <Link className="p-4" to='/dashboard'>Dashboard</Link>
                <Link className="p-4" to='/upload'>Upload</Link>
                <Link className="p-4" to='/transactions'>Transactions</Link>
                <button className="p-4 rounded-full" to='/sign-in'>{children}</button>                                
            </div>
        </nav>
        
    )
}

export default Navbar