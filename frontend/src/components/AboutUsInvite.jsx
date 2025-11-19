import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { Link } from 'react-router-dom'; // Replace with <a> if not using react-router

const AboutUsSection = () => {
  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Animation for the button
  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: 'transparent',
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Animation for the icon
  const iconVariants = {
    hover: {
      y: [-2, 2, -2],
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <motion.section
      className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Icon Container */}
        <motion.div
          className="flex-shrink-0"
          variants={iconVariants}
          whileHover="hover"
        >
          <Info size={48} color="#A57F2F" className="drop-shadow-sm" />
        </motion.div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight fugaz">
            Get to Know Us
          </h2>
          <p className="text-gray-700 text-lg mb-6 max-w-md">
            Discover our passion, mission, and the story behind what drives us to
            create and innovate.
          </p>
          <motion.div
            variants={buttonVariants}
            whileHover=""
            whileTap="tap"
          >
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transition-shadow"
            >
              Explore Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUsSection;