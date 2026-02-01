// NavbarMobileMenu.tsx
'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { servicesData } from "../data/serviceData";

export default function NavbarMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const servicesArray = Object.values(servicesData);

  return (
    <>
      <button
        className="lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg p-5 flex flex-col gap-4 animate-slideDown z-50">
          <details className="w-full">
            <summary className="cursor-pointer font-semibold text-center">Our Services</summary>
            <div className="grid grid-cols-1 mt-2 gap-2">
              {servicesArray.map((service) => (
                <Link
                  key={service.title}
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setIsOpen(false)}
                  className="underline font-semibold hover:text-primary transition"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </details>

          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
        </div>
      )}
    </>
  );
}
