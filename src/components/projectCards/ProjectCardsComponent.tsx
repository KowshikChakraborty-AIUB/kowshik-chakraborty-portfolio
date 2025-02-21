"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProjectCardsComponent = () => {
    const router = useRouter();
    const [hovered, setHovered] = useState<number | null>(null);

    const [projects, setProjects] = useState([]);

    // Load projects from JSON
    useEffect(() => {
        fetch("/projectsInfo.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <section id="projects" className="min-h-screen mt-16">
            <div>
                <p className="text-4xl font-bold text-center bg-gradient-to-r from-[#804BEA] to-[#40237B] bg-clip-text text-transparent mb-4">My Recent Works</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24 p-8">
                    {projects.map((project: any) => (
                        <div
                            key={project.id}
                            className="relative w-[300px] h-[200px] rounded-xl overflow-hidden cursor-pointer"
                            onMouseEnter={() => setHovered(project.id)}
                            onMouseLeave={() => setHovered(null)}
                            onClick={() => router.push(`/projectDetails/${project.id}`)}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    width={0}
                                    height={0}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-90"
                                />
                            </div>

                            {/* Hover Overlay */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: hovered === project.id ? 1 : 0, y: hovered === project.id ? 0 : 20 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#804BEA] to-[#40237B] p-4 rounded-xl text-white"
                            >
                                <h3 className="text-lg font-bold">{project.title}</h3>
                                <p className="text-sm">{project.description}</p>
                                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl">↗</span>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectCardsComponent;