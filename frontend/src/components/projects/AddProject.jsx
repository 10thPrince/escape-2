import React, { useState } from "react";
import { useCreateProjectMutation } from "../../slices/projectsApiSlice.js";
import { useForm } from "react-hook-form";
import Spinner from "../Spinner.jsx";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";

export default function AddProject() {
  const [previewUrls, setPreviewUrls] = useState([]);
  const [createProject, { isLoading, isSuccess, isError, error }] = useCreateProjectMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handlePreview = (e) => {
    const fileList = Array.from(e.target.files);
    const urls = fileList.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);

      for (let i = 0; i < Math.min(data.images.length, 3); i++) {
        formData.append("images", data.images[i]);
      }

      await createProject(formData).unwrap();
      reset();
      setPreviewUrls([]);
    } catch (err) {
      console.error("Error uploading:", err);
    }
  };

  return (
    <>
      
      <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-3xl bg-white p-8 sm:p-10 rounded-2xl shadow-lg space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-center fugaz">
            Add a New <span className="text-primary">Project</span>
          </h1>

          {/* Title */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Project Title</label>
            <input
              {...register("title", {
                required: "Title is required",
                minLength: { value: 3, message: "Title must be at least 3 characters" },
              })}
              placeholder="Enter project title"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Project Description</label>
            <textarea
              {...register("description", {
                required: "Description is required",
                minLength: { value: 10, message: "Description must be at least 10 characters" },
              })}
              placeholder="Describe the project..."
              rows={5}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
            )}
          </div>

          {/* Images */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Upload Images (max 3)</label>
            <input
              type="file"
              accept="image/*"
              multiple
              {...register("images", {
                required: "Please upload at least one image",
                validate: {
                  maxLength: (files) =>
                    files.length <= 3 || "You can upload up to 3 images only",
                },
              })}
              onChange={handlePreview}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.images && <p className="text-red-500 text-sm mt-1">{errors.images.message}</p>}
          </div>

          {/* Image Previews */}
          {previewUrls.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {previewUrls.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt="Preview"
                  className="w-full h-32 sm:h-40 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          )}

          {/* Submit */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition"
            >
              {isLoading ? <Spinner /> : "Add Project"}
            </button>
          </div>

          {/* Feedback Messages */}
          {isError && (
            <p className="text-red-500 text-center">{error?.data?.message || "Error adding project"}</p>
          )}
          {isSuccess && <p className="text-green-500 text-center">Project added successfully!</p>}
        </form>
      </main>
    </>
  );
}
