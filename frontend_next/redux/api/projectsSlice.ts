// redux/slices/projectSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Project {
  _id: string;
  title: string;
  description: string;
  image?: string;
}

interface ProjectState {
  projects: Project[];
  selectedProject: Project | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProjectState = {
  projects: [],
  selectedProject: null,
  loading: false,
  error: null,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjects: (state, action:  PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
    addProject: (state, action:  PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    setSelectedProject: (state, action:  PayloadAction<Project | null>) => {
      state.selectedProject = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
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
