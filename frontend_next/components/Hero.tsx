// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen h-[80%] flex items-center justify-center">
      <Image
        src={'/assets/home2.jpg'}
        alt="Interior design and flooring by Escape Ltd in Kigali Rwanda"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
}
