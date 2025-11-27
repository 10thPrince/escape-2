import React from 'react'
import { motion } from "framer-motion";
import { Palette, Hammer, Home, Sparkles } from "lucide-react"; // Lucide icons


const values = [
  {
    icon: <Palette size={40} className="text-primary" />,
    title: "Creative Design",
    description:
      "Every space we design reflects your personality — crafted with imagination and modern style.",
  },
  {
    icon: <Hammer size={40} className="text-primary" />,
    title: "Quality Craftsmanship",
    description:
      "We partner with expert artisans to ensure premium finishes and lasting quality in every project.",
  },
  {
    icon: <Home size={40} className="text-primary" />,
    title: "Functional Spaces",
    description:
      "Our designs blend beauty with practicality — ensuring comfort, flow, and purpose in every room.",
  },
  {
    icon: <Sparkles size={40} className="text-primary" />,
    title: "Modern Aesthetic",
    description:
      "Sleek, timeless, and elegant — our modern aesthetic elevates your environment effortlessly.",
  },
];

const WhyUs = () => {
  return (
     <section id="why-us" className="py-20 my-10 bg-gray-50 text-center">
      <motion.h2
        className="text-4xl font-bold mb-12 text-secondary fugaz"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Why Choose Escape LTD
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {value.title}
            </h3>
            <p className="text-gray-600">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WhyUs