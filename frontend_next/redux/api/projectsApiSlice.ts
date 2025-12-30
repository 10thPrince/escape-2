// redux/api/projectsApiSlice.ts
import { apiSlice } from './apiSlice';

const PROJECT_URL = '/api/projects';

export const projectsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: PROJECT_URL,
        method: 'GET',
      }),
      providesTags: ['Projects'],
    }),

    createProject: builder.mutation({
      query: (data) => ({
        url: PROJECT_URL,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Projects'],
    }),

    deleteProject: builder.mutation({
      query: (id) => ({
        url: `${PROJECT_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Projects'],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useCreateProjectMutation,
  useDeleteProjectMutation,
} = projectsApiSlice;
