import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userLoginApi = createApi({
  reducerPath: "userLoginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7141/api/",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ userName, password }) => ({
        url: "Login/Login",
        method: "POST",
        params: {
          userName,
          password,
        },
      }),
    }),
  }),
});

export const { useLoginUserMutation } = userLoginApi;
export default userLoginApi;
