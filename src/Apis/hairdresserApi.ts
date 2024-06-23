import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const hairdresserApi = createApi({
  reducerPath: "hairdresserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7141/api/",
  }),
  tagTypes: ["HairdresserItems"],
  endpoints: (builder) => ({
    //Get Hairdresser
    getHairdressers: builder.query({
      query: () => ({
        url: "HairdresserInfo",
      }),
      providesTags: ["HairdresserItems"],
    }),
    getAllHairdresser: builder.query({
      query: ({ pageNumber, pageSize }) => ({
        url: "HairdresserInfo",
        params: {
          ...(pageNumber && { pageNumber }),
          ...(pageSize && { pageSize }),
        },
      }),
      transformResponse(apiResponse: { Result: any }, meta: any) {
        return {
          apiResponse,
          totalRecords: meta.response.headers.get("X-Pagination"),
        };
      },
      providesTags: ["HairdresserItems"],
    }),
  }),
});

export const { useGetHairdressersQuery, useGetAllHairdresserQuery } =
  hairdresserApi;
export default hairdresserApi;
