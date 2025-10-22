import React, { useState } from "react";
import { LogIn, Menu, X, ChevronDown } from "lucide-react"; // icons
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/userApiSlice";
import escape from '../assets/escape_logo-removebg-preview.png';
import { MapPin } from "lucide-react";
import { User } from "lucide-react";

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

    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={escape} alt="Logo" className="cursor-pointer h-10 md:h-15" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium text-xl items-center">
          <Link to="/services">
            <li className="hover:text-[#A57F2F] hover:text-glow cursor-pointer transition-colors">
              Our Services
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:text-[#A57F2F] hover:text-glow cursor-pointer transition-colors">
              About Us
            </li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-[#A57F2F] hover:text-glow cursor-pointer transition-colors">
              Contact Us
            </li>
          </Link>
          <Link to="/projects">
            <li className="hover:text-[#A57F2F] hover:text-glow cursor-pointer transition-colors">
              Projects
            </li>
          </Link>


        </ul>

        {/* Location Button (Desktop) */}
        {userInfo ?
          <div className="hidden md:block">
            <Link
              to="/profile"
              className="flex gap-x-5 underline bg-transparent border-border text-black px-5 py-2 rounded-sm hover:bg-[#6F3B10] hover:text-white transition-colors">
              <User />
              Manage Profile
            </Link>
          </div> :
          <div className="hidden md:block">
            <Link
              to="/location"
              className="flex gap-x-5 underline bg-transparent border-border text-black px-5 py-2 rounded-sm hover:bg-[#6F3B10] hover:text-white transition-colors">
              <MapPin />
              Our Location
            </Link>
          </div>
        }


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
            <li className="hover:text-[#8B4513] hover:text-glow cursor-pointer ">Our Services</li>
            <li className="hover:text-[#8B4513] hover:text-glow cursor-pointer">About Us</li>
            <li className="hover:text-[#8B4513] hover:text-glow cursor-pointer">Contact Us</li>
            <li className="hover:text-[#8B4513] hover:text-glow cursor-pointer">Projects</li>


            {userInfo ?
              <button href='/profile' className="flex  gap-x-5 bg-transparent text-black px-5 py-2 rounded-sm hover:bg-[#6F3B10] hover:text-white transition-colors">
                <MapPin />
                Manage Profile
              </button> :
              <button className="flex  gap-x-5 bg-transparent text-black px-5 py-2 rounded-sm hover:bg-[#6F3B10] hover:text-white transition-colors">
                <User />
                Our Location
              </button>
            }

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
