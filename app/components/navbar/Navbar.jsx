"use client";
import React, {useState} from 'react'
import {Link, animateScroll as scroll} from "react-scroll";
import Image from "next/image";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import {styles} from "../../[locale]/styles"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import logoImage from "../../../src/logo_h.png";
import {useTranslations} from "next-intl";
import ChangeLanguageButton from "../../../app/components/navbar/ChangeLanguageButton";
import {generateNavLinks} from "./constants";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const t = useTranslations("Navbar");

    const navLinks = generateNavLinks(t);

    return (
        <nav className={`${ styles.paddingX } w-full flex-row fixed top-0 py-3 z-20 bg-[#121212] border-b border-gray-200 dark:border-gray-600`}>
            <div className='lg:max-w-[1400px] max-w-screen-lg flex justify-between items-center mx-auto'>
                <Link
                    to='/'
                    className='cursor-pointer text-5xl text-white font-semibold'>
                    <Image
                        src={logoImage}
                        alt='AboutImage'
                        className='md:w-[125px] md:h-[38.5px] w-[100px] h-[30.8px]'
                        onClick={() => scroll.scrollToTop()}
                    />
                </Link>

                <div className='mobile-menu block md:hidden'>
                    <div className="flex flex-row items-center gap-x-4">
                        <ChangeLanguageButton/>
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
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex flex-row items-center gap-x-8'>
                        {
                            navLinks.map((link, index) => (
                                <li key = {index}>
                                    <NavLink targetId={link.targetId} title={link.title} />
                                </li>
                            ))
                        }
                    <ChangeLanguageButton/>
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar