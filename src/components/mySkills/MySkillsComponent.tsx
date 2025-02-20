"use client"
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "TypeScript", icon: <TbBrandTypescript className="text-blue-500" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <TbBrandNextjs className="text-black dark:text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
];

const MySkillsComponent = () => {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900 mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center bg-gradient-to-r from-[#804BEA] to-[#40237B] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="mt-3 text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MySkillsComponent;
