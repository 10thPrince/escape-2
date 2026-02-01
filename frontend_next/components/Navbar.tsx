
'use client';

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { servicesData } from "../data/serviceData";
import NavbarMobileMenu from "./NavbarMobileMenu";
import NavbarUserAction from "./NavbarUserAction";
import escapeLogo from "../public/assets/Escape-Main-Blue-Light-Logo.png";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const servicesArray = Object.values(servicesData);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-8xl mx-auto px-6 py-2 flex justify-between items-center relative">
        {/* LOGO */}
        <Link href="/">
          <img src={escapeLogo.src} alt="Escape LTD" className="h-10 md:h-17 cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 text-gray-800 font-medium text-lg">
          {/* Our Services Dropdown */}
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 hover:text-primary transition"
          >
            Our Services <ChevronDown size={18} />
          </button>
          <Link href="/courses" className="hover:text-primary transition">Courses</Link>
          <Link href="/about" className="hover:text-primary transition">About Us</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact Us</Link>
          <Link href="/projects" className="hover:text-primary transition">Projects</Link>
        </div>

        {/* Desktop User Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <NavbarUserAction />
        </div>
        <NavbarMobileMenu />
      </div>

      {/* Mobile Menu */}
      {dropdownOpen && (
        <div className="hidden lg:block bg-white border-t shadow-xl absolute min-w-screen left-0 animate-fadeDown">
          <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {servicesArray.map((service, index) => (
              <div key={index} className="text-start">
                <Link
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="font-semibold text-lg text-start ml-0 text-gray-800 hover:text-primary transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  {service.title}
                </Link>
                <ul className="mt-2 space-y-1 text-start">
                  {service.subs.map((sub) => (
                    <li key={sub.id}>
                      <Link
                        href={`/services/${service.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}/${sub.id}`}
                        onClick={() => setDropdownOpen(false)}
                        className="text-gray-600 text-start hover:text-primary font-light transition"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
