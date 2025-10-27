import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "../assets/escape_logo-removebg-preview.png"; // ✅ your company logo path

const links = [
  { name: "Home", linkUrl: "/" },
  { name: "About Us", linkUrl: "/about" },
  { name: "Our Services", linkUrl: "/services" },
  { name: "Projects", linkUrl: "/projects" },
  { name: "Contact", linkUrl: "/contact" },
];


const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-gray-300 pt-16 pb-8">
            <section id="footer"></section>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-10 px-6">
                {/*  Logo Section */}
                <motion.div
                    className="md:col-span-1 flex flex-col items-start space-y-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src={logo} alt="Escape LTD" className="w-32 object-contain" />
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Transforming interiors into timeless expressions of comfort and style
                        across Rwanda.
                    </p>
                    
                </motion.div>

                {/*  Quick Links */}
                <motion.div
                    className="md:col-span-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        {links.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={`${item.linkUrl}`}
                                    className="hover:text-primary transition"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}

                        
                    </ul>
                </motion.div>

                {/* Map Section */}
                <motion.div
                    className="md:col-span-4"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Our Location
                    </h3>
                    <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-lg border border-[#8B4513]/20">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5598386946945!2d30.066615075049572!3d-1.9279236980545675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca798ba611eed%3A0xf77e8460e27f9dbb!2sEscape%20ltd%20(Interior%20design%20company)!5e0!3m2!1sen!2suk!4v1761404636479!5m2!1sen!2suk" 
                        width="100%" 
                        height="100%" 
                        style={{ border:0 }}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </motion.div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center border-t border-gray-700 mt-12 pt-6 text-sm text-gray-500">
                <p>
                    © {new Date().getFullYear()} <span className="text-primary font-semibold">Escape LTD</span> — All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
