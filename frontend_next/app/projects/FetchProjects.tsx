"use client";

import { useState } from "react";
import { useDeleteProjectMutation, useGetProjectsQuery } from "@/redux/api/projectsApiSlice";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function FetchProjects() {
  const { data: projects, isLoading, isError, error } = useGetProjectsQuery({});
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deleteProject] = useDeleteProjectMutation();
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  const { userInfo } = useSelector((state: any) => state.auth);

  if (isLoading) {
    return <p className="text-center my-50 py-10">Loading...</p>;
  }

  if (isError) {
    return (
      <p className="text-center my-50 text-red-500 py-10">
        {(error as any)?.data?.message || "Failed to load projects."}
      </p>
    );
  }

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this Project?")) {
      try {
        await deleteProject(id).unwrap();
        toast("Project deleted successfully");
      } catch (err) {
        console.error(err);
        toast("Failed to delete Project");
      }
    }
  };

  const openModal = (project: any) => {
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

  const handleImageLoad = (e: any) => {
    setImgSize({ width: e.target.naturalWidth, height: e.target.naturalHeight });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-1 bg-gray-50 py-16 my-20 px-6">
        <div className="max-w-6xl mx-auto text-center my-15">
          <h2 className="text-3xl md:text-4xl font-bold fugaz text-primary mb-3">
            Our Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project: any) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openModal(project)}
            >
              {project.images?.length > 0 && (
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
            </motion.div>
          ))}
        </div>
      </section>

      {modalOpen && selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative w-full max-w-4xl mx-auto"
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-50 text-red-500 text-3xl font-bold"
            >
              &times;
            </button>

            <div className="relative w-full flex justify-center">
              <img
                src={selectedProject.images[currentIndex]}
                alt={`${selectedProject.title} ${currentIndex + 1}`}
                onLoad={handleImageLoad}
                className="w-full max-w-full max-h-[85vh] object-contain rounded-xl shadow-lg"
              />

              {selectedProject.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute top-1/2 left-2 text-white text-4xl">
                    &#10094;
                  </button>
                  <button onClick={nextImage} className="absolute top-1/2 right-2 text-white text-4xl">
                    &#10095;
                  </button>
                </>
              )}
            </div>

            <div className="mt-3 text-white text-center px-2">
              <h3 className="text-xl font-semibold">{selectedProject.title}</h3>
              <p className="text-sm">{selectedProject.description}</p>
            </div>

            <div className="flex justify-center gap-2 mt-4 overflow-x-auto">
              {selectedProject.images.map((img: string, i: number) => (
                <img
                  key={i}
                  src={img}
                  className={`w-16 h-16 object-cover rounded-lg border-2 ${
                    i === currentIndex ? "border-primary" : "border-transparent"
                  }`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
