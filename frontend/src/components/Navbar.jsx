import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, MapPin, User, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { servicesData } from "../data/serviceData";
import escape from "../assets/Escape-Main-Blue-Light-Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const servicesArray = Object.values(servicesData);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div
        className="max-w-8xl mx-auto px-6 py-2 flex justify-between items-center relative"
        ref={dropdownRef}
      >
        {/* LOGO */}
        <Link to="/" className="items-start">
          <img src={escape} alt="Logo" className="h-10 md:h-17 cursor-pointer" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-gray-800 font-medium text-lg">
          
          {/* SERVICES DROPDOWN BUTTON */}
          <button
            onClick={() => setDropdownOpen((p) => !p)}
            className="flex items-center gap-1 text-sm lg:text-lg hover:text-primary transition"
          >
            Our Services <ChevronDown size={18} />
          </button>

          <Link to="/about" className="hover:text-primary text-sm lg:text-lg transition">About Us</Link>
          <Link to="/contact" className="hover:text-primary text-sm lg:text-lg transition">Contact Us</Link>
          <Link to="/projects" className="hover:text-primary text-sm lg:text-lg transition">Our Projects</Link>
          <Link to="/courses" className="hover:text-primary text-sm lg:text-lg transition">Courses</Link>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="hidden md:flex items-center gap-6">
          {userInfo ? (
            <Link
              to="/addProject"
              className="flex items-center gap-2 text-black underline hover:text-primary transition"
            >
              <User size={20} /> Manage Web
            </Link>
          ) : (
            <a
              href="#footer"
              className="flex items-center gap-2 text-primary border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition"
            >
              <MapPin size={20} /> Our Location
            </a>
          )}

          <a
            href="tel:+250783728119"
            className="flex items-center gap-2 text-primary underline hover:text-primary/80"
          >
            <Phone size={22} /> Call Us
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* DESKTOP DROPDOWN (FULL WIDTH) */}
      {dropdownOpen && (
        <div className="hidden md:block bg-white border-t shadow-xl absolute w-full left-0 animate-fadeDown">
          <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {servicesArray.map((service, index) => (
              <div key={index} className="text-start">
                <Link
                  to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="font-semibold text-lg text-start ml-0 text-gray-800 hover:text-primary transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  {service.title}
                </Link>
                <ul className="mt-2 space-y-1 text-start">
                  {service.subs.map((sub) => (
                    <li key={sub.id}>
                      <Link
                        to={`/services/${service.title
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

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t animate-slideDown">
          <ul className="flex flex-col items-center py-5 space-y-4 text-gray-800 text-lg">
            
            {/* Mobile Services Dropdown */}
            <details className="w-full px-5">
              <summary className="cursor-pointer font-semibold text-center">
                Our Services
              </summary>

              <div className="grid grid-cols-2 gap-4 mt-3">
                {servicesArray.map((service) => (
                  <Link
                    key={service.title}
                    to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => setIsOpen(false)}
                    className="underline font-semibold hover:text-primary transition"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </details>

            <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/courses" onClick={() => setIsOpen(false)}>Courses</Link>

            {userInfo ? (
              <Link
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-md shadow hover:bg-primary/90 transition"
              >
                <User size={20} /> Profile
              </Link>
            ) : (
              <a
                href="#footer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded-md hover:bg-primary hover:text-white transition"
              >
                <MapPin size={20} /> Our Location
              </a>
            )}

            <a
              href="tel:+250783728119"
              className="flex items-center gap-2 text-primary underline font-semibold"
            >
              <Phone size={22} /> Call Us
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar