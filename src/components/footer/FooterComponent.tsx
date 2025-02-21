"use client"
import Link from 'next/link';
import React from 'react';

const FooterComponent = () => {
    return (
        <div>
            <footer className="footer footer-center bg-[#2A1454] text-primary-content p-10 mt-16 w-full">
                <aside>
                    <p className="text-3xl font-bold">
                        Kowshik Chakraborty
                    </p>
                </aside>
                <nav>
                    <div className="grid md:grid-flow-col gap-4">
                        <Link href={'#about'}>
                            <p className='text-lg text-white hover:underline cursor-pointer'>About me</p>
                        </Link>
                        <Link href={'#skills'}>
                            <p className='text-lg text-white hover:underline cursor-pointer'>My Skills</p>
                        </Link>
                        <Link href={'#qualification'}>
                            <p className='text-lg text-white hover:underline cursor-pointer'>Qualifications & Experiences</p>
                        </Link>
                        <Link href={'#projects'}>
                            <p className='text-lg text-white hover:underline cursor-pointer'>Projects</p>
                        </Link>
                        <p className='text-lg text-white hover:underline cursor-pointer'>Blogs</p>
                        <Link href={'#contact'}>
                            <p className='text-lg text-white hover:underline cursor-pointer'>Contact</p>
                        </Link>
                    </div>
                </nav>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </footer>
        </div>
    );
};

export default FooterComponent;