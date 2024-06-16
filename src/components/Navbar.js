import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bg-[#1A1A1A] text-white py-4 px-8 flex justify-between z-50"
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.4, type: "tween" },
      }}
    >
      <div className="flex items-center mr-4">
        <img src="/path/to/logo.png" alt="logo" className="h-12" />
      </div>
      <div className="flex items-center">
        <button
          className="md:hidden block text-yellow-300 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        {/* Full Menu for Medium Screens and Up */}
        <ul className="hidden md:flex justify-end px-3 space-x-10 text-lg cursor-pointer">
          <li className="hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* Dropdown Menu for Small Screens */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col w-full mt-4 space-y-4 text-lg">
          <li className="hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300">
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li className="hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300">
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li className="hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300">
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li className="hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300">
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li className="hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300">
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </motion.div>
  );
};

export default Navbar;
