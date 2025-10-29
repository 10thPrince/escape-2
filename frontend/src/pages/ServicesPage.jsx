import React, { useRef, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { servicesData } from "../data/serviceData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesPreview from "../components/ServicesPreview";
import { Accordion, AccordionItem } from "@heroui/react";

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

      <div className="flex flex-row mx-auto min-h-[calc(100vh-70px)] px-6 py-30 w-full ">
        <div className="w-1/4 pr-8">
          <div className="sticky top-24 h-fit">
            <Accordion selectionMode="multiple">
              {Object.entries(servicesData).map(([key, value]) => (
                <AccordionItem key={key} aria-label={value.title} title={value.title}>
                  <ul className="space-y-2 pl-2">
                    {value.subs.map((sub) => (
                      <li key={sub.id} >
                        <Link
                          to={`/services/${key}/${sub.id}`}
                          className={`block text-start text-gray-700 hover:text-primary underline ${
                            subName === sub.id ? "font-semibold text-primary" : ""
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

        
        <div className="w-3/4 overflow-y-auto max-h-[calc(100vh-100px)] pr-2">
          <h1 className="text-4xl font-bold text-primary mb-10">{service.title}</h1>
          <div className="space-y-16">
            {service.subs.map((sub) => (
              <section
                key={sub.id}
                ref={(el) => (refs.current[sub.id] = el)}
                className="scroll-mt-35"
              >
                <h2
                  className="text-2xl font-semibold text-gray-800 p-8 m-4"
                  id={sub.id}
                >
                  {sub.name}
                </h2>
                <p className="text-gray-600">{sub.description}</p>
              </section>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;
