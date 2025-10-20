import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Paintbrush,
  Ruler,
  Sofa,
  Building2,
  Lightbulb,
  Leaf,
  ChevronDown,
} from "lucide-react";
import Navbar from "../components/Navbar";

const services = [
  {
    icon: <Paintbrush size={40} className="text-[#8B4513]" />,
    title: "Interior Design",
    description:
      "We create beautiful, functional interiors that reflect your style and elevate your lifestyle.",
    subServices: [
      "Residential Interior Design",
      "Luxury Apartment Styling",
      "Home Renovation Consulting",
    ],
  },
  {
    icon: <Ruler size={40} className="text-[#8B4513]" />,
    title: "Space Planning",
    description:
      "Optimizing layout and flow to make every inch of your space purposeful and visually appealing.",
    subServices: [
      "3D Floor Layouts",
      "Room Flow Optimization",
      "Custom Partition Design",
    ],
  },
  {
    icon: <Sofa size={40} className="text-[#8B4513]" />,
    title: "Furniture & Decor",
    description:
      "Custom-selected furniture and decor pieces that complement your design vision perfectly.",
    subServices: [
      "Bespoke Furniture Design",
      "Color Palette Matching",
      "Art & Accessories Curation",
    ],
  },
  {
    icon: <Building2 size={40} className="text-[#8B4513]" />,
    title: "Commercial Projects",
    description:
      "From offices to showrooms, we design modern spaces that inspire productivity and creativity.",
    subServices: [
      "Corporate Office Interiors",
      "Retail Store Design",
      "Hospitality Space Layout",
    ],
  },
  {
    icon: <Lightbulb size={40} className="text-[#8B4513]" />,
    title: "Lighting Solutions",
    description:
      "We integrate creative lighting to enhance ambiance, depth, and the overall design mood.",
    subServices: [
      "Ambient Lighting",
      "Accent Lighting Design",
      "Smart Lighting Systems",
    ],
  },
  {
    icon: <Leaf size={40} className="text-[#8B4513]" />,
    title: "Sustainable Design",
    description:
      "Eco-friendly materials and methods to make your space both beautiful and environmentally responsible.",
    subServices: [
      "Recycled Materials Usage",
      "Energy-Efficient Layouts",
      "Eco-Certified Finishes",
    ],
  },
];

const ServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* Header Section */}
      <section className="bg-[#8B4513] text-white py-24 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Transforming spaces with creativity, craftsmanship, and modern design.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition-all border border-transparent hover:border-[#8B4513]/30"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {service.description}
              </p>

              {/* Accordion Toggle */}
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-center w-full text-[#8B4513] font-medium"
              >
                {activeIndex === index ? "Hide Details" : "View Details"}
                <ChevronDown
                  className={`ml-2 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 space-y-2 text-left"
                  >
                    {service.subServices.map((sub, i) => (
                      <li
                        key={i}
                        className="bg-[#8B4513]/5 text-gray-700 p-3 rounded-md border-l-4 border-[#8B4513]"
                      >
                        {sub}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#8B4513] text-white py-16 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Redefine Your Space?
        </motion.h2>
        <motion.p
          className="text-gray-200 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let’s bring your vision to life with design that inspires.
        </motion.p>
        <motion.button
          className="bg-white text-[#8B4513] font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </section>
    </div>
  );
};

export default ServicesPage;
