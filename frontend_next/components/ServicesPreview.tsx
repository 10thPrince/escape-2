// components/ServicesPreview.tsx
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/serviceData";
import {
  Paintbrush,
  Ruler,
  Sofa,
  Layers,
  Utensils,
  Layout,
  Grid,
  DoorOpen,
} from "lucide-react";


const icons = {
  flooring: <Ruler className="text-primary" size={36} />,
  kitchen: <Utensils className="text-primary" size={36} />,
  painting: <Paintbrush className="text-primary" size={36} />,
  furnitures: <Sofa className="text-primary" size={36} />,
  booths: <Layout className="text-primary" size={36} />,
  ceiling: <Layers className="text-primary" size={36} />,
  partition: <Grid className="text-primary" size={36} />,
  doors: <DoorOpen className="text-primary" size={36} />,
};

const images = {
  flooring: "/assets/services/FLOORING.jpeg",
  kitchen: "/assets/services/KITCHEN.jpg",
  painting: "/assets/services/PAINTING.jpg",
  furnitures: "/assets/services/FURNITURES.webp",
  booths: "/assets/services/BOOTHS.webp",
  ceiling: "/assets/services/CEILING.jpg",
  partition: "/assets/services/PARTITIONING.jpg",
  doors: "/assets/services/DOORS.webp",
};

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-12 px-6">
        <h2 className="text-4xl font-bold text-secondary mb-3 fugaz">
          Our Services
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          At Escape Ltd, we bring your vision to life through design excellence
          and craftsmanship.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-8xl mx-auto px-6">
        {Object.entries(servicesData).map(([key, service]) => (
          <div
            key={key}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="relative h-56">
              <Image
                src={images[key as keyof typeof images]}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 text-center">
              <div className="flex justify-center mb-3">
                {icons[key as keyof typeof icons]}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {service.description}
              </p>

              <Link
                href={`/services/${key}`}
                className="underline text-primary hover:text-black transition"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
