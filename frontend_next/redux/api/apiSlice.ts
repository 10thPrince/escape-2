// redux/api/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, { getState }) => {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('userInfo');
        if (stored) {
          const { token } = JSON.parse(stored);
          headers.set('authorization', `Bearer ${token}`);
        }
      }
      return headers;
    }
  }),
  tagTypes: ['User', 'Projects'],
  endpoints: () => ({})
});
