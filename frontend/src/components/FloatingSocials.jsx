import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Phone, Twitter } from "lucide-react";

const FloatingSocials = () => {
  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 flex flex-col items-center space-y-1 bg-[#1a1a1a]/80 backdrop-blur-md p-1 md:p-3 rounded-full shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Phone */}
      <a
        href="tel:+250783728119"
        target="_blank"
        rel="noreferrer"
        className="p-2 text-gray-300 hover:text-primary transition"
      >
        <Phone size={22} />
      </a>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/horebu-olivier-28a398358?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
        target="_blank"
        rel="noreferrer"
        className="p-2 text-gray-300 hover:text-primary transition"
      >
        <Linkedin size={22} />
      </a>

      {/* Twitter/X */}
      <a
        href="https://x.com/escapeltd1?s=11&t=FDVWRXIf2z_k_50S02U1lQ"
        target="_blank"
        rel="noreferrer"
        className="p-2 text-gray-300 hover:text-primary transition"
      >
        <Twitter size={22} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/escapeltd?igsh=MWw4ZmJ3NmRocW94cQ%3D%3D&utm_source=qr"
        target="_blank"
        rel="noreferrer"
        className="p-2 text-gray-300 hover:text-primary transition"
      >
        <Instagram size={22} />
      </a>

      {/* Facebook */}
      {/* <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="p-2 text-gray-300 hover:text-primary transition"
      >
        <Facebook size={22} />
      </a> */}
    </motion.div>
  );
};

export default FloatingSocials;
