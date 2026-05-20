import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  selectedProject: null,

  isLoading: false,

  error: null,
};

const projectSlice = createSlice({
  name: "projects",

  initialState,

  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },

    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },

    addProject: (state, action) => {
      state.projects.unshift(action.payload);
    },

    updateProject: (state, action) => {
      state.projects = state.projects.map(
        (project) =>
          project.id === action.payload.id
            ? action.payload
            : project
      );

      if (
        state.selectedProject?.id ===
        action.payload.id
      ) {
        state.selectedProject = action.payload;
      }
    },

    removeProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );

      if (
        state.selectedProject?.id ===
        action.payload
      ) {
        state.selectedProject = null;
      }
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setProjects,
  setSelectedProject,
  addProject,
  updateProject,
  removeProject,
  setLoading,
  setError,
} = projectSlice.actions;

export default projectSlice.reducer;