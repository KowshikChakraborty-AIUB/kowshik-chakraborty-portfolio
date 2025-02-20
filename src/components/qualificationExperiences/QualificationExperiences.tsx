import React from 'react';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { PiGraduationCap } from 'react-icons/pi';

const QualificationExperiences = () => {
    return (
        <section id='qualification' className='mt-16'>
            <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center p-8">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Experience Section */}
                    <div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#804BEA] to-[#40237B] bg-clip-text text-transparent flex items-center gap-2">
                            <span className='text-[#804BEA]'><IoBriefcaseOutline /></span> My Experience
                        </h2>
                        <div className="mt-4 space-y-4">
                            {[
                                { year: "2024", title: "Assistant Teacher", place: "Arribs International School & College, Narayanganj" },
                                { year: "2022", title: "Internship", place: "American International University-Bangladesh" },
                                { year: "2023", title: "Next Level Web Development Course", place: "Programming Hero" },
                            ].map((exp, index) => (
                                <div key={index} className="group bg-white shadow-md rounded-lg p-4 hover:bg-gradient-to-r from-[#804BEA] to-[#40237B] hover:text-white">
                                    <p className="text-xl text-[#8750F7] group-hover:!text-white font-extrabold">{exp.year}</p>
                                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                                    <p className="text-xl">{exp.place}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#804BEA] to-[#40237B] bg-clip-text text-transparent flex items-center gap-2">
                            <span className='text-[#804BEA]'><PiGraduationCap /></span> My Education
                        </h2>
                        <div className="mt-4 space-y-4">
                            {[
                                { year: "2017 – 2023", title: "Bsc. in Computer Science & Engineering", place: "American International University-Bangladesh" },
                                { year: "2017", title: "HSC", place: "Hazi Misir Ali University College, Group: Science, Board: Dhaka" },
                                { year: "2015", title: "SSC", place: "Fatulla Pilot High School, Group: Science, Board: Dhaka" },
                            ].map((edu, index) => (
                                <div key={index} className="group bg-white shadow-md rounded-lg p-4 hover:bg-gradient-to-r from-[#804BEA] to-[#40237B] hover:text-white">
                                    <p className="text-xl text-[#8750F7] group-hover:!text-white font-extrabold">{edu.year}</p>
                                    <h3 className="text-2xl font-bold">{edu.title}</h3>
                                    <p className="text-xl">{edu.place}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualificationExperiences;