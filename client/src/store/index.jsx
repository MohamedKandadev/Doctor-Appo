import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'

import { doctorApi } from './Doctors/DoctorApi'
import { specialitiesApi } from './Specialities/SpecialitiesApi';
import apiSlice from "./api";

const store = configureStore({
    reducer: {
      [doctorApi.reducerPath]: doctorApi.reducer,
      [specialitiesApi.reducerPath]: specialitiesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware)
});
setupListeners(store.dispatch)
export default store;