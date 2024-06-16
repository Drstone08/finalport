import React from 'react';
import bg from './background.jpg';
import './skill.css';

import ReactLogo from './skillimg/react.png';
import NodeLogo from './skillimg/node.png';
import MongoDBLogo from './skillimg/mongodb.png';
import FigmaLogo from './skillimg/figma.png';
import CLogo from './skillimg/c.png';
import CPlusPlusLogo from './skillimg/cpp.png';
import pasnai from './skillimg/psnai.png'
import tailwind from './skillimg/Tailwind.png'
import py from './skillimg/py.png'

const logos = [
  {
    alt: "React",
    src: ReactLogo
  },
  {
    alt: "Node",
    src: NodeLogo
  },
  {
    alt: "MongoDB",
    src: MongoDBLogo
  },
  {
    alt: "Figma",
    src: FigmaLogo
  },
  {
    alt: "C",
    src: CLogo
  },
  {
    alt: "C++",
    src: CPlusPlusLogo
  },
  {
    alt: "psnia",
    src: pasnai
  },
  {
    alt: "tail",
    src: tailwind
  },
  {
    alt: "py",
    src: py
  }
];

const Skills = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-fixed bg-center flex items-center justify-center"
      id="skills"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <h2 className="absolute text-yellow-300 text-4xl font-bold tracking-wide uppercase bg-[#1A1A1A] p-5 rounded-3xl">
          Skills
        </h2>
        <div className="relative w-[400px] h-[400px] skills-animation">
          {logos.map((logo, index) => {
            const radius = 300; // Radius of the circular layout
            const angle = (index / logos.length) * 360;
            const radian = (angle * Math.PI) / 180;
            const x = radius * Math.cos(radian);
            const y = radius * Math.sin(radian);
            return (
              <div
                key={index}
                className="absolute flex justify-center items-center w-28 h-28 bg-white rounded-full shadow-md"
                style={{
                  top: `calc(50% + ${y}px - 3rem)`, // Adjusted for larger size
                  left: `calc(50% + ${x}px - 3rem)`, // Adjusted for larger size
                  transform: `rotate(${angle}deg) translate(-50%, -50%)`
                }}
              >
                {logo.src ? (
                  <div>
                  <img src={logo.src} alt={logo.alt} className="max-h-20 object-contain " />
                  </div>
                ) : (
                  <div className="text-black">Logo</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
