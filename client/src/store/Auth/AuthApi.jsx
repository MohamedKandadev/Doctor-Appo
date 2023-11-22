import apiSlice from '../api';
import { userLoggedIn } from './AuthSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "auth",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result)
          dispatch(
              userLoggedIn({
                user: result.data.user,
              })
          );
        } catch (err) {
            // do nothing
        }
      }
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "auth/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result)
          dispatch(
              userLoggedIn({
                user: result.data.user,
              })
          );
        } catch (err) {
            // do nothing
        }
      }
    }),
    getCurrenUser: builder.query({
      query: _ => `users/me`,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result)
          dispatch(
            userLoggedIn({
              user: result.data.user,
            })
          );
        } catch (err) {
            // do nothing
        }
      }
    }),
  })
})

export const { 
  useLoginMutation,
  useRegisterMutation,
  useGetCurrenUserQuery,
} = authApi