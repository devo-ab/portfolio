"use client"
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10 w-full">
      <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover font-medium">About</a>
          <a className="link link-hover font-medium">Contact</a>
          <a className="link link-hover font-medium">FAQ</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/devo-ab" target="_blank">
              <p className="text-2xl">
                <FaGithub />
              </p>
            </a>
            <a href="www.linkedin.com/in/imavijit" target="_blank">
              <p className="text-2xl">
                <FaLinkedin />
              </p>
            </a>
            <a href="https://wa.link/gzpn6b" target="_blank">
              <p className="text-2xl">
                <FaWhatsapp />
              </p>
            </a>
            <a href="https://www.facebook.com/imavijit0" target="_blank">
              <p className="text-2xl">
                <FaFacebook />
              </p>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © 2024 - All right reserved by{" "}
            <span className="font-bold">Avijit Biswas</span>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
