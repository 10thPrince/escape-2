import Image from "next/image";
import type { Metadata } from "next";
import FloatingSocials from "@/components/FloatingSocials";

export const metadata: Metadata = {
  title: "About Escape Ltd | Interior Design in Rwanda",
  description:
    "Learn about Escape Ltd — a Rwandan interior design company transforming spaces into modern, elegant, and functional environments.",
};

interface AboutSectionProps {
  title: string;
  text: string;
  img: string;
  reverse?: boolean;
}

function AboutSection({ title, text, img, reverse }: AboutSectionProps) {
  return (
    <section
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-10 py-20 px-6 md:px-20`}
    >
      <div className="flex-1 group">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={img}
            alt={title}
            width={800}
            height={500}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex-1 space-y-5">
        <h2 className="text-3xl md:text-4xl font-bold fugaz text-primary">
          {title}
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <FloatingSocials />
      <section className="relative h-[50vh] lg:h-[70vh] flex items-center justify-center text-center">
        <Image
          src="/assets/about/about-main.jpg"
          alt="About Escape Ltd"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-white text-3xl md:text-4xl lg:text-5xl fugaz font-bold">
          About <span className="text-glow">Escape LTD</span>
        </h1>
      </section>

      {/* Who we are */}
      <AboutSection
        title="Who We Are"
        text="Escape LTD is a Rwandan-based interior design company dedicated to transforming spaces into modern, elegant, and functional environments. Our mission is to craft interiors that reflect beauty, creativity, and comfort for both homes and businesses."
        img="/assets/about-one.jpg"
      />

      {/* Vision */}
      <AboutSection
        title="Our Vision & Mission"
        text="Our vision is to redefine interior design by merging creativity with sustainability. We aim to deliver top-tier designs that meet international standards while embracing the uniqueness of African aesthetics."
        img="/assets/about-two.jpg"
        reverse
      />

      {/* Core Values */}
      <section className="py-20 bg-primary text-white text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold fugaz">Our Core Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              title: "Innovation",
              text: "We constantly push the boundaries of creativity to bring fresh and unique designs.",
            },
            {
              title: "Quality",
              text: "Every detail matters — we deliver excellence in every project we handle.",
            },
            {
              title: "Sustainability",
              text: "Our designs embrace eco-friendly materials and lasting beauty.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 bg-white text-primary rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl fugaz font-semibold mb-12">Meet The Team</h2>

        <div className="max-w-4xl mx-auto">
          <Image
            src="/assets/founder.avif"
            alt="Founder of Escape Ltd"
            width={160}
            height={160}
            className="mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800">HOREBU</h3>
          <p className="text-gray-600 mb-6">Founder & Creative Director</p>
          <p className="text-gray-700 leading-relaxed">
            With over a decade of experience in luxury interior design, HOREBU
            leads the creative vision at Escape Ltd — combining refined
            aesthetics, deep professionalism and a commitment to quality in
            every project.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 text-center">
        <h2 className="text-3xl fugaz font-bold mb-4">
          Ready to work together?
        </h2>
        <a
          href="/contact"
          className="inline-block bg-white text-gray-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </>
  );
}
