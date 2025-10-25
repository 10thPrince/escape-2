import React, { useRef, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { servicesData } from "../data/serviceData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <div className="text-center py-20 text-gray-500 text-xl">
        Service not found 😔
      </div>
    );

  return (
    <>
    <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-30">
        <h1 className="text-4xl font-bold text-primary mb-10">{service.title}</h1>
        <div className="space-y-16">
          {service.subs.map((sub) => (
            <section key={sub.id} ref={(el) => (refs.current[sub.id] = el)}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2" id={sub.id}>
                {sub.name}
              </h2>
              <p className="text-gray-600">{sub.description}</p>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </>

  );
};

export default ServicesPage;
