import React from 'react'
import content1 from '../assets/content/content-1.jpeg'
import content2 from '../assets/content/content-2.jpeg'

const Content = () => {
    return (
        <div className="space-y-20 px-6 md:px-20 py-16 bg-white">
            {/* --- Vorma Section --- */}
            <div className="flex flex-col md:flex-row items-center gap-10">
                {/* Text */}
                <div className="md:w-1/2 space-y-5">
                    <h2 className="text-3xl md:text-4xl font-bold fugaz uppercase tracking-wide">
                        NEW VORMA – A LUXURY TOUCH FOR MODERN BATHROOMS
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                       Experience the perfect blend of elegance and functionality with our Vorma bathroom designs. Crafted with precision and premium finishes, Vorma brings a timeless aesthetic that enhances comfort without compromising on durability. Every element is built to withstand moisture while keeping your space soft, serene, and beautifully modern.
                    </p>
                    <button className="border border-primary px-6 py-3 uppercase tracking-wide hover:bg-primary hover:text-white transition">
                        Discover Vorma
                    </button>
                </div>

                {/* Image */}
                <div className="md:w-1/2">
                    <img
                        src={content1}
                        alt="Vorma Herringbone Floor"
                        className="rounded-lg h-[80vh] w-full object-cover"
                    />
                </div>
            </div>

            {/* --- StayClean Section --- */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                {/* Text */}
                <div className="md:w-1/2 space-y-5">
                    <h2 className="text-3xl md:text-4xl font-bold fugaz uppercase tracking-wide">
                        NEW VORMA — KITCHEN LUXURY REIMAGINED
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Transform your kitchen into a centerpiece of style and comfort. Vorma combines the classic herringbone look with premium finishes designed to resist spills, stains, and heavy use — all while adding warmth and refined texture to your culinary space. Ideal for open-plan living and high-traffic kitchens that demand both beauty and performance.
                    </p>
                    <button className="border border-primary px-6 py-3 uppercase tracking-wide hover:bg-primary hover:text-white transition">
                        Discover Vorma
                    </button>
                </div>

                {/* Image */}
                <div className="md:w-1/2">
                    <img
                        src={content2}
                        alt="StayClean+ Floor"
                        className="rounded-lg w-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default Content