import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bottom-0 left-0 right-0 bg-[#1A1A1A] text-white py-4 px-8 flex justify-center items-center z-50"
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.4, type: "tween" },
      }}
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Your Website. All Rights Reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
