import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/landing-page-2.jpg"
        alt="Contact Background"
        fill
        className="object-cover absolute inset-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10 text-start text-white space-y-5 max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight fugaz">
          <span className="block transition-transform duration-500 transform hover:translate-x-1">Ready to Elevate</span>
          <span className="block text-glow transition-transform duration-500 transform hover:-translate-x-1">Your Space?</span>
        </h1>

        <Link href="/contact" className="inline-flex px-4 items-center text-2xl font-light underline hover:decoration-white transition duration-300">
          Contact Us
          <ArrowUpRight size={35} className="ml-2 transition-transform duration-300 hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
