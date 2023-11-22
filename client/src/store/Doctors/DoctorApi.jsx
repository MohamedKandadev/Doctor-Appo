import apiSlice from '../api';

export const doctorApi = apiSlice.injectEndpoints({
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

export const { 
  useGetBestDoctorsQuery,
  useGetDoctorsBySpecialtieQuery
} = doctorApi