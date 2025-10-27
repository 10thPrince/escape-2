// import { useState } from "react";
// import { useCreateProjectMutation } from "../../slices/projectsApiSlice.js";
// import Navbar from "../Navbar.jsx";
// import Footer from "../Footer.jsx";

// const CreateProject = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [images, setImages] = useState([]);
//   const [createProject, { isLoading }] = useCreateProjectMutation();


//   const [previewUrls, setPreviewUrls] = useState([]);

  
  
//   const handleFileChange = (e) => {
//     setImages([...e.target.files]);
//   };



//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     images.forEach((file) => formData.append("images", file));

//     try {
//       await createProject(formData).unwrap();
//       alert("Project created successfully!");
//       setTitle(""); setDescription(""); setImages([]);
//     } catch (err) {
//       alert(err?.data?.message || "Failed to create project.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="my-30">
//         <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow space-y-4">
//           <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded" />
//           <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded" />
//           <div>
//             <input type="file" multiple onChange={handleFileChange} className="w-full p-2 border rounded" />
//           </div>

//           <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
//             {previewUrls.map((u, i) => <img key={i} src={u} alt="preview" width={120} />)}
//           </div>
//           <button type="submit" disabled={isLoading} className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
//             {isLoading ? "Creating..." : "Create Project"}
//           </button>
//         </form>
//       </div>

//       <Footer />
//     </>

//   );
// };

// export default CreateProject;
