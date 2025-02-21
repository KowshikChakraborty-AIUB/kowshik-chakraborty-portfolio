"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProjectDetailsComponent = (props: any) => {

    const { id } = props;

    const [project, setProject] = useState<any | null>(null);

    useEffect(() => {
        if (id) {
            fetch("/projectsInfo.json")
                .then((res) => res.json())
                .then((data) => {
                    const foundProject = data.find((p: any) => p.id === id);
                    setProject(foundProject || null);
                });
        }
    }, [id]);

    if (!project) return <p className="text-white text-center mt-10">Loading project details...</p>;

    return (
        <div className="p-8 min-h-screen">
            <h1 className="text-3xl font-bold text-center">{project.title}</h1>
            <p className="mt-4 text-lg">{project.details}</p>
            <Image width={0} height={0} src={project.image} alt={project.title} className="mt-6 w-full md:max-w-2xl mx-auto rounded-lg shadow-lg" />
            <div className="mt-6 flex flex-col md:flex-row justify-center gap-3">
                <Link legacyBehavior href={project.liveLink}>
                    <a className="btn bg-gradient-to-r from-[#804BEA] to-[#40237B] text-white font-bold text-base">Live View</a>
                </Link>
                <Link legacyBehavior href={project.githubFront}>
                    <a className="btn bg-gradient-to-r from-[#804BEA] to-[#40237B] text-white font-bold text-base">GitHub (Forntend)</a>
                </Link>
                <Link legacyBehavior href={project.githubBack}>
                    <a className="btn bg-gradient-to-r from-[#804BEA] to-[#40237B] text-white font-bold text-base">GitHub (Backend)</a>
                </Link>
            </div>
        </div>
    );
};

export default ProjectDetailsComponent;