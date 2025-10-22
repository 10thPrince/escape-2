import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const FloatingSocials = () => {
  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 flex flex-col items-center space-y-3 bg-[#1a1a1a]/80 backdrop-blur-md p-3 rounded-full shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="p-2 text-gray-300 hover:text-primary transition"
      >
        <Linkedin size={22} />
      </a>

      {/* Twitter/X */}
      <a
        href="https://x.com/me_princ3"
        target="_blank"
        rel="noreferrer"
        className="p-2 text-gray-300 hover:text-primary transition"
      >
        <Twitter size={22} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/_nprinc_"
        target="_blank"
        rel="noreferrer"
        className="p-2 text-gray-300 hover:text-primary transition"
      >
        <Instagram size={22} />
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="p-2 text-gray-300 hover:text-primary transition"
      >
        <Facebook size={22} />
      </a>
    </motion.div>
  );
};

export default FloatingSocials;
