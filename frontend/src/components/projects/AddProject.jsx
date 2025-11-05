import React, { useState } from 'react';
import { useCreateProjectMutation } from '../../slices/projectsApiSlice.js';
import { useForm } from 'react-hook-form';
import Spinner from '../Spinner.jsx';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';

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
      formData.append('title', data.title);
      formData.append('description', data.description);

      // Append up to 3 images
      for (let i = 0; i < Math.min(data.images.length, 3); i++) {
        formData.append('images', data.images[i]);
      }

      await createProject(formData).unwrap();
      reset();
      setPreviewUrls([]);
    } catch (err) {
      console.error('Error uploading:', err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-10 my-30 max-w-lg mx-auto p-4 border-2 border-primary bg-white rounded-lg shadow"
    >
      <h1 className="text-3xl md:text-4xl font-bold fugaz">
        ADD A NEW <span className="text-primary">Project</span>
      </h1>

      {/* Title */}
      <div>
        <input
          {...register('title', {
            required: 'Title is required',
            minLength: { value: 3, message: 'Title must be at least 3 characters' },
          })}
          placeholder="Project title"
          className="w-full p-2 border rounded"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      </div>

      {/* Description */}
      <div>
        <textarea
          {...register('description', {
            required: 'Description is required',
            minLength: { value: 10, message: 'Description must be at least 10 characters' },
          })}
          placeholder="Description"
          className="w-full p-2 border rounded"
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
      </div>

      {/* Images */}
      <div>
        <input
          type="file"
          accept="image/*"
          multiple
          {...register('images', {
            required: 'Please upload at least one image',
            validate: {
              maxLength: (files) =>
                files.length <= 3 || 'You can upload up to 3 images only',
            },
          })}
          onChange={handlePreview}
          className="w-full border p-2 rounded"
        />
        {errors.images && <p className="text-red-500 text-sm">{errors.images.message}</p>}
      </div>

      {/* Image Previews */}
      <div className="flex gap-2 flex-wrap">
        {previewUrls.map((u, i) => (
          <img key={i} src={u} alt="preview" className="w-24 h-24 object-cover rounded" />
        ))}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-primary font-bold text-white py-2 px-4 rounded hover:bg-gray-800"
      >
        {isLoading ? <Spinner /> : 'Add Project'}
      </button>

      {/* Messages */}
      {isError && <p className="text-red-500">{error?.data?.message || 'Error adding project'}</p>}
      {isSuccess && <p className="text-green-500">Project added successfully!</p>}
    </form>
  );
}
