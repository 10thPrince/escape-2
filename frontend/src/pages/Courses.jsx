import React from 'react'
import courseLangingImage from '../assets/landing-page-2.jpg'
import { ArrowDown, CircleStar, Phone, Sparkles, StarIcon } from 'lucide-react'
import carpentry from '../../public/assets/courses/carpentry.avif'
import interiorDesign from '../../public/assets/courses/interior-design.webp'
import pm from '../../public/assets/courses/project-manager.webp'
import woodenInst from '../../public/assets/courses/wooden-install.jpg'

const Courses = () => {

    const courses = [
        {
            id: 1,
            title: "Carpentry",
            description:
                "Practical training in carpentry covering material selection, cutting, joining, finishing, and installation for residential and commercial projects.",
            image: carpentry,
        },
        {
            id: 2,
            title: "Wooden Floor Installation",
            description:
                "Hands-on course focused on professional installation of wooden flooring systems, including surface preparation, alignment, fixing, and finishing.",

            image: woodenInst,
        },
        {
            id: 3,
            title: "Interior Design",
            description:
                "Learn core principles of interior design including space planning, lighting, color coordination, and functional aesthetics for modern interiors.",
            image: interiorDesign,
        },
        {
            id: 4,
            title: "Project Management",
            description:
                "Develop skills in planning, budgeting, scheduling, team coordination, and quality control for construction and interior projects.",
            image: pm,
        },
    ];
    return (
        <>
            <section className="relative bg-white h-[85vh] min-h-[600px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-slate-900/40 z-10"></div>
                    <img alt="HVAC Technician" className="w-full h-full object-cover object-center"
                        data-alt="Technician checking an air conditioning unit on a wall"
                        src={courseLangingImage} />

                </div>
                <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-10">
                    <div className="max-w-3xl flex flex-col gap-8">
                        <div className='inline-flex items-center justify-center w-full md:w-[50%] gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
                            <p className='font-semibold'><span className='font-bold'>New:</span> Feature integrated</p>
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h3
                            className="text-white text-3xl md:text-4xl lg:text-5xl text-start font-accent  leading-none tracking-tight">
                            <span className='font-bold'>Professional training courses</span><br />
                            <span className="text-primary fugaz">by Escape Ltd</span><br />

                        </h3>
                        <p
                            className="text-slate-200 text-start text-lg md:text-xl font-light leading-relaxed max-w-xxl border-l-4 border-primary pl-6">
                            Practical courses in Carpentry,<br /> Wooden Floor Installation,
                            Interior design, and Project Management — <br />
                            <span className='font-semibold'>taught by industry professionals.</span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a className="flex gap-3 items-center justify-center rounded-full h-14 px-10 bg-primary hover:bg-primary-dark text-white text-base font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/30"
                                href="#courses">
                                View Course <ArrowDown />
                            </a>
                            <a className="flex gap-3 items-center justify-center rounded-full h-14 px-10 bg-white hover:bg-slate-100 text-slate-900 text-base font-bold transition-all shadow-lg"
                                href="tel:+250783728119"
                                target="_blank"
                                rel="noreferrer">
                                Enroll Now <Phone size={22} />
                            </a>

                        </div>
                    </div>
                </div>
            </section>

            <section id='courses' className="scroll-mt-20 w-full px-4 py-4 my-15 md:px-20">
                {/* Header */}
                <div className="mb-10 w-full">
                    <h2 className="text-2xl md:text-3xl fugaz text-secondary font-bold ">
                        Professional Training Programs
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-gray-600">
                        Practical, industry-driven courses designed to equip you with
                        real-world skills in interior design, construction finishing, and
                        fabrication.
                    </p>
                </div>

                {/* Courses */}
                <div className="flex flex-col gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="flex flex-col md:flex-row w-full items-start md:items-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm gap-4 md:gap-0"
                        >
                            {/* Image */}
                            <div className="w-full md:w-[30%] h-48 md:h-32 overflow-hidden rounded-lg">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className='md:w-[50%]'>
                                <div className="w-full md:px-6">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {course.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="w-full md:px-6">
                                    <p className="text-sm text-gray-600">{course.description}</p>
                                </div>
                            </div>
                            {/* Title */}


                            {/* CTA */}
                            <div className="w-full md:w-[20%] ">
                                <a href="tel:+250783728119"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full flex gap-3  items-center justify-center  md:w-auto rounded-lg bg-black md:px-1 lg:px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
                                    <span>Enroll Now </span><Phone size={22} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>

    )
}

export default Courses