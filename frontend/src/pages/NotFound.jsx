import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingSocials from '../components/FloatingSocials'
import { Link } from 'react-router-dom'; // Optional: for client-side routing
import logo from '../assets/escape_logo-removebg-preview.png'; // Your company logo path
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <>
      <FloatingSocials />
      <Navbar />
      <div className="min-h-screen bg-[#1a1a1a] flex items-center border-b border-primary justify-center px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Escape LTD"
            className="w-32 mx-auto object-contain"
          />

          {/* 404 Message */}
          <h1 className="text-5xl md:text-7xl font-bold text-white">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Oops! It looks like the page you're looking for doesn't exist or has been
            moved. Let's get you back to safety.
          </p>

          {/* Back to Home Button */}
          <Link
            to={`/`}
            className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-black transition duration-300"
          >
            Return to Homepage
          </Link>
        </motion.div>
      </div>
      <Footer />
    </>
  )
}

export default NotFound