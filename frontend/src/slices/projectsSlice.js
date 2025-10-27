import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  selectedProject: null,
  loading: false,
  error: null,
}

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setProjects,
  addProject,
  setSelectedProject,
  setLoading,
  setError,
  clearError,
} = projectSlice.actions;

export default projectSlice.reducer;







// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios'

// const api = axios.create({
//   baseURL: import.meta.VITE_API_URL,
// });


// const getAuthHeader = () => {
//   const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
//   return userInfo ? { Authorization: `Bearer ${userInfo.token}` } : {};
// };

// export const addProject = createAsyncThunk('/api/projects/', async (formData, { rejectWithValue }) => {
//   try {
//     const headers = {
//       ...getAuthHeader(),
//       'Content-Type': 'multipart/form-data',
//     };
//     const { data } = await api.post('/api/projects', formData, { headers });
//     return data;
//   } catch (err) {
//     return rejectWithValue(err.response?.data?.message || err.message);
//   }
// });


// const projectsSlice = createSlice({
//   name: 'projects',
//   initialState: {
//     projects: [],
//     loading: false,
//     error: null,
//     success: false,
//   },
//   reducers: {
//     clearError(state) { state.error = null; },
//     clearSuccess(state) { state.success = false; }
//   },
//   extraReducers: (builder) => {
//     builder
//       // fetch
//       .addCase(fetchProjects.pending, (state) => { state.loading = true; state.error = null; })
//       .addCase(fetchProjects.fulfilled, (state, action) => { state.loading = false; state.projects = action.payload; })
//       .addCase(fetchProjects.rejected, (state, action) => { state.loading = false; state.error = action.payload; })

//       // add
//       .addCase(addProject.pending, (state) => { state.loading = true; state.error = null; state.success = false; })
//       .addCase(addProject.fulfilled, (state, action) => {
//         state.loading = false;
//         state.projects.unshift(action.payload); // newest first
//         state.success = true;
//       })
//       .addCase(addProject.rejected, (state, action) => { state.loading = false; state.error = action.payload; })

//     //   // delete
//     //   .addCase(deleteProject.pending, (state) => { state.loading = true; state.error = null; })
//     //   .addCase(deleteProject.fulfilled, (state, action) => {
//     //     state.loading = false;
//     //     state.projects = state.projects.filter(p => p._id !== action.payload);
//     //   })
//     //   .addCase(deleteProject.rejected, (state, action) => { state.loading = false; state.error = action.payload; })

//     //   // update
//     //   .addCase(updateProject.pending, (state) => { state.loading = true; state.error = null; })
//     //   .addCase(updateProject.fulfilled, (state, action) => {
//     //     state.loading = false;
//     //     state.projects = state.projects.map(p => p._id === action.payload._id ? action.payload : p);
//     //     state.success = true;
//     //   })
//     //   .addCase(updateProject.rejected, (state, action) => { state.loading = false; state.error = action.payload; });
//   }
// });

// export const { clearError, clearSuccess } = projectsSlice.actions;
// export default projectsSlice.reducer;

