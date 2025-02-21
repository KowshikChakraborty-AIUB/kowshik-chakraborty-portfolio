"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const HeroSectionComponent = () => {
    return (
        <div>
            <div className="hero min-h-screen mt-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image width={437} height={475}
                        src="https://i.ibb.co/KKvPDbt/Kowshik.jpg"
                        alt='My Profile Photo'
                        className="shadow-2xl rotate-[4.29deg] hover:rotate-0 transition-all duration-300 rounded-[38px]" />
                    <div>
                        <h1 className="text-5xl font-bold text-[#2A1454]">Kowshik Chakraborty</h1>
                        <p className='mt-3 text-6xl font-bold bg-gradient-to-r from-[#804BEA] to-[#40237B] bg-clip-text text-transparent'>
                            Mern Stack Developer
                        </p>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className='flex items-center gap-5'>
                            <button className="btn text-base font-bold rounded-3xl px-9 bg-white border border-[#8750F7] text-[#8750F7] hover:bg-[#8750F7] hover:text-white">
                                <a className='flex gap-2 items-center' href="/KowshikChakrabortyCV.pdf" download="KowshikChakrabortyCV.pdf">
                                    Download CV
                                    <FaDownload />
                                </a>
                            </button>
                            <Link href={'https://github.com/kowshikchakraborty-aiub'}>
                                <FaGithub className='bg-white text-[#8750F7] border border-[#8750F7] rounded-full w-10 h-10 px-2 hover:bg-[#8750F7] hover:text-white cursor-pointer' />
                            </Link>
                            <Link href={'https://www.linkedin.com/in/kowshik-chakraborty/'}>
                                <FaLinkedin className='bg-white text-[#8750F7] border border-[#8750F7] rounded-full w-10 h-10 px-2 hover:bg-[#8750F7] hover:text-white cursor-pointer' />
                            </Link>
                            <Link href={'https://www.facebook.com/profile.php?id=100009473225157'}>
                                <FaFacebook className='bg-white text-[#8750F7] border border-[#8750F7] rounded-full w-10 h-10 px-2 hover:bg-[#8750F7] hover:text-white cursor-pointer' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionComponent;