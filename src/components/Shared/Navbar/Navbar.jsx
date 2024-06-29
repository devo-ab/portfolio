import Link from "next/link";
import React from "react";
import code from "../../../../public/assets/code.png";
import Image from "next/image";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
    },
    {
      title: "About",
    },
    {
      title: "Skills",
    },
    {
      title: "Project",
    },
    {
      title: "Contact",
    },
  ];

  return (
    <div className="navbar bg-gray-700 bg-opacity-40 backdrop-filter backdrop-blur-sm z-10 fixed max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-auto">
            {navLinks.map((link) => (
              <p key={link.title}>{link.title}</p>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-1">
          <div>
            <Image src={code} alt="code"  width={35}></Image>
          </div>
          <a className="text-3xl font-bold">AB</a>
        </div>
      </div>

      <div className="navbar-end space-x-12">
        <div className="hidden lg:flex">
          <ul className="flex space-x-12">
            {navLinks.map((link) => (
              <p className="text-lg" key={link.title}>{link.title}</p>
            ))}
          </ul>
        </div>
        <div>
          <a className="btn border-none bg-[#219C90] text-lg text-white hover:text-black">Hire Me</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
