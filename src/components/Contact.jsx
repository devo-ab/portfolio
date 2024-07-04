"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Swal from 'sweetalert2';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w8x7zok', 'template_qw12pnk', form.current, {
        publicKey: 'F6vejV48aHOEgVBJ0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Email send successfully",
            showConfirmButton: false,
            timer: 1500
          });
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const email = e.target.email.value;
  //   const message = e.target.message.value;
  //   console.log(name, email, message)

  // };

  return (
    <div id="contact">
      <div className="mt-10">
        <p className="text-center text-lg">Get In Touch</p>
        <h1 className="text-4xl font-bold text-center">Contact Me</h1>

        <div className="flex flex-col md:flex-row items-center gap-10 mt-8">
          <div className="flex-1">
            <div>
              <h1 className="text-4xl font-bold">Get in touch</h1>
              <p className="mt-2">
                Lets collaborate on something great! Whether you are looking to start a new project
                or need assistance with an existing one, Im eager to hear from you. Reach out
                today, and lets make something awesome together!
              </p>
              <div className="mt-2">
                <p className="flex gap-2 items-center">
                  <FaPhoneAlt />
                  +8801312291092
                </p>
                <p className="flex gap-2 items-center">
                  {" "}
                  <MdEmail />
                  avijit0x@gmail.com
                </p>
              </div>

              <div className="flex gap-4 mt-2">
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
            </div>
          </div>

          <div className="flex-1">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
              <label className="block">
                <span className="mb-1">Full name</span>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  required
                  placeholder="Write your name"
                  className="block w-full rounded-md shadow-sm px-4 py-2 border border-gray-500"
                />
              </label>
              <label className="block">
                <span className="mb-1">Email address</span>
                <input
                name="from_email"
                  type="email"
                  id="email"
                  required
                  placeholder="Write your email"
                  className="block w-full rounded-md shadow-sm px-4 py-2 border border-gray-500"
                />
              </label>
              <label className="block">
                <span className="mb-1">Message</span>
                <textarea
                name="message"
                id="message"
                placeholder="Write your message"
                  rows="3"
                  className="block w-full rounded-md px-4 py-2 border border-gray-500"
                ></textarea>
              </label>
              {/* <button
                type="submit"
                className="px-8 py-3 text-lg rounded bg-[#219C90] btn btn-ghost text-white"
              >
                Submit
              </button> */}
              <input className="px-8 py-3 text-lg rounded bg-[#219C90] btn btn-ghost text-white hover:text-black" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
