// components/WhyUs.tsx
import { Palette, Hammer, Home, Sparkles } from "lucide-react";

const values = [
  {
    icon: <Palette size={40} className="text-primary" />,
    title: "Creative Design",
    description:
      "Every space we design reflects your personality — crafted with imagination and modern style.",
  },
  {
    icon: <Hammer size={40} className="text-primary" />,
    title: "Quality Craftsmanship",
    description:
      "We partner with expert artisans to ensure premium finishes and lasting quality in every project.",
  },
  {
    icon: <Home size={40} className="text-primary" />,
    title: "Functional Spaces",
    description:
      "Our designs blend beauty with practicality — ensuring comfort, flow, and purpose in every room.",
  },
  {
    icon: <Sparkles size={40} className="text-primary" />,
    title: "Modern Aesthetic",
    description:
      "Sleek, timeless, and elegant — our modern aesthetic elevates your environment effortlessly.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12 text-secondary fugaz">
        Why Choose Escape Ltd
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {values.map((v, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">{v.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
            <p className="text-gray-600">{v.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
