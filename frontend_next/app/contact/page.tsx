import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Contact Escape Ltd | Interior Design in Rwanda",
    description:
        "Get in touch with Escape Ltd. Contact our interior design experts in Kigali for consultations, projects, and partnerships.",
};

export default function Contact() {
    return (
        <section className="bg-gray-50 overflow-hidden">
            {/* Hero */}
            <div className="relative h-[50vh] lg:h-[70vh] flex items-center justify-center text-center">
                <Image
                    src="/assets/contact/contactMain.jpg"
                    alt="Contact Escape Ltd"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <h1 className="relative z-10 text-white text-3xl fugaz md:text-4xl lg:text-5xl font-bold">
                    Ready to start? <span className="text-glow">Contact us.</span>
                </h1>
            </div>

            <div className="container flex mx-auto my-16 max-w-6xl flex-col md:flex-row gap-12 px-6">
                {/* Left info */}
                <div className="space-y-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary fugaz">
                        Get in Touch
                    </h2>

                    <p className="text-gray-700 text-lg">
                        At Escape LTD, we believe every space tells a story. Let’s collaborate
                        to craft interiors that reflect your lifestyle and identity.
                    </p>

                    {/* Contact details — inline like icons */}
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-[#8B4513]/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-start">Email</h4>
                                <a
                                    href="mailto:info@escapeltd.com"
                                    className="text-gray-600 hover:text-primary"
                                >
                                    info@escapeltd.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-[#8B4513]/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-start">Phone</h4>
                                <a
                                    href="tel:+250783728119"
                                    className="text-gray-600 hover:text-primary"
                                >
                                    +250 783 728 119
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-[#8B4513]/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-start">Location</h4>
                                <p className="text-gray-600">Kigali, Rwanda</p>
                            </div>
                        </div>
                    </div>

                    {/* Social links */}
                    <div className="text-center">
                        <h4 className="font-semibold mb-3 text-start">Follow Us</h4>
                        <div className="flex m-auto space-x-4 text-center">
                            <a
                                href="https://www.linkedin.com/in/horebu-olivier-28a398358?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 text-center rounded-full hover:bg-[#8B4513]/10 transition"
                            >
                                <Linkedin className="text-primary" />
                            </a>
                            <a
                                href="https://x.com/escapeltd1?s=11&t=FDVWRXIf2z_k_50S02U1lQ"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-full hover:bg-[#8B4513]/10 transition"
                            >
                                <Twitter className="text-primary" />
                            </a>
                            <a
                                href="https://www.instagram.com/escapeltd?igsh=MWw4ZmJ3NmRocW94cQ%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-full hover:bg-[#8B4513]/10 transition"
                            >
                                <Instagram className="text-primary" />
                            </a>
                            <a
                                href="https://www.facebook.com/share/1DKjLZai4h/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-full hover:bg-[#8B4513]/10 transition"
                            >
                                <Facebook className="text-primary" />
                            </a>
                            <a
                                href="https://whatsapp.com/channel/0029VbBazL63AzNNWaqbdI19"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-full hover:bg-[#8B4513]/10 transition"
                            >
                                <FaWhatsapp size={23} className="text-primary" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@escape.ltd?_r=1&_t=ZM-91bxkylPtEa"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-full hover:bg-[#8B4513]/10 transition"
                            >
                                <FaTiktok size={20} className="text-primary" />
                            </a>
                        </div>
                    </div>

                </div>
                {/* Form */}
                <ContactForm />
            </div>
        </section>
    );
}
