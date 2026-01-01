import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <div className="space-y-20 px-6 md:px-20 py-16 bg-white">
      {/* Vorma Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold fugaz uppercase tracking-wide">
            <span className="text-glow">NEW DESIGN</span> – A LUXURY TOUCH FOR MODERN BATHROOMS
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Experience the perfect blend of elegance and functionality with our best bathroom designs...
          </p>
          <Link href="/services/flooring">
            <button className="border border-primary px-6 py-3 uppercase tracking-wide hover:bg-primary hover:text-white transition duration-300">
              Discover Designs
            </button>
          </Link>
        </div>

        <div className="md:w-1/2">
          <Image
            src="/assets/content/content-1.jpeg"
            alt="Vorma Herringbone Floor"
            width={800}
            height={600}
            className="rounded-lg object-cover h-[80vh] w-full transition duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* StayClean Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold fugaz uppercase tracking-wide">
            <span className="text-glow">NEW DESIGN</span> — KITCHEN LUXURY REIMAGINED
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Transform your kitchen into a centerpiece of style and comfort...
          </p>
          <Link href="/services/kitchen">
            <button className="border border-primary px-6 py-3 uppercase tracking-wide hover:bg-primary hover:text-white transition duration-300">
              Discover Designs
            </button>
          </Link>
        </div>

        <div className="md:w-1/2">
          <Image
            src="/assets/content/content-2.jpeg"
            alt="StayClean+ Floor"
            width={800}
            height={600}
            className="rounded-lg object-cover w-full transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
