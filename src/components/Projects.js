import React from 'react';
import bg from './background.jpg';

const Projects = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-fixed bg-center"
      id="projects"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex flex-col items-center ] h-full">
        <h2 className="text-yellow-300 font-medium text-4xl md:text-6xl text-center mb-8 md:mb-12 border-b-4 md:border-b-8 border-[#1A1A1A] px-4">
          Projects
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 lg:space-x-12 px-4">
          <div className="border-4 border-gray-400 w-full md:w-96 h-96 rounded-xl shadow-md flex items-center justify-center mb-8 md:mb-0">
            <div className="text-center text-white">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Project 1
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Description of Project 1. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <a
                href="#"
                className="mt-4 bg-yellow-300 text-black px-4 py-2 rounded-md inline-block hover:bg-yellow-400 transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="border-4 border-gray-400 w-full md:w-96 h-96 rounded-xl shadow-md flex items-center justify-center mb-8 md:mb-0">
            <div className="text-center text-white">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Project 1
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Description of Project 1. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <a
                href="#"
                className="mt-4 bg-yellow-300 text-black px-4 py-2 rounded-md inline-block hover:bg-yellow-400 transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="border-4 border-gray-400 w-full md:w-96 h-96 rounded-xl shadow-md flex items-center justify-center mb-8 md:mb-0">
            <div className="text-center text-white">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Project 1
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Description of Project 1. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <a
                href="#"
                className="mt-4 bg-yellow-300 text-black px-4 py-2 rounded-md inline-block hover:bg-yellow-400 transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
