// frontend/src/components/AddProject.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProject } from '../../slices/projectsSlice.js';
import Spinner from '../Spinner.jsx';

export default function AddProject() {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(state => state.projects);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFiles = (e) => {
    const fileList = e.target.files;
    setFiles(fileList);

    // previews
    const urls = [];
    for (let i = 0; i < fileList.length; i++) {
      urls.push(URL.createObjectURL(fileList[i]));
    }
    setPreviewUrls(urls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Title and description are required');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
    }
    

    dispatch(addProject(formData));

    // optional: clear form on success (could be done in effect watching success)
    setTitle(''); setDescription(''); setFiles([]); setPreviewUrls([]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Project title" required />
      </div>
      <div>
        <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
      </div>
      <div>
        <input type="file" accept="image/*" multiple onChange={handleFiles} />
      </div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {previewUrls.map((u, i) => <img key={i} src={u} alt="preview" width={120} />)}
      </div>
      <button type="submit" disabled={loading}>{loading ? <Spinner /> : 'Add Project'}</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Project added</p>}
    </form>
  );
}
