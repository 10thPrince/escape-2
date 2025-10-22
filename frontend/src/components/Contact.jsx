import React from "react";
import { motion } from "framer-motion";
import contactImage from "../assets/hero-bg.png";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <div
      style={{ backgroundImage: `url(${contactImage})` }}
      className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center overflow-hidden"
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-start text-white space-y-5 max-w-3xl px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="block fugaz"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ready to Elevate
          </motion.span>
          <motion.span
            className="block fugaz"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Your Space?
          </motion.span>
        </motion.h1>

        {/* Contact Button */}
        <motion.a
          href="/contact"
          className="inline-flex px-4 items-center text-2xl font-light underline  hover:decoration-white transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ x: 10, scale: 1.05 }}
          transition={{
            duration: 0.4,
            delay: 0.8,
            ease: "easeOut",
          }}
        >
          Contact Us
          <motion.div
            className="ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight size={35} />
          </motion.div>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Contact;
