// app/page.tsx
import FloatingSocials from "@/components/FloatingSocials";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import ServicesPreview from "@/components/ServicesPreview";
import AboutUsInvite from "@/components/AboutUsInvite";
import Content from "@/components/Content";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Interior Design, Flooring & Exhibition Solutions in Kigali",
  description:
    "Escape Ltd offers expert wooden floors, SPC flooring, interior design and custom exhibition solutions in Kigali, Rwanda.",
};

export default function HomePage() {
  return (
    <>
      <FloatingSocials />
      <Hero />
      <WhyUs />
      <ServicesPreview />
      <AboutUsInvite />
      <Content />
      <Contact />
    </>
  );
}
