
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userInfoApi = createApi({
  reducerPath: "userInfoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7141/api/",
  }),
  tagTypes: ["UserInfoItems"],
  endpoints: (builder) => ({
    // Get UserInfo
    getAllUserInfo: builder.query({
      query: ({ pageNumber, pageSize }) => ({
        url: "UsersInfo",
        params: {
          pageNumber,
          pageSize,
        },
      }),
      transformResponse(apiResponse: { Result: any }, meta: any) {
        return {
          apiResponse,
          totalRecords: meta.response.headers.get("X-Pagination"),
        };
      },
      providesTags: ["UserInfoItems"],
    }),
  }),
});

export const { useGetAllUserInfoQuery } = userInfoApi;
export default userInfoApi;
