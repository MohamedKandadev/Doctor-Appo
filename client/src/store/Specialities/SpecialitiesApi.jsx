import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import apiSlice from '../api';

export const specialitiesApi = apiSlice.injectEndpoints({
  // reducerPath: 'doctorApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/doctors' }),
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://doctorbooking.cyclic.app/api/specialties' }),
  endpoints: (builder) => ({
    getSpecialities: builder.query({
      query: _ => `specialties/`,
    }),
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSpecialitiesQuery } = specialitiesApi