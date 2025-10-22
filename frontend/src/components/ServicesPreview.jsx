import { motion } from "framer-motion";
import { Paintbrush, Ruler, Sofa, Utensils, Layout, DoorOpen, Table } from "lucide-react";
import livingRoom from "../assets/living-room.jpg";
import officeDesign from "../assets/office-design.jpg";
import furnitureSet from "../assets/furniture.jpg";
import ceilingImage from '../assets/services/CEILING.JPG';
import flooringImage from '../assets/services/FLOORING.jpeg';
import kitchenImage from '../assets/services/KITCHEN.JPG';
import modernLivingRoomImage from '../assets/services/Modern living room.jpeg';
import paintingImage from '../assets/services/PAINTING.JPG';
import partitioningImage from '../assets/services/PARTITIONING.JPG';
import boothsImage from '../assets/services/BOOTHS.webp';
import doorsImage from '../assets/services/DOORS.webp';
import furnituresImage from '../assets/services/FURNITURES.webp';

const services = [
  {
    icon: <Paintbrush className="text-primary" size={36} />,
    title: "Ceiling Design",
    description: "Elegant ceiling solutions to enhance your space's aesthetic.",
    image: ceilingImage,
  },
  {
    icon: <Ruler className="text-primary" size={36} />,
    title: "Flooring Design",
    description: "Stylish and durable flooring options for every room.",
    image: flooringImage,
  },
  {
    icon: <Utensils className="text-primary" size={36} />,
    title: "Kitchen Design",
    description: "Modern kitchen layouts with functional and chic designs.",
    image: kitchenImage,
  },
  {
    icon: <Sofa className="text-primary" size={36} />,
    title: "Modern Living Room",
    description: "Contemporary living spaces tailored to your lifestyle.",
    image: modernLivingRoomImage,
  },
  {
    icon: <Paintbrush className="text-primary" size={36} />,
    title: "Painting Services",
    description: "Expert painting to transform your interiors with color.",
    image: paintingImage,
  },
  // {
  //   icon: <Paintbrush className="text-primary" size={36} />,
  //   title: "Partitioning Solutions",
  //   description: "Custom partitions for flexible and stylish space division.",
  //   image: partitioningImage,
  // },
  {
    icon: <Layout className="text-primary" size={36} />,
    title: "Booths Design",
    description: "Cozy and innovative booth designs for unique interiors.",
    image: boothsImage,
  },
  {
    icon: <DoorOpen className="text-primary" size={36} />,
    title: "Doors Design",
    description: "Elegant doors that add character to your space.",
    image: doorsImage,
  },
  {
    icon: <Table className="text-primary" size={36} />,
    title: "Furnitures Design",
    description: "Custom furniture to complement your interior vision.",
    image: furnituresImage,
  },
];

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
              <a href="/services" className="underline text-[#A57F2F] ">View Details {'>'}</a>
            </div>
          </motion.div>
        ))}
      </div>

      
    </section>
  );
};

export default ServicesPreview;

