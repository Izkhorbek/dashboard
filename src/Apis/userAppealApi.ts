import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userAppealInfoApi = createApi({
  reducerPath: "userAppealInfoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7141/api" }),
  tagTypes: ["UserAppealItems"],
  endpoints: (builder) => ({
    //Get Appeals
    getAppealInfo: builder.query({
      query: ({ pageNumber, pageSize }) => ({
        url: "UserAppeals",
        params: {
          pageNumber,
          pageSize,
        },
      }),
      transformResponse: (apiResponse: { Result: any }, meta: any) => {
        console.log(apiResponse);

        return {
          apiResponse,
          totalRecords: meta?.response?.headers.get("X-Pagination"),
        };
      },
      providesTags: ["UserAppealItems"],
    }),
  }),
});

export const { useGetAppealInfoQuery } = userAppealInfoApi;
export default userAppealInfoApi;
