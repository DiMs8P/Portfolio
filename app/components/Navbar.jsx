"use client";
import React, {useState, useTransition} from 'react'
import {Link, animateScroll as scroll} from "react-scroll";
import Image from "next/image";
import BaseLink from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import {styles} from "../[locale]/styles"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import logoImage from "@/src/logo_h.png";
import russianFlag from "@/src/russia.png";
import unitedStatesFlag from "@/src/united-states.png";
import {useRouter} from "next-intl/client";
import {useLocale} from "next-intl";

const LANGUAGE_DATA = [
    {
        id: "en",
        img: unitedStatesFlag
    },
    {
        id: "ru",
        img: russianFlag
    }
]

const navLinks = [
    {
        title: "About",
        targetId: "about",
    },
    {
        title: "Experience",
        targetId: "experience",
    },
    {
        title: "Projects",
        targetId: "projects",
    },
    {
        title: "Contact",
        targetId: "contact",
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const router = useRouter();
    const locale = useLocale();

    return (
        <nav className={`${ styles.paddingX } w-full flex-row fixed top-0 py-3 z-20 bg-[#121212] border-b border-gray-200 dark:border-gray-600`}>
            <div className='lg:max-w-[1400px] max-w-screen-lg flex justify-between items-center mx-auto'>
                <Link
                    to='/'
                    className='cursor-pointer text-5xl text-white font-semibold'>
                    <Image
                        src={logoImage}
                        alt='AboutImage'
                        className='w-[125px] h-[38.5px]'
                        onClick={() => scroll.scrollToTop()}
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
                                    <NavLink targetId={link.targetId} title={link.title} />
                                </li>
                            ))
                        }
                        <BaseLink href='/'>
                            <Image
                                src={LANGUAGE_DATA.find((t) => t.id === locale).img}
                                alt='AboutImage'
                                className='w-[30px] h-[30px]'
                                onClick={() => {
                                    locale === "en" ?
                                        router.replace('/ru', {locale: 'ru'}) :
                                        router.replace('/en', {locale: 'en'})
                                }}
                            />
                        </BaseLink>
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar