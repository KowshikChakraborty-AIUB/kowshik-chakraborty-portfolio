"use client"
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
                        <p className='text-lg text-white hover:underline cursor-pointer'>About me</p>
                        <p className='text-lg text-white hover:underline cursor-pointer'>My Skills</p>
                        <p className='text-lg text-white hover:underline cursor-pointer'>Qualifications & Experiences</p>
                        <p className='text-lg text-white hover:underline cursor-pointer'>Projects</p>
                        <p className='text-lg text-white hover:underline cursor-pointer'>Blogs</p>
                        <p className='text-lg text-white hover:underline cursor-pointer'>Contact</p>
                    </div>
                </nav>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </footer>
        </div>
    );
};

export default FooterComponent;