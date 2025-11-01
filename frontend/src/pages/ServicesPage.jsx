import React, { useRef, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { servicesData } from "../data/serviceData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesPreview from "../components/ServicesPreview";
import { Accordion, AccordionItem } from "@heroui/react";
import { CheckCircle, Star, Clock } from 'lucide-react';
import serviceImg from '../assets/hero-1.jpeg';
import { motion } from "framer-motion";
import FloatingSocials from "../components/FloatingSocials";


const ServicesPage = () => {
  const { serviceName, subName } = useParams();
  const location = useLocation();

  const service = servicesData[serviceName];
  const refs = useRef({});

  useEffect(() => {
    if (subName && refs.current[subName]) {
      setTimeout(() => {
        refs.current[subName].scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }, [subName, location]);

  if (!service)
    return (
      <>
        <Navbar />
        <div className="text-center py-30 text-gray-500 text-xl">
          <ServicesPreview />
        </div>
        <Footer />
      </>
    );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <FloatingSocials />
      <motion.div
        className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${serviceImg})` }}
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
          Take a look at our <span className='text-glow'> {service.title}</span> Service
        </motion.h1>
      </motion.div>
      <div className="flex flex-row mx-auto min-h-[calc(100vh-70px)] w-full ">
        <div className="w-1/4 pr-8 hidden md:block font-bold px-6 text-white text-xl bg-primary">
          <div className="sticky top-24 h-fit">
            <Accordion selectionMode="single">
              {Object.entries(servicesData).map(([key, value]) => (
                <AccordionItem key={key} aria-label={value.title} title={value.title}>
                  <ul className="space-y-2 pl-2">
                    {value.subs.map((sub) => (
                      <li key={sub.id} >
                        <Link
                          to={`/services/${key}/${sub.id}`}
                          className={`block text-start text-gray-700 hover:text-black underline ${subName === sub.id ? "font-semibold text-white" : ""
                            }`}
                        >
                          {sub.name}
                        </Link>
                      </li>

                    ))}
                  </ul>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>


        <div className=" w-full md:w-3/4 overflow-y-auto hidden-scroll px-5 max-h-[calc(100vh-100px)] pr-2">
          <motion.div
            className="relative h-30 flex items-center justify-center text-center bg-cover bg-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <motion.h1
              className="relative text-black text-2xl fugaz md:text-3xl font-bold z-10"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className='text-primary text-4xl'> {service.title}</span>
            </motion.h1>
          </motion.div>

          <div className="space-y-16">
            {service.subs.map((sub) => (
              <section
                key={sub.id}
                ref={(el) => (refs.current[sub.id] = el)}
                className="scroll-mt-35"
              >
                <h2
                  className="text-2xl fugaz  font-semibold text-gray-800 p-8 m-4"
                  id={sub.id}
                >
                  {sub.name}
                </h2>
                <p className="text-gray-600">{sub.description}</p>
                {sub.images && sub.images.length > 0 && (
                  <div className="grid my-5 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sub.images.map((img, i) => (
                      <div className="flex flex-col bg-white text-center border-b-1 border-gray-300  p-2">
                        <img
                          key={i}
                          src={img.url}
                          alt={img.title || `${sub.name} ${i + 1}`}
                          className="w-80 h-56 object-cover mx-auto items-center rounded-md shadow-md snap-center flex-shrink-0"
                        />
                        <p className="text-md my-3 mx-2 text-gray-500">
                          {img.description || "A beautifull example of our work."}
                        </p>
                        <h3 className="text-lg mx-2 font-bold text-center">
                          {img.title || `Image ${i + 1}`}
                        </h3>
                        
                      </div>

                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>


      </div>
      <div className="w-full bg-gray-100">
        <div className="my-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 fugaz text-center">
            Why Choose Our {service.title} Service
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted Expertise</h3>
              <p className="text-gray-600">
                Our team of skilled professionals delivers high-quality and reliable {service.title.toLowerCase()} solutions that exceed expectations.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <Star className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                We use the finest materials and modern techniques to ensure every project stands out for durability and design.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">
                We value your time — every project is completed on schedule without compromising quality or attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;
