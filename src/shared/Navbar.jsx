"use client";
import Link from "next/link";
import React from "react";
import code from "../../public/assets/code.png";
import Image from "next/image";
import NavLink from "@/Utility/NavLink";

const navLinks = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "About",
    href: "about",
  },
  {
    title: "Skills",
    href: "skill",
  },
  {
    title: "Project",
    href: "project",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

const Navbar = () => {
  return (
    <div className="navbar bg-gray-700 bg-opacity-25 backdrop-filter backdrop-blur-sm z-10 fixed max-w-7xl">
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
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-1">
          <div>
            <Image src={code} alt="code" width={35}></Image>
          </div>
          <Link href={""}>
            <p className="text-3xl font-bold">
              A<span className="text-[#219C90]">B</span>
            </p>
          </Link>
        </div>
      </div>

      <div className="navbar-end space-x-12">
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:p-0 md:flex-row mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <a className="btn border-none bg-[#219C90] text-lg text-white hover:text-black">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
