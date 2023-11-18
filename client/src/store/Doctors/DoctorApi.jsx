import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import apiSlice from '../api';

export const doctorApi = apiSlice.injectEndpoints({
  // reducerPath: 'doctorApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/doctors' }),
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://doctorbooking.cyclic.app/api/doctors' }),
  endpoints: (builder) => ({
    getBestDoctors: builder.query({
      query: _ => `doctors/best`,
    }),
    getDoctorsBySpecialtie: builder.query({
      query: (doctorFilter) => doctorFilter.specialitie === null ? `doctors/all?page=${doctorFilter.page}&perPage=${doctorFilter.perPage}`: `doctors/specialtie/${doctorFilter.specialitie}?page=${doctorFilter.page}&perPage=${doctorFilter.perPage}`,
      // query: (doctorFilter) => `doctors/specialtie/${doctorFilter.specialitie}?page=${doctorFilter.page}&perPage=${doctorFilter.perPage}`,
    }),
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetBestDoctorsQuery,
  useGetDoctorsBySpecialtieQuery
} = doctorApi