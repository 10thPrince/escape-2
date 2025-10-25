import { motion } from "framer-motion";
import { servicesData } from "../data/serviceData.js";
import { Link } from "react-router-dom";
import {
  Paintbrush,
  Ruler,
  Sofa,
  Layers,
  Utensils,
  Layout,
  Grid,
  DoorOpen,
} from "lucide-react";
import ceilingImage from "../assets/services/CEILING.jpg";
import flooringImage from "../assets/services/FLOORING.jpeg";
import kitchenImage from "../assets/services/KITCHEN.jpg";
import paintingImage from "../assets/services/PAINTING.jpg";
import partitioningImage from "../assets/services/PARTITIONING.jpg";
import boothsImage from "../assets/services/BOOTHS.webp";
import doorsImage from "../assets/services/DOORS.webp";
import furnituresImage from "../assets/services/FURNITURES.webp";


const icons = {
  flooring: <Ruler className="text-primary" size={36} />,
  kitchen: <Utensils className="text-primary" size={36} />,
  painting: <Paintbrush className="text-primary" size={36} />,
  furnitures: <Sofa className="text-primary" size={36} />,
  booths: <Layout className="text-primary" size={36} />,
  ceiling: <Layers className="text-primary" size={36} />,
  partition: <Grid className="text-primary" size={36} />,
  doors: <DoorOpen className="text-primary" size={36} />,
};

const images = {
  flooring: flooringImage,
  kitchen: kitchenImage,
  painting: paintingImage,
  furnitures: furnituresImage,
  booths: boothsImage,
  ceiling: ceilingImage,
  partition: partitioningImage,
  doors: doorsImage,
};


const ServicesPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-12 px-6">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-3 fugaz"
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-8xl mx-auto px-6">
        {Object.entries(servicesData).map(([key, service], index) => (
          <motion.div
            key={key}
            className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={images[key]}
                alt={service.title}
                className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Content Section */}
            <div className="p-6 text-center">
              <div className="flex justify-center mb-3">{icons[key]}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">{service.description}</p>

              <Link to={`/services/${key}`} className="underline text-[#A57F2F] hover:text-black">
                View Details {'>'}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>


    </section>
  );
};

export default ServicesPreview;

