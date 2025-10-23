import React from "react";
import { motion } from "framer-motion";
import heroBg from '../assets/hero-bg.png';
import heroBg1 from '../assets/hero-1.jpeg';
import home2 from '../assets/home2.jpg'
import heroBg2 from '../assets/hero-2.jpg';
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (


    <section
      className="relative min-h-screen bg-cover bg-center flex flex-col py-5 my-auto items-center justify-center text-center"

    >
      {/* First image */}

      <img src={home2}
        className="h-[90vh] object-cover w-full  object-center  top-0 left-0 -z-10 " alt="" />


      {/* Content */}
      {/* <motion.div
        className="relative z-10 max-w-3xl my-10 text-black px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-medium mb-6 fugaz"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Transforming Spaces Into <span className="text-primary">Timeless</span>  Designs
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl my-8 text-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          At Escape LTD, we believe every space tells a story. Through creativity, craftsmanship, and attention to detail, we transform ordinary environments into extraordinary experiences. From residential comfort to commercial elegance, we design interiors that inspire connection, warmth, and lasting beauty.
        </motion.p>

        <motion.button
          className="bg-white border-[#A57F2F] border-1 text-[#A57F2F] cursor-pointer px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/projects">
            Explore Our Work
          </Link>

        </motion.button>
      </motion.div> */}
    </section>
  );
};

export default Hero;
