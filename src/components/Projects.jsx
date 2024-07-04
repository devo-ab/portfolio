"use client";
import React from "react";
import learnEase from "../../public/assets/projects/learnEaseHalf.png";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import blogHero from "../../public/assets/projects/blogHeroHalf.png"
import artAvero from "../../public/assets/projects/artAveroHalf.png"

const Projects = () => {
  return (
    <div className="mt-10" id="project">
      <p className="text-center text-lg">My Recent Work</p>
      <h1 className="text-4xl font-bold text-center">Projects</h1>

      <div className="mt-8 flex flex-col lg:flex-row gap-4">
        {/* projects 1 */}
        <div className="border border-gray-600 rounded p-5">
          <Image src={learnEase} alt="learn-ease" className="w-96"></Image>
          <p className="text-xl font-bold">Learn Ease</p>
          <p>
            <span className="font-bold mt-1">Used Technology :</span> React, Tailwind, Firebase,
            ExpressJS, MongoDB
          </p>
          <p>
            <span className="font-bold mt-1">Description:</span> This website is learning based
            educational website.Here user find many courses and they can learn from here by
            enrolling any course
          </p>
          <div>
            <p>
              <span className="font-bold mt-1">Features:</span>
            </p>
            <ul>
              <li>
                1. every user can be teacher,thats why they need to apply for teacher role and after
                admin approve they will be teacher.
              </li>
              <li>2. student need to payment to enroll a class.</li>
              <li>3. Teacher can add assignment for the student of a specipic his/her class.</li>
            </ul>
          </div>

          <div className="mt-3 flex gap-3">
            <a
              className="flex bg-gray-600 px-4 py-2 text-white items-center gap-2 w-fit rounded"
              href="https://learn-ease-ccdbe.web.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit{" "}
              <span>
                <FaExternalLinkAlt />
              </span>
            </a>

            <a
              className="flex bg-gray-600 px-4 py-2 text-white items-center gap-2 w-fit rounded"
              href="https://github.com/devo-ab/learn-ease-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaGithub />
              </span>
              Client
              <span>
                <FaExternalLinkAlt />
              </span>
            </a>

            <a
              className="flex bg-gray-600 px-4 py-2 text-white items-center gap-2 w-fit rounded"
              href="https://github.com/devo-ab/learn-ease-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaGithub />
              </span>
              Server
              <span>
                <FaExternalLinkAlt />
              </span>
            </a>
          </div>
        </div>

        {/* projects-2 */}
        <div className="border border-gray-600 rounded p-5">
          <Image src={blogHero} alt="learn-ease" className="w-96"></Image>
          <p className="text-xl font-bold">Blog Hero</p>
          <p>
            <span className="font-bold mt-1">Used Technology :</span> React, Tailwind, Flowbite, Firebase,
            ExpressJS, MongoDB
          </p>
          <p>
            <span className="font-bold mt-1">Description:</span> This is a blog website,here user can post bolg and read blog.User can update and also delete their blog.
          </p>
          <div>
            <p>
              <span className="font-bold mt-1">Features:</span>
            </p>
            <ul>
              <li>
                1. User friendly design to ensure that the website is easy to navigate and provides a pleasant user experience.
              </li>
              <li>2. If any can interrest but they not had enough time to read.They can wishlist blog to read letter.</li>
              <li>3. User can update their blog after post.</li>
            </ul>
          </div>

          <div className="mt-3 flex gap-3">
            <a
              className="flex bg-gray-600 px-4 py-2 text-white items-center gap-2 w-fit rounded"
              href="https://blog-hero-c02f7.web.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit{" "}
              <span>
                <FaExternalLinkAlt />
              </span>
            </a>

            <a
              className="flex bg-gray-600 px-4 py-2 text-white items-center gap-2 w-fit rounded"
              href="https://github.com/devo-ab/blog-hero-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaGithub />
              </span>
              Client
              <span>
                <FaExternalLinkAlt />
              </span>
            </a>

            <a
              className="flex bg-gray-600 px-4 py-2 text-white items-center gap-2 w-fit rounded"
              href="https://github.com/devo-ab/blog-hero-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaGithub />
              </span>
              Server
              <span>
                <FaExternalLinkAlt />
              </span>
            </a>
          </div>
        </div>

        {/* project-3 */}
        <div className="border border-gray-600 rounded p-5">
          <Image src={artAvero} alt="learn-ease" className="w-96"></Image>
          <p className="text-xl font-bold">Art Avero</p>
          <p>
            <span className="font-bold mt-1">Used Technology :</span> React, Tailwind, Firebase,
            ExpressJS, MongoDB
          </p>
          <p>
            <span className="font-bold mt-1">Description:</span> Its is Art sell website, here user can sell their art and aslo buy art from other user.
          </p>
          <div>
            <p>
              <span className="font-bold mt-1">Features:</span>
            </p>
            <ul>
              <li>
                1.Implement dark theme to make more user friendly.
              </li>
              <li>2. User can add their art and craft to sell, and they can update the details any time the owner o art and craft.</li>
              <li>3. user can review about the art and craft, feedback take positively to improve.</li>
            </ul>
          </div>

          <div className="mt-3 flex gap-3">
            <a
              className="flex bg-gray-600 px-4 py-2 text-white items-center gap-2 w-fit rounded"
              href="https://art-avero.web.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit{" "}
              <span>
                <FaExternalLinkAlt />
              </span>
            </a>

            <a
              className="flex bg-gray-600 px-4 py-2 text-white items-center gap-2 w-fit rounded"
              href="https://github.com/devo-ab/art-avero-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaGithub />
              </span>
              Client
              <span>
                <FaExternalLinkAlt />
              </span>
            </a>

            <a
              className="flex bg-gray-600 px-4 py-2 text-white items-center gap-2 w-fit rounded"
              href="https://github.com/devo-ab/art-avero-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaGithub />
              </span>
              Server
              <span>
                <FaExternalLinkAlt />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
