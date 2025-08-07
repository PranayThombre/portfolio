import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiRedux, SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { BiLogoNetlify } from "react-icons/bi";

import "./Skill.css"; // Keep your CSS

const Skill = () => {
  return (
    <section className="skill">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-bold no-underline border-none">Uses</h1>
        <p className="text-center max-w-xl mx-auto text-base font-semibold text-gray-600 dark:text-gray-300">
          A somewhat comprehensive list of tools, apps, and more that I use on a
          daily basis to design and code things.
        </p>
      </motion.div>

      {/* ✅ Frontend: 4 icons per row */}
      <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0 }}
    viewport={{ once: true }}
  >
        <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Frontend
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 text-8xl">
          <SkillItem
            icon={<FaHtml5 className="text-orange-600 text-6xl" />}
            label="HTML5"
          />
          <SkillItem
            icon={<FaCss3Alt className="text-blue-600 text-6xl" />}
            label="CSS3"
          />
          <SkillItem
            icon={<FaJs className="text-yellow-400 text-6xl" />}
            label="JavaScript"
          />
          <SkillItem
            icon={<FaBootstrap className="text-purple-600 text-6xl" />}
            label="Bootstrap"
          />
          <SkillItem
            icon={<FaReact className="text-cyan-400 text-6xl" />}
            label="React"
          />
          <SkillItem
            icon={<SiTailwindcss className="text-sky-500 text-6xl" />}
            label="Tailwind"
          />
          <SkillItem
            icon={<SiRedux className="text-indigo-500 text-6xl" />}
            label="Redux"
          />
          <SkillItem
            icon={<RiNextjsFill className="text-black  text-6xl" />}
            label="Next.js"
          />
        </div>
      </motion.div>

      {/* 🔒 Backend - untouched */}
       <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.5 }}
    viewport={{ once: true }}
  >
        <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Backend
        </h2>
        <div className="category">
          <SkillItem
            icon={<FaNodeJs className="text-green-600 text-6xl" />}
            label="Node.js"
          />
          <SkillItem
            icon={<SiExpress className="text-black  text-6xl" />}
            label="Express.js"
          />
          <SkillItem
            icon={<SiFirebase className="text-yellow-500 text-6xl" />}
            label="Firebase"
          />
          <SkillItem
            icon={<DiMongodb className="text-green-700 text-6xl" />}
            label="MongoDB"
          />
        </div>
      </motion.div>

      {/* 🔒 Tools - untouched */}
       <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 3 }}
    viewport={{ once: true }}
  >
        <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Tools & Platform
        </h2>
        <div className="category">
          <SkillItem
            icon={<FaGitAlt className="text-orange-500 text-6xl" />}
            label="Git"
          />
          <SkillItem
            icon={<FaGithub className="text-gray-800  text-6xl" />}
            label="GitHub"
          />
          <SkillItem
            icon={<VscVscode className="text-blue-500 text-6xl" />}
            label="VS Code"
          />
          <SkillItem
            icon={<BiLogoNetlify className="text-green-500 text-6xl" />}
            label="Netlify"
          />
        </div>
      </motion.div>
    </section>
  );
};

const SkillItem = ({ icon, label }) => (
  <div className="icon-box">
    <div className="text-3xl">{icon}</div>
    <span>{label}</span>
  </div>
);

export default Skill;
