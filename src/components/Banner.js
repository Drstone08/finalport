import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
} from "react-icons/fa";
import bg from "./background.jpg";
import "./ban.css";
import { motion } from "framer-motion";

const Banner = () => {
  const words = ["Web designer", "Frontend Developer", "Content Creator"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showWord, setShowWord] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowWord(false);

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) =>
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
        setShowWord(true);
      }, 500);

    }, 3000);

    return () => clearInterval(interval);
  }, [currentWordIndex]);
  const text = "Arunav Gawri".split("");
  return (
    <section
      className="relative min-h-screen bg-cover bg-fixed bg-center"
      id="home"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-32 p-8 pt-36 text-slate-50 font-roboto-mono">
        <div className="text-left p-8 rounded-lg shadow-md z-10">
          <p className="text-4xl font-semibold drop-shadow-md my-4">Hola, es</p>
          {text.map((el, i) => (
            <motion.span className="text-6xl font-semibold drop-shadow-lg my-4 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 10,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{""}
            </motion.span>
          ))}
          <hr className="border-2 border-[#FFD700] my-8" />
          <p className="max-w-lg drop-shadow-sm my-4 text-2xl">
            An undergraduate at NIT Kurukshetra
          </p>
          <div className="word-container">
            <div className={`words ${showWord ? '' : 'hidden'}`}>
              {words[currentWordIndex]}
            </div>
          </div>
          <div className="mt-8 flex space-x-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD700] transition-colors duration-300"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD700] transition-colors duration-300"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD700] transition-colors duration-300"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD700] transition-colors duration-300"
            >
              <FaFileDownload className="text-3xl" />
            </a>
          </div>
        </div>
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 z-10 heroImg">
          <div
            className="absolute inset-0 heroContainer border-2 border-[#FFD700]"
            style={{ borderRadius: "50%" }}
          >
            <div className="w-full h-full bg-opacity-50 flex items-center rounded-full justify-center overflow-hidden">
              <img
                src=""
                alt="Arunav Gawri"
                className="w-full h-full object-cover"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
