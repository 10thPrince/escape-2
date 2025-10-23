import React, { useState } from "react";
import { LogIn, Menu, X, ChevronDown, MapPin, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/userApiSlice";
import escape from "../assets/escape_logo-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  // Main services with sub-services
  const services = [
    {
      title: "Flooring",
      subs: ["Laminate", "SPC(Water Proof)", "Decking", "Engineered woods", "Cleaning kits(Wooden floor)"],
    },
    
    {
      title: "Kitchen",
      subs: ["Kitchen Renovation", " New Interior"],
    },
    {
      title: "Painting",
      subs: ["Interior Painting", "Exterior Painting"],
    },
    {
      title: "Furnitures",
      subs: ["Sofa", "Tables", "Cabinets & TV Stand", "Chairs", " Escape furnitures"],
    },
    {
      title: "Booths",
      subs: ["Exhibition booths", "Photo booths", "Decoration"],
    },
    
    {
      title: "Ceiling",
      subs: ["Gypsum Ceiling", "TV Wall"],
    },
    {
      title: "Partition",
      subs: ["Aluminium Partition", "Gypsum Partition"],
    },
    {
      title: "Doors",
      subs: ["Metal Doors", "Woden Doors", "Escape Doors"],
    },
  ];

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
              className="flex items-center gap-1 hover:text-[#A57F2F] transition-colors"
            >
              Our Services <ChevronDown size={18} />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                 className="absolute left-1/2 top-full -translate-x-[25%] mt-3 bg-white shadow-2xl rounded-lg p-6 w-[1000px] border border-gray-100 grid grid-cols-4 gap-6 transition-all duration-200"

              >
                {services.map((service, index) => (
                  <div key={index}>
                    <Link
                      to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="font-semibold text-lg text-gray-800 hover:text-[#A57F2F] transition-colors"
                    >
                      {service.title}
                    </Link>
                    <ul className="mt-2 space-y-1">
                      {service.subs.map((sub, i) => (
                        <li key={i}>
                          <Link
                            to={`/services/${service.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}/${sub
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block text-gray-600 hover:underline font-light transition-colors"
                          >
                            {sub}
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
            <li className="hover:text-primary cursor-pointer transition-colors">
              About Us
            </li>
          </Link>

          <Link to="/contact">
            <li className="hover:text-[#A57F2F] cursor-pointer transition-colors">
              Contact Us
            </li>
          </Link>

          <Link to="/projects">
            <li className="hover:text-[#A57F2F] cursor-pointer transition-colors">
              Projects
            </li>
          </Link>
        </ul>

        {/* Right Buttons */}
        {userInfo ? (
          <div className="hidden md:block">
            <Link
              to="/profile"
              className="flex gap-x-2 items-center underline text-black px-5 py-2 rounded-sm hover:bg-[#6F3B10] hover:text-white transition-colors"
            >
              <User /> Manage Profile
            </Link>
          </div>
        ) : (
          <div className="hidden md:block">
            <a
              href="#footer"
              className="flex gap-x-2 items-center underline text-black px-5 py-2 rounded-sm hover:bg-primary hover:text-white transition-colors"
            >
              <MapPin /> Our Location
            </a>
          </div>
        )}

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <details className="w-full text-center">
              <summary className="cursor-pointer hover:text-[#A57F2F]">
                Our Services
              </summary>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {services.map((service, index) => (
                  <div key={index}>
                    <p className="font-semibold">{service.title}</p>
                    <ul>
                      {service.subs.map((sub, i) => (
                        <li key={i}>
                          <Link
                            to={`/services/${service.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}/${sub
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block text-gray-600 hover:text-[#A57F2F]"
                          >
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>

            <Link to="/about" className="hover:text-[#A57F2F]">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-[#A57F2F]">
              Contact Us
            </Link>
            <Link to="/projects" className="hover:text-[#A57F2F]">
              Projects
            </Link>

            {userInfo ? (
              <Link
                to="/profile"
                className="flex gap-x-2 items-center px-5 py-2 hover:bg-[#6F3B10] hover:text-white rounded-sm transition-colors"
              >
                <User /> Manage Profile
              </Link>
            ) : (
              <Link
                to="#footer"
                className="flex gap-x-2 items-center px-5 py-2 hover:bg-[#6F3B10] hover:text-white rounded-sm transition-colors"
              >
                <MapPin /> Our Location
              </Link>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
