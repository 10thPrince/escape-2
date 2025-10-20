import React from "react";
import { motion } from "framer-motion";
import heroBg from '../assets/hero-bg.png';
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    

    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay for dark tint */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl text-white px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Transforming Spaces Into Timeless Designs
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Discover the art of interior design with Escape LTD — where creativity meets comfort.
        </motion.p>

        <motion.button
          className="bg-white text-[#8B4513] cursor-pointer px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/projects">
            Explore Our Work
          </Link>

        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
