"use client";
import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaNpm,
  FaReact,
} from "react-icons/fa";
import { IoLogoFirebase, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiReactrouter } from "react-icons/si";
import { motion } from "framer-motion";
const iconVariants = (duration) => ({
  initial: { y: -15 },
  animate: {
    y: [15, -15],
    transition: {
      duration: 6,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const iconVariants1 = (duration) => ({
  initial: { y: -20 },
  animate: {
    y: [20, -20],
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className="mt-10" id="skill">
      <p className="text-center text-lg">What I Do</p>
      <h1 className="text-4xl font-bold text-center">Skills</h1>

      <div className="mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* html */}
          <motion.div
            variants={iconVariants1(2.4)}
            initial="initial"
            animate="animate"
            className="px-6 py-4 bg-gradient-to-r from-[#fcb045] to-[#fd1d1d]  rounded-md cursor-pointer flex flex-col items-center justify-center"
          >
            <IoLogoHtml5 className="size-20 text-[#a32b0a]" />
            <h2 className="text-lg font-semibold text-white">HTML</h2>
          </motion.div>

          {/* css */}
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="px-6 py-4 bg-gradient-to-r from-[#1e3c72] to-[#2a5298]  rounded-md cursor-pointer flex flex-col items-center justify-center"
          >
            <FaCss3Alt className="size-20 text-[#264de4]" />
            <h2 className="text-lg font-semibold text-white">CSS</h2>
          </motion.div>

          {/* tailwind */}
          <motion.div
            variants={iconVariants1(1.5)}
            initial="initial"
            animate="animate"
            className="px-6 py-4  bg-gradient-to-r from-[#4dc0b5] to-[#3490de]  rounded-md cursor-pointer flex flex-col items-center justify-center"
          >
            <RiTailwindCssFill className="size-20 text-[#38B2AC]" />
            <h2 className="text-lg font-semibold text-white">Tailwind</h2>
          </motion.div>

          {/* bootstrap */}
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="px-6 py-4 bg-gradient-to-r from-[#6a3093] to-[#a044ff] rounded-md cursor-pointer flex flex-col items-center justify-center"
          >
            <FaBootstrap className="size-20 text-[#563d7c]" />
            <h2 className="text-lg font-semibold text-white">Bootstrap</h2>
          </motion.div>

          {/* javascript */}
          <motion.div
            variants={iconVariants1(4)}
            initial="initial"
            animate="animate"
            className="px-6 py-4 bg-gradient-to-r from-[#f7b733] to-[#fc4a1a] rounded-md cursor-pointer flex flex-col items-center justify-center"
          >
            <IoLogoJavascript className="size-20 text-[#F0DB4F]" />
            <h2 className="text-lg font-semibold text-white">JavaScript</h2>
          </motion.div>

          {/* react */}
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="px-6 py-4 bg-gradient-to-r from-[#61dafb] to-[#41b883]   rounded-md cursor-pointer flex flex-col items-center justify-center"
          >
            <FaReact className="size-20 text-[#46b5d3]" />
            <h2 className="text-lg font-semibold text-white">React</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
          {/* react Router dom */}
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="px-6 py-4 bg-gradient-to-r from-[#ca4245] to-[#f05e1b] #7151FC rounded-md cursor-pointer flex flex-col items-center justify-center"
          >
            <SiReactrouter className="size-20 text-[#ae282a]" />
            <h2 className="text-lg font-semibold text-white">React Router</h2>
          </motion.div>

          {/* next.js */}
          <motion.div
            variants={iconVariants1(2.4)}
            initial="initial"
            animate="animate"
            className="px-6 py-4 bg-gradient-to-r from-[#222121] to-[#414141] #7151FC rounded-md cursor-pointer flex flex-col items-center justify-center"
          >
            <RiNextjsFill className="size-20 text-[#000000]" />
            <h2 className="text-lg font-semibold text-white">NextJs</h2>
          </motion.div>

          {/* firebase */}
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="px-6 py-4 bg-gradient-to-r from-[#bb8823] to-[#f4b45a] rounded-md cursor-pointer flex flex-col items-center justify-center"
          >
            <IoLogoFirebase className="size-20 text-[#ffda76]" />
            <h2 className="text-lg font-semibold text-white">Firebase</h2>
          </motion.div>

          {/* node.js */}
          <motion.div
            variants={iconVariants1(2.4)}
            initial="initial"
            animate="animate"
            className="px-6 py-4 bg-gradient-to-r from-[#56ab2f] to-[#a8e063] #7151FC rounded-md cursor-pointer flex flex-col items-center justify-center"
          >
            <FaNodeJs className="size-20 text-[#4bb041]" />
            <h2 className="text-lg font-semibold text-white">NodeJs</h2>
          </motion.div>

          {/* express */}
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="px-6 py-4 bg-gradient-to-r from-[#2c3e50] to-[#bdc3c7] #7151FC rounded-md cursor-pointer flex flex-col items-center justify-center"
          >
            <SiExpress className="size-20 text-[#000000]" />
            <h2 className="text-lg font-semibold text-white">ExpressJs</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {/* mongodb */}
          <motion.div
            variants={iconVariants1(2)}
            initial="initial"
            animate="animate"
            className="px-6 py-4 bg-gradient-to-r from-[#4db33d] to-[#74c044] #7151FC rounded-md cursor-pointer flex flex-col items-center justify-center"
          >
            <DiMongodb className="size-20 text-[#198c07]" />
            <h2 className="text-lg font-semibold text-white">MongoDB</h2>
          </motion.div>

          {/* GitHub */}
          <motion.div
            variants={iconVariants(8)}
            initial="initial"
            animate="animate"
            className="px-6 py-4 bg-gradient-to-r from-[#000000] to-[#c9c1d5] #7151FC rounded-md cursor-pointer flex flex-col items-center justify-center"
          >
            <FaGithub className="size-20 text-[#000000]" />
            <h2 className="text-lg font-semibold text-white">GitHub</h2>
          </motion.div>

          {/* git */}
          <motion.div
            variants={iconVariants1(2)}
            initial="initial"
            animate="animate"
            className="px-6 py-4 bg-gradient-to-r from-[#f44d27] to-[#f44d27] #7151FC rounded-md cursor-pointer flex flex-col items-center justify-center"
          >
            <FaGitAlt className="size-20 text-[#4d1002]" />
            <h2 className="text-lg font-semibold text-white">Git</h2>
          </motion.div>
        </div>

        <div>
          {/* npm */}
          {/* <motion.div
          variants={iconVariants(3.4)}
          initial="initial"
          animate="animate"
          className="px-6 py-4 bg-gradient-to-l from-[#8b2a2a] to-[#DC2D35] #7151FC rounded-md cursor-pointer flex flex-col items-center justify-center"
        >
          <FaNpm className="size-20 text-[#151513]" />
          <h2 className="text-lg font-semibold">NPM</h2>
        </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
