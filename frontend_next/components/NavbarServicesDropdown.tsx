// NavbarServicesDropdown.tsx
'use client';

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { servicesData } from "../data/serviceData";

export default function NavbarServicesDropdown() {
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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-1 hover:text-primary transition"
      >
        Our Services <ChevronDown size={18} />
      </button>

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
    </div>
  );
}
