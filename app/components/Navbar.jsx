"use client";
import React, {useState} from 'react'
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import {styles} from "../styles"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import AboutImage from "@/src/logo_h.png";

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className={`${ styles.paddingX } w-full flex-row fixed top-0 py-3 z-20 bg-[#121212] border-b border-gray-200 dark:border-gray-600`}>
            <div className='max-w-screen-lg flex justify-between items-center mx-auto'>
                <Link href={"/"} className='text-5xl text-white font-semibold'>
                    <Image
                        src={AboutImage}
                        alt='AboutImage'
                        width={125}
                        height={38.5}
                        className='rounded-[30px]'
                    />
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ?
                            <button
                                onClick={() => setNavbarOpen(true)}
                                className='flex items-center px-3 py-2 border rounded
                         border-slate-200 text-slate-200 hover:text-white hover:border-white'
                            >
                                <Bars3Icon className='h-5 w-5'/>
                            </button> :
                            <button
                                onClick={() => setNavbarOpen(false)}
                                className='flex items-center px-3 py-2 border rounded
                         border-slate-200 text-slate-200 hover:text-white hover:border-white'
                            >
                                <XMarkIcon className='h-5 w-5'/>
                            </button>
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map((link, index) => (
                                <li key = {index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar