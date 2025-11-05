import React, { useState } from "react";
import { useDeleteProjectMutation, useGetProjectsQuery } from "../../slices/projectsApiSlice";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const FetchProjects = () => {

    const { data: projects, isLoading, isError, error } = useGetProjectsQuery();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [deleteProject] = useDeleteProjectMutation();
    const {userInfo} = useSelector((state) => state.auth)

    if (isLoading) return (
        <>
            <p className="text-center my-50 py-10">Loading...</p>
        </>
    );
    if (isError) return (
        <>
            <p className="text-center my-50 text-red-500 py-10">{error?.data?.message || "Failed to load projects."}</p>
            
        </>
    );

    const handleDelete = async(id) => {
        if(window.confirm('Are ypu sure you want to delete this Project?')){
            try {
                await deleteProject(id).wrap();
                toast('Project deleted successful');
            } catch (error) {
                console.error(error);
                toast('Failed to delete Project');
            }
        }else{

        }
    }

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentIndex(0);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
    };

    const prevImage = () => {
        if (!selectedProject) return;
        setCurrentIndex((prev) =>
            prev === 0 ? selectedProject.images.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        if (!selectedProject) return;
        setCurrentIndex((prev) =>
            prev === selectedProject.images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="min-h-screen flex flex-col">
            <section className="flex-1 bg-gray-50 py-16 my-20 px-6">
                <div className="max-w-6xl mx-auto text-center my-15">
                    <h2 className="text-3xl md:text-4xl font-bold fugaz text-primary mb-3">Our Projects</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map(project => (
                        <motion.div
                            key={project._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            onClick={() => openModal(project)}
                        >
                            {project.images && project.images.length > 0 && (
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-64 object-cover"
                                />
                            )}
                            <div className="p-5">
                                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 text-sm">{project.description}</p>
                            </div>
                            {userInfo ? (<buttton onClick={() => handleDelete(project._id)}
                                className="bg-red-500 text-white py-1 px-3 rounded mt-2 hover:bg-red-600"
                            >
                                Delete
                            </buttton>) : (<></>)}
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* Modal */}
            {modalOpen && selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <button
                        className="absolute top-5 right-5 text-white text-3xl font-bold"
                        onClick={closeModal}
                    >
                        &times;
                    </button>

                    <div className="relative max-w-3xl w-full mx-auto">
                        <img
                            src={selectedProject.images[currentIndex]}
                            alt={`${selectedProject.title} ${currentIndex + 1}`}
                            className="w-full h-[60vh] object-cover rounded-lg"
                        />

                        {/* Navigation */}
                        {selectedProject.images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-30 rounded-full px-3 py-1 hover:bg-opacity-60"
                                >
                                    &#10094;
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-30 rounded-full px-3 py-1 hover:bg-opacity-60"
                                >
                                    &#10095;
                                </button>
                            </>
                        )}

                        {/* Title & Description */}
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 rounded-b-lg">
                            <h3 className="text-lg font-semibold">{selectedProject.title}</h3>
                            <p className="text-sm">{selectedProject.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FetchProjects