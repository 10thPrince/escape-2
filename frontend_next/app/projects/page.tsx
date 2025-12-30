import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div>
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
                    Our Memorable <span className="text-glow">Projects</span>
                </h1>
            </section>
        </div>
    )
}

export default Projects