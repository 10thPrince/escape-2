import React, { useState } from 'react';
import { useCreateProjectMutation } from '../../slices/projectsApiSlice.js'
import Spinner from '../Spinner.jsx';
import { useForm } from 'react-hook-form';
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'

export default function AddProject() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [createProject, { isLoading, isSuccess, isError, error }] = useCreateProjectMutation();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const handleFiles = (e) => {
    const fileList = Array.from(e.target.files);
    setFiles(fileList);

    const urls = fileList.map(file => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert('Title and description are required');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    files.forEach(file => formData.append('images', file));

    try {
      await createProject(formData).unwrap();
      // Clear form
      setTitle('');
      setDescription('');
      setFiles([]);
      setPreviewUrls([]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit1} className="space-y-10 my-30 max-w-lg mx-auto p-4 border-2 border-primary bg-white rounded-lg shadow">
        <div>
          <h1 className='text-3xl md:text-4xl font-bold fugaz'>ADD A NEW <span className='text-primary'>Project</span> </h1>
        </div>
        <div>
          <input
            {...register('title', {
              required: 'Title is required',
              minLength: {
                value: 3,
                message: 'Title must be at least 3 characters',
              },
            })}
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Project title"
            className="w-full p-2 border rounded"

          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
        <div>
          <textarea
            {...register('description', {
              required: 'Description is required',
              minLength: {
                value: 10,
                message: 'Description should be at least 10 characters',
              },
            })}
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full p-2 border rounded"

          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
        <div>
          <input name='images' type="file" accept="image/*" className='border-1 border-primary h-12 justify-center py-2 w-full text-xl rounde-lg ' multiple onChange={handleFiles}
            {...register('images', {
              required: 'Please upload at least one image',
              validate: {
                maxLength: (files) =>
                  files.length <= 3 || 'You can upload up to 3 images only',
              },
            })}
          />
          {errors.images && (
            <p className="text-red-500 text-sm mt-1">{errors.images.message}</p>
          )}
        </div>

        <div className="flex gap-2 flex-wrap">
          {previewUrls.map((u, i) => (
            <img key={i} src={u} alt="preview" className="w-24 h-24 object-cover rounded" />
          ))}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary font-bold text-white py-2 px-4 rounded hover:bg-gray-800"
        >
          {isLoading ? <Spinner /> : 'Add Project'}
        </button>
        {isError && <p className="text-red-500">{error?.data?.message || "Error adding project"}</p>}
        {isSuccess && <p className="text-green-500">Project added successfully!</p>}
      </form>
      <Footer />
    </>

  );
}
