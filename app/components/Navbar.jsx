'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';
import logo from '../../public/images/logo.png'


const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#email"
    }
]
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const closeNavbar = () => {
        if (navbarOpen) {
            setNavbarOpen(false);
        }
    };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100'>
        <div className='flex flex-wrap items-center justify-between  mx-auto px-10 py-8'>
            <Link href={"/"}>
                <Image src={logo} alt='header logo' width={130} height={130} />
            </Link>
            <div className='mobile-menu block md:hidden '>
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <MenuIcon className='h-5 w-5 '/>
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center  px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XIcon className='h-5 w-5' />
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto border-white' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                   {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} onClick={closeNavbar}/>
                        </li>
                   ))}
                </ul>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        </div>
    </nav>
  )
}

export default Navbar