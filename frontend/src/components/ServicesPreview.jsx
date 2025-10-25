import { motion } from "framer-motion";
import { Paintbrush, Ruler, Sofa, Layers, Utensils, Layout, Grid, DoorOpen, Table } from "lucide-react";
import livingRoom from "../assets/living-room.jpg";
import officeDesign from "../assets/office-design.jpg";
import furnitureSet from "../assets/furniture.jpg";
import ceilingImage from '../assets/services/CEILING.jpg';
import flooringImage from '../assets/services/FLOORING.jpeg';
import kitchenImage from '../assets/services/KITCHEN.jpg';
import modernLivingRoomImage from '../assets/services/Modern living room.jpeg';
import paintingImage from '../assets/services/PAINTING.jpg';
import partitioningImage from '../assets/services/PARTITIONING.jpg';
import boothsImage from '../assets/services/BOOTHS.webp';
import doorsImage from '../assets/services/DOORS.webp';
import furnituresImage from '../assets/services/FURNITURES.webp';

const services = [
  {
    icon: <Ruler className="text-primary" size={36} />,
    title: "Flooring",
    description: "Laminate, SPC (Water Proof), Decking, Engineered Woods, and Cleaning Kits — stylish and durable flooring solutions built to last.",
    image: flooringImage,
  },
  {
    icon: <Utensils className="text-primary" size={36} />,
    title: "Kitchen",
    description: "From complete kitchen renovations to new interior designs — modern, functional, and beautiful spaces for every home.",
    image: kitchenImage,
  },
  {
    icon: <Paintbrush className="text-primary" size={36} />,
    title: "Painting",
    description: "Professional interior and exterior painting services that add vibrant life and elegance to your walls.",
    image: paintingImage,
  },
  {
    icon: <Sofa className="text-primary" size={36} />,
    title: "Furnitures",
    description: "Custom-made sofas, tables, cabinets, chairs, and exclusive Escape furniture pieces to match your style.",
    image: furnituresImage,
  },
  {
    icon: <Layout className="text-primary" size={36} />,
    title: "Booths",
    description: "Creative exhibition and photo booths, plus stunning decorative setups designed to stand out.",
    image: boothsImage,
  },
  {
    icon: <Layers className="text-primary" size={36} />,
    title: "Ceiling",
    description: "Gypsum ceilings and stylish TV walls that add dimension, beauty, and sophistication to any space.",
    image: ceilingImage,
  },
  {
    icon: <Grid className="text-primary" size={36} />,
    title: "Partition",
    description: "Elegant aluminium and gypsum partitions for modern, flexible, and functional interiors.",
    image: partitioningImage,
  },
  {
    icon: <DoorOpen className="text-primary" size={36} />,
    title: "Doors",
    description: "Premium metal, wooden, and custom Escape doors that redefine your entrances with character and quality.",
    image: doorsImage,
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

