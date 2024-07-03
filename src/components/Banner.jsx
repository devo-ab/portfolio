"use client";
import Image from "next/image";
import React from "react";
import profile from "../../public/assets/Banner/Profile.png";

const Banner = () => {
  return (
    <div id="home" className="flex flex-col-reverse md:flex-row gap-5 md:gap-0 items-center justify-between mt-20">
      <div>
        <h2 className="text-3xl md:text-5xl font-bold">Hi! I am</h2>
        <h1 className="text-5xl md:text-7xl font-black mt-2 md:mt-3">Avijit Biswas</h1>
        <p className="text-2xl md:text-4xl font-semibold mt-1 md:mt-3">Front-end Developer</p>
        <p className="md:text-lg mt-1 md:mt-3 max-w-2xl">
          Transforming visions into captivating web interfaces with mastery in HTML, CSS, and
          JavaScript. Also expertly weaving MongoDB, Express.js, React.js, and Node.js into
          seamless, scalable applications.
        </p>
        <div className="flex gap-5 mt-4 md:mt-6">
          <button className="btn btn-ghost text-white hover:text-black bg-[#219C90]">
            <a href="/resume.pdf" rel="noopener noreferrer" download>
              Download Resume
            </a>
          </button>
          <button className="btn btn-ghost text-white hover:text-black bg-[#219C90]">
            Contact Me
          </button>
        </div>
      </div>
      <div>
        <Image src={profile} alt="Picture of Avijit" width={600}></Image>
      </div>
    </div>
  );
};

export default Banner;
