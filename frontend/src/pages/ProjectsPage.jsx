import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import baseImage from '../assets/hero-2.jpg'
import image2 from '../assets/services/CEILING.jpg'
import image3 from '../assets/services/DOORS.webp'
import image4 from '../assets/services/KITCHEN.jpg'

const projects = [
    {
        id: 1,
        title: "Modern Office Design",
        category: "Interior Design",
        image: [baseImage],
        path: "/projects/modern-office-design",
    },
    {
        id: 2,
        title: "Luxury Home Renovation",
        category: "Renovation",
        image: [image2],
        path: "/projects/luxury-home-renovation",
    },
    {
        id: 3,
        title: "Landscape Garden",
        category: "Landscape Design",
        image: [image3],
        path: "/projects/landscape-garden",
    },
    {
        id: 4,
        title: "Commercial Building",
        category: "Architecture",
        image: [image4],
        path: "/projects/commercial-building",
    }
]

const ProjectsPage = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-40">
                <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Our Projects
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            to={project.path}
                            className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="relative h-64 w-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4 bg-white">
                                <p className="text-sm text-gray-500">{project.category}</p>
                                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-[#A57F2F] transition-colors">
                                    {project.title}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProjectsPage