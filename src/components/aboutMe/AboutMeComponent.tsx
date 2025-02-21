"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const AboutMeComponent = () => {
    return (
        <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900 mt-16">
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold text-center bg-gradient-to-r from-[#804BEA] to-[#40237B] bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>

                <motion.div
                    className="mt-8 flex items-center md:items-start flex-col md:flex-row gap-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        width={160}
                        height={160}
                        src="https://i.ibb.co/KKvPDbt/Kowshik.jpg"
                        alt="Your Name"
                        className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg border-4 border-[#8750F7]"
                    />

                    <div className="text-center md:text-left">
                        <p className="text-lg text-black dark:text-white leading-relaxed">
                            Hi! I&apos;m <span className="font-bold text-[#2A1454]">Kowshik Chakraborty</span>, a passionate MERN stack web developer with expertise in MongoDB, ReactJs, ExpressJs, NodeJs and also NextJs.
                            I love building interactive and user-friendly web applications that solve real-world problems.
                        </p>
                        <div className="mt-6 mb-1 flex items-center gap-2">
                            <FaBirthdayCake className="text-[#8750F7] text-lg" />
                            <p className="font-bold">Date of Birth: 09th August, 1999</p>
                        </div>
                        <div className="mb-1 flex items-center gap-2">
                            <IoIosMail className="text-[#8750F7] text-lg" />
                            <p className="font-bold">Email: kowshikchakraborty6@gmail.com</p>
                        </div>
                        <div className="mb-3 flex items-center gap-2">
                            <FaMapMarkerAlt className="text-[#8750F7] text-lg" />
                            <p className="font-bold">Address: Dhaka, Bangladesh</p>
                        </div>
                        <a
                            href="#contact"
                            className="inline-block mt-6 px-6 py-3 text-white font-bold rounded-lg shadow-lg bg-gradient-to-r from-[#804BEA] to-[#40237B]"
                        >
                            Let&apos;s Connect
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMeComponent;