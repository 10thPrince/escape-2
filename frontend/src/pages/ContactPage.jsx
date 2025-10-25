import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import Footer from "../components/Footer";
import contactMain from '../assets/contact/contactMain.jpg'
import FloatingSocials from '../components/FloatingSocials.jsx'

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const payload = {
      ...data,
      access_key: "d368a2b2-a8ad-446e-8f69-d81ec33d2695",
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully!");
      reset();
    } else {
      toast.error("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      {/* <FloatingSocials /> */}
      <section className="py-24 bg-gray-50 overflow-hidden">

        <motion.div
          className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: `url(${contactMain})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="absolute inset-0 bg-black/40 bg-opacity-50"></div>
          <motion.h1
            className="relative text-white text-5xl fugaz md:text-6xl font-bold z-10"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Ready to start? <span className='text-glow'> Contact us.</span>
          </motion.h1>
        </motion.div>


        <div className="container mx-auto my-15 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 text-lg">
              At Escape LTD, we believe every space tells a story.
              Let’s collaborate to craft interiors that reflect your lifestyle and identity.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-[#8B4513]/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-start">Email</h4>
                  <a
                    href="mailto:ntwariprinceh@gmail.com"
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
                    href="tel:+250795884650"
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

            <div className="text-center">
              <h4 className="font-semibold mb-3 text-start">Follow Us</h4>
              <div className="flex m-auto space-x-4 text-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-center rounded-full hover:bg-[#8B4513]/10 transition"
                >
                  <Linkedin className="text-primary" />
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full hover:bg-[#8B4513]/10 transition"
                >
                  <Twitter className="text-primary" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full hover:bg-[#8B4513]/10 transition"
                >
                  <Instagram className="text-primary" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side  */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full px-4 py-3 rounded-md border ${errors.name ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className={`w-full px-4 py-3 rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="johndoe@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  {...register("message", {
                    required: "Message cannot be empty",
                    minLength: {
                      value: 10,
                      message: "Message should be at least 10 characters",
                    },
                  })}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-md border ${errors.message ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-primary resize-none`}
                  placeholder="Hello, I'd like to discuss..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-[#735a10] transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>

      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
