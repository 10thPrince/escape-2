import { apiSlice } from "./apiSlice";

const PROJECT_URL = '/api/projects';

export const projectsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Fetch all projects (should be a query, not a mutation)
    getProjects: builder.query({
      query: () => ({
        url: `${PROJECT_URL}/`,
        method: 'GET',
      }),
      providesTags: ['Projects'],
    }),

    // ✅ Create a new project
    createProject: builder.mutation({
      query: (data) => ({
        url: `${PROJECT_URL}/`,
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem('userInfo')
              ? JSON.parse(localStorage.getItem('userInfo')).token
              : ''
          }`,
        },
      }),
      invalidatesTags: ['Projects'],
    }),
  }),
});

// ✅ Correct hook names (RTK Query auto-generates these)
export const {
  useGetProjectsQuery,
  useCreateProjectMutation,
} = projectsApiSlice;
