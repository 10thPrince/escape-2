import React from 'react'
import { ArrowDown, CircleStar, Phone, Sparkles, StarIcon } from 'lucide-react'
import Image from 'next/image';
import type { Metadata } from "next";
import FloatingSocials from '@/components/FloatingSocials';


export const metadata: Metadata = {
    title: "Professional Training Courses | Escape Ltd",
    description:
        "Professional training courses in Carpentry, Wooden Floor Installation, Interior Design, and Project Management by Escape Ltd.",
};



const Courses = () => {

    const courses = [
        {
            id: 1,
            title: "Carpentry",
            description:
                "Practical training in carpentry covering material selection, cutting, joining, finishing, and installation for residential and commercial projects.",
            image: "/assets/courses/carpentry.avif",
        },
        {
            id: 2,
            title: "Wooden Floor Installation",
            description:
                "Hands-on course focused on professional installation of wooden flooring systems, including surface preparation, alignment, fixing, and finishing.",
            image: "/assets/courses/wooden-install.jpg",
        },
        {
            id: 3,
            title: "Interior Design",
            description:
                "Learn core principles of interior design including space planning, lighting, color coordination, and functional aesthetics for modern interiors.",
            image: "/assets/courses/interior-design.webp",
        },
        {
            id: 4,
            title: "Project Management",
            description:
                "Develop skills in planning, budgeting, scheduling, team coordination, and quality control for construction and interior projects.",
            image: "/assets/courses/project-manager.webp",
        },
    ];
    return (
        <>
            <FloatingSocials />
            <section className="relative bg-white h-[85vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-slate-900/40 z-10" />
          <Image
            src={'/assets/landing-page-2.jpg'}
            alt="Professional construction and interior training by Escape Ltd"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-10">
          <div className="max-w-3xl flex flex-col gap-8">
            <div className="inline-flex items-center justify-center w-full md:w-[50%] gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
              <p className="font-semibold">
                <span className="font-bold">New:</span> Feature integrated
              </p>
              <Sparkles className="w-6 h-6" />
            </div>

            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-accent leading-tight tracking-tight">
              <span className="font-bold block">Professional training courses</span>
              <span className="text-primary fugaz block">by Escape Ltd</span>
            </h1>

            <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed border-l-4 border-primary pl-6">
              Practical courses in Carpentry, Wooden Floor Installation, Interior Design,
              and Project Management —{" "}
              <span className="font-semibold">taught by industry professionals.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#courses"
                className="flex gap-3 items-center justify-center rounded-full h-14 px-10 bg-primary hover:bg-primary-dark text-white font-bold transition-transform hover:scale-105 shadow-lg shadow-primary/30"
              >
                View Courses <ArrowDown />
              </a>

              <a
                href="tel:+250783728119"
                className="flex gap-3 items-center justify-center rounded-full h-14 px-10 bg-white hover:bg-slate-100 text-slate-900 font-bold transition shadow-lg"
              >
                Enroll Now <Phone size={22} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section
        id="courses"
        className="scroll-mt-20 w-full px-4 py-16 md:px-20"
      >
        <header className="mb-10">
          <h2 className="text-2xl text-center md:text-3xl fugaz text-secondary font-bold">
            Professional Training Programs
          </h2>
          <p className="mt-3 text-center text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Practical, industry-driven courses designed to equip you with real-world
            skills in interior design, construction finishing, and fabrication.
          </p>
        </header>

        <div className="flex flex-col gap-6">
          {courses.map((course) => (
            <article
              key={course.id}
              className="flex flex-col md:flex-row items-start md:items-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm gap-4"
            >
              <div className="w-full md:w-[30%] h-48 md:h-32 overflow-hidden rounded-lg relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:w-[50%] md:px-6 space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600">{course.description}</p>
              </div>

              <div className="w-full md:w-[20%] flex md:justify-end">
                <a
                  href="tel:+250783728119"
                  className="flex gap-3 items-center justify-center rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
                >
                  Enroll Now <Phone size={22} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
        </>

    )
}

export default Courses