// components/AboutUsInvite.tsx
import Link from "next/link";
import { Info } from "lucide-react";

export default function AboutUsInvite() {
  return (
    <section className="py-16 px-4 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <Info size={48} className="text-primary" />

        <div>
          <h2 className="text-3xl font-bold text-primary mb-4 fugaz">
            Get to Know Us
          </h2>
          <p className="text-gray-700 mb-6">
            Discover our passion, mission, and the story behind what drives us to
            create and innovate.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-primary text-white rounded-full"
          >
            Explore Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
