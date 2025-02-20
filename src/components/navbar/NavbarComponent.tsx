"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavbarComponent = () => {

    const pathName = usePathname();

    const navLinks =

        <>
            <Link href={'/'} className={pathName === '/' ? 'active text-base text-[#2A1454] underline font-bold' : ''}>
                <li className="font-bold"><a>Home</a></li>
            </Link>
            <Link href={'#about'} className={pathName === '#about' ? 'active text-base text-[#2A1454] underline font-bold' : ''}>
                <li className="font-bold"><a>About Me</a></li>
            </Link>
            <Link href={'/'} className={pathName === '/kk' ? 'active text-base text-[#2A1454] underline font-bold' : ''}>
                <li className="font-bold"><a>My Skills</a></li>
            </Link>
        </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <Link href={'/'}>
                        <p className="cursor-pointer text-xl font-bold text-[#2A1454]">Kowshik Chakraborty</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-r from-[#804BEA] to-[#40237B] text-white font-bold text-base">Contact Me</a>
                </div>
            </div>
        </div>
    );
};

export default NavbarComponent;