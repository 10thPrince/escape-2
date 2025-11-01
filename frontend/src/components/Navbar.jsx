import React, { useState } from "react";
import { Menu, X, ChevronDown, MapPin, User, Phone, PhoneCall } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/userApiSlice";
import { servicesData } from "../data/serviceData";
import escape from "../assets/escape_logo-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLinkClick = () => setIsOpen(false);

  // Convert object to array for mapping
  const servicesArray = Object.values(servicesData);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={escape} alt="Logo" className="cursor-pointer h-10 md:h-15" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium text-xl items-center relative">
          {/* Our Services Dropdown */}
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              Our Services <ChevronDown size={18} />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute left-0 top-10 -translate-x-[27.3%] mt-3 bg-white shadow-2xl rounded-lg p-6 w-screen border border-gray-100 grid grid-cols-4 gap-6 transition-all duration-200"
              >
                {servicesArray.map((service, index) => (
                  <div key={index}>
                    <div className="text-start">
                      <Link
                        onClick={() => setDropdownOpen(false)}
                        to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="font-semibold text-lg text-gray-800 hover:text-primary transition-colors"
                      >
                        {service.title}
                      </Link>
                    </div>

                    <ul className="mt-2 space-y-1">
                      {service.subs.map((sub) => (
                        <li key={sub.id}>
                          <Link
                            onClick={() => setDropdownOpen(false)}
                            to={`/services/${service.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}/${sub.id}`}
                            className="block text-start text-gray-600 hover:underline font-light transition-colors"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>

          <Link to="/about">
            <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-primary cursor-pointer transition-colors">Contact Us</li>
          </Link>
          <Link to="/projects">
            <li className="hover:text-primary cursor-pointer transition-colors">Our Projects</li>
          </Link>
        </ul>


        <div className="flex flex-row gap-x-5 justify-center items-center">
          {/* Right Buttons */}
          {userInfo ? (
            <div className="hidden md:block">
              <Link
                to="/profile"
                className="flex gap-x-2 items-center underline text-black px-5 py-2 rounded-sm hover:bg-primary hover:text-white transition-colors"
              >
                <User /> Manage Profile
              </Link>
            </div>
          ) : (
            <div className="hidden md:block">
              <a
                href="#footer"
                className="flex gap-x-2 items-center px-5 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-all duration-300"
              >
                <MapPin size={20} /> Our Location
              </a>
            </div>
          )}
          <div>
            <a href="tel:+250783728119" className=" flex-row hover:text-primary/70  text-primary hidden md:flex md:gap-2 underline">
              <Phone size={22} /> Call us
            </a>
          </div>
        </div>


        {/* Hamburger Icon (Mobile) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 rounded-b-2xl animate-slideDown">
          <ul className="flex flex-col items-center space-y-5 py-5 text-gray-800 font-medium">

            {/* OUR SERVICES DROPDOWN */}
            <details className="w-full text-center group">
              <summary className="cursor-pointer text-lg font-semibold hover:text-primary transition-colors duration-200">
                Our Services
              </summary>
              <div className="grid grid-cols-3 gap-4 mt-3 px-6 text-left">
                {servicesArray.map((service) => (
                  <div key={service.title}>
                    <Link
                      onClick={() => handleLinkClick()}
                      to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="font-semibold underline text-lg text-gray-800 hover:text-primary transition-colors"
                    >
                      {service.title}
                    </Link>
                    {/* <ul className="space-y-1">
                      {service.subs.map((sub) => (
                        <li key={sub.id}>
                          <Link
                            to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}/${sub.id}`}
                            className="block text-gray-600 hover:text-primary transition-colors duration-200"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul> */}
                  </div>
                ))}
              </div>
            </details>

            {/* NAVIGATION LINKS */}
            <div className="flex flex-col items-center space-y-2 text-base">
              <Link to="/about" onClick={() => handleLinkClick()} className="hover:text-primary transition-colors">About Us</Link>
              <Link to="/contact" onClick={() => handleLinkClick()} className="hover:text-primary transition-colors">Contact Us</Link>
              <Link to="/projects" onClick={() => handleLinkClick()} className="hover:text-primary transition-colors">Projects</Link>
            </div>

            {/* PROFILE / LOCATION */}
            {userInfo ? (
              <Link
                onClick={() => handleLinkClick()}
                to="/profile"
                className="flex gap-x-2 items-center px-5 py-2 bg-primary text-white rounded-md shadow-md hover:bg-primary/90 transition-all duration-300"
              >
                <User size={20} /> Manage Profile
              </Link>
            ) : (
              <a
                onClick={() => handleLinkClick()}
                href="#footer"
                className="flex gap-x-2 items-center px-5 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-all duration-300"
              >
                <MapPin size={20} /> Our Location
              </a>
            )}

            {/* CALL BUTTON */}
            <div className="mt-2">
              <a
                href="tel:+250783728119"
                className="flex items-center gap-2 text-base font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                <Phone size={22} /> Call Us
              </a>
            </div>
          </ul>
        </div>
      )}


    </nav>
  );
};

export default Navbar;
