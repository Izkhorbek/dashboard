import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const statisticApi = createApi({
  reducerPath: "statisticApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7141/api/",
  }),
  tagTypes: ["statisticItems"],
  endpoints: (builder) => ({
    //get statistics itemas
    getStatisticsInfo: builder.query({
      query: () => ({
        url: "MainStatistic",
      }),
      transformResponse(apiResponse: any) {
        return { apiResponse };
      },
      providesTags: ["statisticItems"],
    }),
  }),
});

export const { useGetStatisticsInfoQuery } = statisticApi;
export default statisticApi;
