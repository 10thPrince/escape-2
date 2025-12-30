// components/FloatingSocials.tsx
"use client";

import { motion } from "framer-motion";
import { Phone, Linkedin, Twitter, Instagram } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function FloatingSocials() {
  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 flex flex-col text items-center  bg-[#1a1a1a]/80 backdrop-blur-md p-1 md:p-3 rounded-full shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <a href="tel:+250783728119" className=" text-gray-300 hover:text-primary transition m-2">
        <Phone size={22} />
      </a>

      <a href="https://www.linkedin.com/in/horebu-olivier-28a398358" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-primary transition m-2">
        <Linkedin size={22} />
      </a>

      <a href="https://x.com/escapeltd1" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-primary transition m-2">
        <Twitter size={22} />
      </a>

      <a href="https://www.instagram.com/escapeltd" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-primary transition m-2">
        <Instagram size={22} />
      </a>

      <a href="https://whatsapp.com/channel/0029VbBazL63AzNNWaqbdI19" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-primary transition m-2">
        <FaWhatsapp size={23} />
      </a>

      <a href="https://www.tiktok.com/@escape.ltd" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-primary transition m-2">
        <FaTiktok size={20} />
      </a>
    </motion.div>
  );
}
