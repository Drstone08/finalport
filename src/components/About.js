import React from "react";
import bg from './background.jpg';

const About = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-fixed bg-center text-white flex items-center justify-center "
      id="about"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 w-10/12 max-w-5xl mx-auto text-center md:w-full bg-[#1A1A1A] rounded-2xl p-6">
        <h2 className="text-yellow-300 text-4xl font-bold tracking-wide uppercase mb-12">
          About
        </h2>
        <div className="flex flex-row items-center justify-center gap-12 md:flex-col">
          {/* Placeholder for "Me sitting with a laptop" */}
          <div className="w-1/3 md:w-full text-white font-semibold text-xl flex items-center justify-center bg-secondary rounded-md h-40">
            Me sitting with a laptop
          </div>
          <ul className="text-white flex flex-col gap-12 mt-7 md:mt-0 w-full">
            <li className="flex flex-row items-center rounded-lg p-6 bg-gradient-to-r from-[#a5d7e8]/42 to-transparent bg-no-repeat transition-all duration-400 hover:bg-[length:100%_100%] hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-400/30 hover:text-black md:p-4">
              {/* Placeholder for Cursor Icon */}
              <div className="mr-4 text-white font-semibold text-xl flex items-center justify-center bg-primary rounded-full w-16 h-16">
                Cursor
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Frontend Developer</h3>
                <p className="text-xl">
                  I'm a frontend developer with experience in building responsive
                  and optimized sites
                </p>
              </div>
            </li>
            <li className="flex flex-row items-center rounded-lg p-6 bg-gradient-to-r from-[#a5d7e8]/42 to-transparent bg-no-repeat transition-all duration-400 hover:bg-[length:100%_100%] hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-400/30 hover:text-black md:p-4">
              {/* Placeholder for Server Icon */}
              <div className="mr-4 text-white font-semibold text-xl flex items-center justify-center bg-primary rounded-full w-16 h-16">
                Server
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Backend Developer</h3>
                <p className="text-xl">
                  I have experience developing fast and optimized back-end systems
                  and APIs
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
