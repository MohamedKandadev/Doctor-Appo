import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://doctorbooking.cyclic.app/api/' }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});

export default apiSlice