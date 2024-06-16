import React from 'react';
import bg from './background.jpg';
import { useState, useEffect } from 'react';
import { useAnimate, stagger, motion } from 'framer-motion';
import './contact.css';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const items = ['Instagram', 'Linkdin', 'Github', 'Mail'];

  const staggerList = stagger(0.1, { startDelay: 0.25 });

  useEffect(() => {
    animate(
      'ul',
      {
        width: open ? 150 : 0,
        height: open ? 200 : 0,
        opacity: open ? 1 : 0,
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.4,
      }
    );
    items.forEach((_, index) => {
      animate(
        `li:nth-child(${index + 1})`,
        open
          ? { opacity: 1, scale: 1, x: 0 }
          : { opacity: 0, scale: 0.3, x: index % 2 === 0 ? -200 : 200 },
        {
          duration: 0.2,
          delay: open ? staggerList(index) : 0,
        }
      );
    });
  }, [open]);

  return (
    <section
      className="relative min-h-screen bg-cover bg-fixed bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div ref={scope} className="relative z-10 p-4">
        <div>
          <motion.button
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-yellow-300 text-black font-bold rounded-lg transition duration-300 hover:bg-red-600"
          >
            Contact
          </motion.button>
          <ul className="mt-4 list-none overflow-hidden flex flex-col items-start transition-all duration-400 ease-in-out" style={{ width: open ? '150px' : '0px', height: open ? '200px' : '0px', opacity: open ? 1 : 0 }}>
            {items.map((item, index) => (
              <motion.li
                key={index}
                className="bg-gray-100 p-2 px-9 mt-2 rounded-lg text-center text-gray-800 font-semibold transition-transform duration-200 ease-in-out"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.3, x: open ? 0 : (index % 2 === 0 ? -50 : 50) }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
