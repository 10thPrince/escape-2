// NavbarUserActions.tsx
'use client';

import Link from "next/link";
import { User, MapPin, Phone } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/slices/authSlice';



export default function NavbarUserActions() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('userInfo');
      if (storedUser) {
        dispatch(setCredentials(JSON.parse(storedUser)));
      }
    }
  }, []);
  // Example: replace with your auth logic or context
  const  userInfo  = useSelector((state: RootState) =>
    state.auth.userInfo); // or fetch from session/auth context
  
  return (
    <>
      {userInfo ? (
        <Link
          href="/profile"
          className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-md shadow hover:bg-primary/90 transition"
        >
          <User size={20} /> Profile
        </Link>
      ) : (
        <>
          <a
            href="#footer"
            className="flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded-md hover:bg-primary hover:text-white transition"
          >
            <MapPin size={20} /> Our Location
          </a>
          <a
            href="tel:+250783728119"
            className="flex items-center gap-2 text-primary underline font-semibold"
          >
            <Phone size={22} /> Call Us
          </a>
        </>
      )}
    </>
  );
}
