import { motion } from "framer-motion";
import { Paintbrush, Ruler, Sofa } from "lucide-react";
import livingRoom from "../assets/living-room.jpg";
import officeDesign from "../assets/office-design.jpg";
import furnitureSet from "../assets/furniture.jpg";

const services = [
  {
    icon: <Paintbrush className="text-[#8B4513]" size={36} />,
    title: "Interior Design",
    description:
      "We blend creativity and elegance to design unique interiors that tell your story.",
    image: livingRoom,
  },
  {
    icon: <Ruler className="text-[#8B4513]" size={36} />,
    title: "Space Planning",
    description:
      "Smart and functional layouts that maximize comfort and aesthetic harmony.",
    image: officeDesign,
  },
  {
    icon: <Sofa className="text-[#8B4513]" size={36} />,
    title: "Furniture & Decor",
    description:
      "Bespoke furniture and curated decor pieces that elevate your living and working spaces.",
    image: furnitureSet,
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-12 px-6">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          At Escape LTD, we bring your vision to life through design excellence,
          innovation, and craftsmanship.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Content Section */}
            <div className="p-6 text-center">
              <div className="flex justify-center mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call To Action */}
      <div className="text-center mt-12">
        <motion.a
          href="/services"
          className="inline-block bg-[#8B4513] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#733A0F] transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Services
        </motion.a>
      </div>
    </section>
  );
};

export default ServicesPreview;

