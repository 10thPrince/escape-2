import React from 'react'
import courseLangingImage from '../assets/landing-page-2.jpg'
import { ArrowDown, CircleStar, Phone, Sparkles, StarIcon } from 'lucide-react'

const Courses = () => {
  return (
    <section className="relative bg-white h-[85vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-slate-900/40 z-10"></div>
            <img alt="HVAC Technician" className="w-full h-full object-cover object-center"
                data-alt="Technician checking an air conditioning unit on a wall"
                src={courseLangingImage} />
            
        </div>
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-10">
            <div className="max-w-3xl flex flex-col gap-8">
                <div className='inline-flex items-center justify-center w-[50%] gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
                                <p className='font-semibold'><span className='font-bold'>New:</span> Feature integrated</p>
                                <Sparkles className="w-6 h-6 fill-primary" />
                            </div>
                <h3
                    className="text-white text-3xl md:text-4xl lg:text-5xl text-start font-accent font-bold leading-none tracking-tight">
                    Professional training courses<br />
                    <span className="text-primary">by Escape Ltd</span><br />
                    
                </h3>
                <p
                    className="text-slate-200 text-start text-lg md:text-xl font-light leading-relaxed max-w-xxl border-l-4 border-primary pl-6">
                    Practical courses in interior design, construction finishing, and installation — <br /> 
                    taught by industry professionals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a className="flex gap-3 items-center justify-center rounded-full h-14 px-10 bg-primary hover:bg-primary-dark text-white text-base font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/30"
                        href="/#">
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
  )
}

export default Courses