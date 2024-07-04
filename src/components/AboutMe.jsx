"use client";
import React from "react";
import { FaUserGraduate } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <div className="mt-10" id="about">
      <p className="text-center text-lg">Get To Know</p>
      <h1 className="text-4xl font-bold text-center">About Me</h1>

      <div className="mt-5">
        <div className="">
          <p className="md:text-lg">
            I'm Avijit Biswas, a dedicated Front End Developer passionate about transforming ideas into seamless digital experiences. With a strong command of HTML, CSS, Tailwind CSS, and JavaScript, I specialize in crafting sleek and responsive user interfaces that captivate and engage users.
          </p>

          <p className="md:text-lg">
            My journey into web development extends to React for dynamic application development and Firebase for real-time database management. I'm also well-versed in backend technologies like Express.js and MongoDB, ensuring that my projects are not only visually appealing but also robust and scalable.
          </p>

          <p className="md:text-lg hidden md:block">
            I thrive on challenges and am committed to continuous learning, constantly exploring new technologies to expand my skill set.I believe in technology's transformative power and am eager to contribute to innovative projects, confident in my ability to tackle new challenges and excel within any development team. Let's collaborate and innovate
            together to create impactful solutions in the ever-evolving tech landscape!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-5">
          {/* experience section */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Technical Experience</h1>
            <div className="mt-3">
              <p className="text-xl font-bold">N/A</p>
            </div>
          </div>

          {/* education section */}
          <div>
            <h1 className="text-2xl font-bold">Education</h1>
            <div className="mt-3">
              <div className="flex flex-col md:flex-row gap-3 max-w-2xl">
                <div className="flex items-center gap-4 border-2 border-gray-300 p-4 w-full">
                  <p className="text-6xl">
                    <FaUserGraduate />
                  </p>
                  <div className="font-semibold">
                    <p>Bachelor of Science in Computer Science and Engineering(CSE)</p>
                    <p>Prime University</p>
                    <p>February 2020 - March 2024</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-2 border-gray-300 p-4 md:w-full lg:w-[550px]">
                  <p className="text-6xl">
                    <FaUserGraduate />
                  </p>
                  <div className="font-semibold">
                    <p>Higher Secondary Certificate</p>
                    <p>Mirpur College</p>
                    <p>April 2017 - July 2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
